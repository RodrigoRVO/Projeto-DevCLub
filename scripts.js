

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyPrincipal = document.querySelector(".currrency-principal")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const dolarToday = 4.94
    const euroToday = 5.37
    const libraToday = 6.28
    const bitcoinToday = 335.965
    const realToday = 0.20


    //currency to convert // 
    
    if (currencyPrincipal.value == 'real') {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)
    }

    if (currencyPrincipal.value == 'dolar') {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputCurrencyValue)
    }

    if (currencyPrincipal.value == 'euro') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
    }

    if (currencyPrincipal.value == 'libra') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue)
    }

    if (currencyPrincipal.value == 'bitcoin') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue)
    }


    //------------------------------------------------------------------------//
  
    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == 'bitcoin'){
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue/bitcoinToday)
    }



    if (currencySelect.value == 'real'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue/realToday)

    }

    //----------------------------------------------------------------------------------//


    if (currencyPrincipal.value == 'dolar' && currencySelect.value == 'euro') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputCurrencyValue),

    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencyPrincipal.value == 'euro' && currencySelect.value == 'dolar'){
         currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencyPrincipal.value == 'dolar' && currencySelect.value == 'libra') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencyPrincipal.value == 'libra' && currencySelect.value == 'dolar') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencyPrincipal.value == 'dolar' && currencySelect.value == 'bitcoin') {
         currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputCurrencyValue),

    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue/bitcoinToday)
    }

    if (currencyPrincipal.value == 'bitcoin' && currencySelect.value == 'dolar') {
         currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencyPrincipal.value == 'dolar' && currencySelect.value == 'real') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue/realToday)
    }

    if (currencyPrincipal.value == 'euro' && currencySelect.value == 'libra') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencyPrincipal.value == 'libra' && currencySelect.value == 'euro') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)        
    }

    if (currencyPrincipal.value == 'euro' && currencySelect.value == 'bitcoin') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue/bitcoinToday)
    }

    if (currencyPrincipal.value == 'bitcoin' && currencySelect.value == 'euro') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday) 
    }

    if (currencyPrincipal.value == 'euro' && currencySelect.value == 'real') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue/realToday)
    }

    if (currencyPrincipal.value == 'libra' && currencySelect.value == 'bitcoin') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue/bitcoinToday)
    }

    if (currencyPrincipal.value == 'bitcoin' && currencySelect.value == 'libra') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencyPrincipal.value == 'libra' && currencySelect.value == 'real') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue/realToday)
    }

    if (currencyPrincipal.value == 'bitcoin' && currencySelect.value == 'real') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue/realToday)
    }
}

function changeCurrency(){

                                                                    // currency to convert // 
    const principalToConvert = document.querySelector(".currency-principal-to-convert")
    const principalImage = document.querySelector(".currency-image-to-convert")

    if (currencyPrincipal.value == 'dolar') {
        principalToConvert.innerHTML = 'Dólar americano'
        principalImage.src = './assets/dolar.png'
    }

    
    if (currencyPrincipal.value == 'euro') {
        principalToConvert.innerHTML = 'Euro'
        principalImage.src = './assets/euro (1).png'
    }

    if (currencyPrincipal.value == 'libra'){
        principalToConvert.innerHTML = 'Libra'
        principalImage.src = './assets/libra.png'
    }

    if (currencyPrincipal.value == 'bitcoin'){
        principalToConvert.innerHTML = 'Bitcoin'
        principalImage.src = './assets/bitcoin 1.png'
    }


    

    const currencyName = document.getElementById('currency-name')
                                                                    // currency converted //
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro (1).png'
    }

    if (currencySelect.value == 'libra'){
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra.png'
    }

    if (currencySelect.value == 'bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin 1.png'
    }

    if (currencySelect.value == 'real'){
        currencyName.innerHTML = 'Real'
        currencyImage.src = './assets/real.png'
    }

    convertValues()
}

currencyPrincipal.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

