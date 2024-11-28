import React, { useEffect, useState } from "react";
import CryptoMap from "./data/CryptoMap";
import CryptoContent from "./components/CryptoContent";
import { CryptoDataType } from "./types/Crypto";
import { objectToArray } from "./utils/Helpers";

interface StateType {
	cryptoResult: CryptoDataType | null
}

const App = () => {
	const [ data, setData ] = useState< StateType >( { cryptoResult: null } );

	useEffect(() => {
		const cryptoSymbols = CryptoMap();
		console.log(cryptoSymbols);

		fetch( `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ ( objectToArray( cryptoSymbols ) ).join(",") }&tsyms=USD` )
			.then(( response ) => {
				return response.json();
			})
			.then(( data: CryptoDataType ) => {
				setData({ cryptoResult: data })
			})
			.catch(( err ) => {
				console.error( `Fetch error: ${ err }` )
			});
	});

	if ( !data.cryptoResult ) {
		return 'Loading';
	}

	return (
		<table className="crypto__list">
			<thead className="crypto__list--header">
				<tr>
					<th>#</th>
					<th>Crypto</th>
					<th>Price</th>
					<th>Circulating Supply</th>
					<th>Change (24h)</th>
				</tr>
			</thead>
			<CryptoContent data={ data.cryptoResult } />
		</table>
	);
};

export default App;