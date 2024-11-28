import React from "react";
import { CryptoCurrencyDataType } from "../types/Crypto";

interface ListItemPropType {
	key: number;
	count: number;
	data: CryptoCurrencyDataType;
}

const CryptoListItem = ( props: ListItemPropType ) => {
	return (
		<tr key={ props.count }>
			<td>{ props.count } </td>
			<td>{ props.data[ "USD" ][ "FROMSYMBOL" ]}</td>
			<td>{ props.data[ "USD" ][ "PRICE" ]}</td>
			<td>{ props.data[ "USD" ][ "SUPPLY" ]}</td>
			<td>{ props.data[ "USD" ][ "CHANGE24HOUR" ]}</td>
		</tr>
	)
}

export default CryptoListItem;