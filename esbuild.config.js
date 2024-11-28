const esbuild = require( "esbuild" );
const isWatchMode = process.argv.includes( '--watch' );

const buildOptions = ( {
	entryPoints: [ './src/index.tsx' ],
	bundle: true,
	outfile: './page-override/dist/bundle.js',
	minify: !isWatchMode,
	target: [ 'es2020' ],
	loader: { '.tsx': 'tsx' },
	jsx: 'automatic',
});

// Enable watch mode using context
async function build() {
	const context = await esbuild.context( buildOptions );

	if ( isWatchMode ) {
		console.log( 'Watching for changes...' );
		await context.watch();
	} else {
		await context.rebuild();
		await context.dispose();
		console.log( 'Build completed!' );
	}
}

build()
	.catch(( err ) => {
		console.error( 'Build failed:', err );
		process.exit( 1 );
	});