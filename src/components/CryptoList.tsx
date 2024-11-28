import React from "react";
import CryptoListItem from "./CryptoListItem";
import { CryptoDataType } from "../types/Crypto";

interface ListPropTypes {
	data: CryptoDataType
}

const CryptoList = ( props: ListPropTypes ) => {
	const data = props.data[ 'DISPLAY' ];

	if ( !data ) {
		return (
			<tr>
				<td>1</td>
				<td>2</td>
				<td>3</td>
				<td>4</td>
				<td>5</td>
			</tr>
		);
	}

	return Object.keys( data ).map(( k, count ) => {
		return (
			<CryptoListItem key={ count } count={ count + 1 } data={ data[k] } />
		)
	});
}
export default CryptoList;