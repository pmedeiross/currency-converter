convertButton = document.querySelector(".convert-button")
currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert")
    
    const currencyValuetoConverted = document.querySelector(".currency-value")

    const dolarToday = 5.7
    const euroToday = 6.17
    const libraToday = 7.39
    const bitcoinToday = 386.117


    if (currencySelect.value == "dolar") {
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }


    if (currencySelect.value == "euro") {
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "LBR",
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValuetoConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src ="./assets/usa.png"
    }
    
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "bictoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
