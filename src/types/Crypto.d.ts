export interface CryptoCurrencyDataType {
	USD: {
		FROMSYMBOL: string;
		PRICE: string;
		SUPPLY: string;
		CHANGE24HOUR: string;
	}
}

export interface CryptoDataType {
	DISPLAY: {
		[ key: string ]: CryptoCurrencyDataType
	}
}