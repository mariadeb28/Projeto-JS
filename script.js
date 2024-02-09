//começo mapeando o botão e a seleção de moedas.
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // o .value eh para pegar somente o valor digitado no input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em R$
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

   
    const dolarToday = 5.2
    const euroToday = 6.2
    const LibraToday = 1.0
    const BitcoinToday = 1.0
    const RealToday = 4.9

     /*Estrutura condicional: Agora, para cada valor de moeda, terá uma ação nesta função. */

    //de Real para Todas as moedas.

    if (currencySelectToConvert.value == "brl" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / RealToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / LibraToday)
    }
    if (currencySelectToConvert.value == "brl" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / BitcoinToday)
    }

    //de Todas as moedas para Real.
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * BitcoinToday)
    }
    if (currencySelectToConvert.value == "gbp" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * LibraToday)
    }
    
    // Dolar para todas as moedas 
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolarToday / euroToday)
    }
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / dolarToday / LibraToday)
    }
    if (currencySelectToConvert.value == "usd" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * dolarToday / LibraToday)
    }


    /* Euro para todas as moedas */
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euroToday / dolarToday)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / euroToday / BitcoinToday)
    }
    if (currencySelectToConvert.value == "eur" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * euroToday / LibraToday)
    }

     /* Bitcoin para todas as moedas */
     if (currencySelectToConvert.value == "btc" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * BitcoinToday / dolarToday)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * BitcoinToday / euroToday)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "btc" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * BitcoinToday / LibraToday)
    }

 //de Libra para todas as moedas.
 
 if (currencySelectToConvert.value == "gbp" && currencySelect.value == "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
}

if (currencySelectToConvert.value == "gbp" && currencySelect.value == "bitcoin") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue * LibraToday / BitcoinToday)
}

if (currencySelectToConvert.value == "gbp" && currencySelect.value == "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue * LibraToday / euroToday)
}
if (currencySelectToConvert.value == "gbp" && currencySelect.value == "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue * LibraToday / dolarToday)
}
}


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyNameToConverter = document.querySelector(".currency")
    const currencyImageToConverter = document.getElementById("currency-image")



 //converter de
 if (currencySelectToConvert.value == "usd") {
    currencyNameToConverter.innerHTML = "Dólar"
    currencyImageToConverter.src = "./img/dollar.png"
}
if (currencySelectToConvert.value == "brl") {
    currencyNameToConverter.innerHTML = "Real"
    currencyImageToConverter.src = "./img/real.png"
}
if (currencySelectToConvert.value == "eur") {
    currencyNameToConverter.innerHTML = "Euro"
    currencyImageToConverter.src = "./img/euro.png"
}

if (currencySelectToConvert.value == "gbp") {
    currencyNameToConverter.innerHTML = "Libra"
    currencyImageToConverter.src = "./img/libra 1.png"
}
if (currencySelectToConvert.value == "btc") {
    currencyNameToConverter.innerHTML = "Bitcoin"
    currencyImageToConverter.src = "./img/bitcoin 1.png"
}



//converter para

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./img/dollar.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img/euro.png"
    }

    if (currencySelect.value == "Libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./img/libra 1.png"
    }

    if (currencySelect.value == "Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./img/bitcoin 1.png"
    }

    if (currencySelect.value == "Real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./img/real.png"
    }


    
    convertValues()  //chamando a função inicial novamente para mudar automaticamente (e adequadamente) o valor convertido.
}

convertButton.addEventListener("click", convertValues) //ouvinte de evento de clique no botão.
currencySelect.addEventListener("change", changeCurrency) //ouvinte de evento de mudanças de moeda e ícones.
currencySelectToConvert.addEventListener("change", changeCurrency)