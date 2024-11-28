import React from 'react';
import CryptoList from './CryptoList';
import { CryptoDataType } from "../types/Crypto";

interface ContentPropType {
	data: CryptoDataType
}

const CryptoContent = ( props: ContentPropType ) => {
	return (
		<tbody className="crypto__list--body">
			<CryptoList data={ props.data } />
		</tbody>
	);
}

export default CryptoContent;