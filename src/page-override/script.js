// C H R O M E  C R Y P T O
// Omeiza Owuda wrote this code

function InitCrypto() {
    const tableRowTemplate = document.getElementById('table__row--template').content.querySelector('tr'),
    Table = document.querySelector('.crypto__list'),
    tableRowBody = Table.querySelector('.crypto__list--body'),
    tableRowHeader = Table.querySelector('.crypto__list--header'),
    cryptoObject = JSON.parse('[{"Bitcoin": "BTC","Ethereum": "ETH","Ripple": "XRP","Bitcoin Cash": "BCH","Cardano": "ADA","Litecoin": "LTC","Dash": "DASH","Monero": "XHR","Bitcoin Gold": "BTG","Ethereum Classic": "ETC","Zcash": "ZEC"}]');

    function objectToArray(thisObject) {
        let newArray = Object.keys(thisObject).map(function(k) { 
            return thisObject[k];
        });
    
        return newArray;
    }
    
    var cryptoArray = objectToArray(cryptoObject[0]);
    fsyms = new Array();

    for (let a = 0; a <= cryptoArray.length - 1; a++) {
        fsyms.push(cryptoArray[a]);
    }
    fsyms = fsyms.join(",");

    var request = new XMLHttpRequest();
    request.open('GET', `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms}&tsyms=USD`);
    request.responseType = 'json';

    request.onload = function() {
      if (request.status === 200) {
        let responseArray = objectToArray(request.response["DISPLAY"]);

        if (responseArray.length > 0) {
            Table.style.display = 'table';
            document.querySelector('.credit').style.display = 'block';
        }

        for (let z = 0; z <= responseArray.length - 1; z++) {
            let clone = tableRowTemplate.cloneNode(true);
            tableRowBody.appendChild(clone);

            let x = clone.querySelector('[data-role=numbering]');
            if (x) x.innerHTML = z + 1;

            x = clone.querySelector('[data-role=symbol]');
            if (x) x.innerHTML = responseArray[z]["USD"]["FROMSYMBOL"];

            x = clone.querySelector('[data-role=price]');
            if (x) x.innerHTML = responseArray[z]["USD"]["PRICE"];

            x = clone.querySelector('[data-role=volume]');
            if (x) x.innerHTML = responseArray[z]["USD"]["SUPPLY"];

            x = clone.querySelector('[data-role=change]');
            if (x) x.innerHTML = responseArray[z]["USD"]["CHANGE24HOUR"];
        }
      } else {
        console.log('Error loading crypto data:' + request.statusText);
      }
    };

    request.onerror = function() {
        console.log('There was a network error');
    };

    request.send();
};

InitCrypto();