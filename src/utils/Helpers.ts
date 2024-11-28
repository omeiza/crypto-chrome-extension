export const cryptoObject = (): object[] => {
	return JSON.parse('{"Bitcoin": "BTC","Ethereum": "ETH","Ripple": "XRP","Bitcoin Cash": "BCH","Cardano": "ADA","Litecoin": "LTC","Dash": "DASH","Monero": "XHR","Bitcoin Gold": "BTG","Ethereum Classic": "ETC","Zcash": "ZEC"}');
}

export const objectToArray = ( thisObject: object[] ): any[] => {
	return Object.keys( thisObject ).map(( k: any ): any => {
		return thisObject[ k ];
	});
}