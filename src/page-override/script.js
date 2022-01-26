// C H R O M E  C R Y P T O
// Chrome extension that lists popular crypto, their prices and volume

const cryptoChromeExtension = {};

cryptoChromeExtension.objectToArray = (thisObject) => {
    return Object.keys(thisObject).map((k) => {
        return thisObject[k];
    });
}

cryptoChromeExtension.initCrypto = () => {
    const tableRowTemplate = document.getElementById('table__row--template').content.querySelector('tr'),
    table = document.querySelector('.crypto__list'),
    tableRowBody = table.querySelector('.crypto__list--body'),
    cryptoObject = JSON.parse('[{"Bitcoin": "BTC","Ethereum": "ETH","Ripple": "XRP","Bitcoin Cash": "BCH","Cardano": "ADA","Litecoin": "LTC","Dash": "DASH","Monero": "XHR","Bitcoin Gold": "BTG","Ethereum Classic": "ETC","Zcash": "ZEC"}]');

    let cryptoArray = cryptoChromeExtension.objectToArray(cryptoObject[0]),
        fsyms = [];

    for (let a = 0; a <= cryptoArray.length - 1; a++) {
        fsyms.push(cryptoArray[a]);
    }

    fsyms = fsyms.join(",");

    // Fetch API
    fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms}&tsyms=USD`)
        .then((response) => {
            return response.json()
        })

        .then((data) => {
            let dataArray = cryptoChromeExtension.objectToArray(data['DISPLAY']);

            if (dataArray.length > 0) {
                table.style.display = 'table';
                document.querySelector('.credit').style.display = 'block';
            }

            for (let z = 0; z <= dataArray.length - 1; z++) {
                let clone = tableRowTemplate.cloneNode(true);
                tableRowBody.appendChild(clone);

                let x = clone.querySelector('[data-role=numbering]');
                if (x) x.innerHTML = `${z + 1}`;

                x = clone.querySelector('[data-role=symbol]');
                if (x) x.innerHTML = dataArray[z]["USD"]["FROMSYMBOL"];

                x = clone.querySelector('[data-role=price]');
                if (x) x.innerHTML = dataArray[z]["USD"]["PRICE"];

                x = clone.querySelector('[data-role=volume]');
                if (x) x.innerHTML = dataArray[z]["USD"]["SUPPLY"];

                x = clone.querySelector('[data-role=change]');
                if (x) x.innerHTML = dataArray[z]["USD"]["CHANGE24HOUR"];
            }
        })

        .catch((err) => {
            console.error('Error loading crypto data:' + err);
        })
}

cryptoChromeExtension.initCrypto();