import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById( 'root' );

// Ensure the root element exists
if ( !rootElement ) {
	throw new Error( "Root element not found. Ensure your HTML file has a <div id='root'></div>" );
}

// Create the React root
const root = ReactDOM.createRoot( rootElement as HTMLElement );

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);