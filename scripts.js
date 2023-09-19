const botaoConversor = document.querySelector(".botao-conversor")
const valorSelect = document.querySelector(".conversor")
const valorSelecao = document.querySelector(".valor-base")

function converterValores(){
    const valorInput = document.querySelector(".input-valor").value
    const valorReal = document.querySelector(".valor-conversao")
    const valorOutrasMoedas = document.querySelector(".valor-convertido")

    const realDolar = 4.95
    const realEuro = 5.34
    const realLibra = 6.23
    const realBitCoin = 127242.66

    const dolarEuro = 1.08
    const dolarReal = 0.2
    const dolarLibra = 1.25
    const dolarBitCoin = 25819.8
    
    const euroDolar = 0.93
    const euroReal = 0.19
    const euroLibra = 1.16
    const euroBitCoin = 24110.68

    const libraDolar = 0.8
    const libraReal = 0.16
    const libraEuro = 0.86
    const libraBitcoin = 20686.21

    if (valorSelecao.value == "reals" && valorSelect.value == "dolar"){
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("en-US",{ // mesma coisa, só que agr usei outro idioma
            style: "currency",                                         // estilo moeda
            currency: "USD"                                             // dolar americano
        }).format(valorInput / realDolar)
        valorReal.innerHTML = new Intl.NumberFormat("pt-BR",{  
            style: "currency",                                
            currency: "BRL"                                   
        }).format(valorInput)  
    }

    if (valorSelecao.value == "reals" && valorSelect.value == "euro"){                                   //if (valorSelect.value == "euro"){} função para dizer que se algo for igual (por isso dois simbolos ==) ao que esta nas aspas tomar a medida entre {}
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("de-DE",{   // caso contrario não fará nada, a menos que coloque o else(). Assim torna verdadeiro e falso (if e else)
            style: "currency",                                         
            currency: "EUR"                                             
        }).format(valorInput / realEuro)
        valorReal.innerHTML = new Intl.NumberFormat("pt-BR",{  
            style: "currency",                                
            currency: "BRL"                                   
        }).format(valorInput)
    }

    if (valorSelecao.value == "reals" && valorSelect.value == "libra"){                                  
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",                                         
            currency: "GBP"                                             
        }).format(valorInput / realLibra)
        valorReal.innerHTML = new Intl.NumberFormat("pt-BR",{  
            style: "currency",                                
            currency: "BRL"                                   
        }).format(valorInput)
    }

    if (valorSelecao.value == "reals" && valorSelect.value == "bitcoin"){                                  
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat({
            style: "currency",                                         
            currency: "BTC"                                             
        }).format(valorInput / realBitCoin)
        valorReal.innerHTML = new Intl.NumberFormat("pt-BR",{  
            style: "currency",                                
            currency: "BRL"                                   
        }).format(valorInput)
    }

    if (valorSelecao.value == "dolars" && valorSelect.value == "euro"){ //simbolo && serve para uma segunda condição, como no exemplo, "se for "dolar" e "euro" execute aqui"                                  
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("de-DE",{   
            style: "currency",
            currency: "EUR"                                             
        }).format(valorInput / dolarEuro)
        valorReal.innerHTML = new Intl.NumberFormat("en-US",{  //new Intl.NumberFormat() serve para configurar a forma que o Numero vai aparecer. Dentro dos () colocar o idioma no caso "pt-BR" e abrir {}
            style: "currency",                                //style: "currency"  estilo moeda
            currency: "USD"                                   //currency:"BRL"  real brasileiro BRL
        }).format(valorInput)
    }

    if (valorSelecao.value == "dolars" && valorSelect.value == "real"){ //simbolo && serve para uma segunda condição, como no exemplo, "se for "dolar" e "euro" execute aqui"                                  
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("pt-BR",{   
            style: "currency",
            currency: "BRL"                                             
        }).format(valorInput / dolarReal)
        valorReal.innerHTML = new Intl.NumberFormat("en-US",{  //new Intl.NumberFormat() serve para configurar a forma que o Numero vai aparecer. Dentro dos () colocar o idioma no caso "pt-BR" e abrir {}
            style: "currency",                                //style: "currency"  estilo moeda
            currency: "USD"                                   //currency:"BRL"  real brasileiro BRL
        }).format(valorInput)
    }

    if (valorSelecao.value == "dolars" && valorSelect.value == "libra"){               
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("en-UK",{   
            style: "currency",
            currency: "GBP"                                             
        }).format(valorInput / dolarLibra)
        valorReal.innerHTML = new Intl.NumberFormat("en-US",{  
            style: "currency",                                
            currency: "USD"                                   
        }).format(valorInput)
    }

    if (valorSelecao.value == "dolars" && valorSelect.value == "bitcoin"){               
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat({   
            style: "currency",
            currency: "BTC"                                             
        }).format(valorInput / dolarBitCoin)
        valorReal.innerHTML = new Intl.NumberFormat("en-US",{  
            style: "currency",                                
            currency: "USD"                                   
        }).format(valorInput)
    }

    if (valorSelecao.value == "euros" && valorSelect.value == "dolar"){               
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("en-US",{   
            style: "currency",
            currency: "USD"                                             
        }).format(valorInput / euroDolar)
        valorReal.innerHTML = new Intl.NumberFormat("de-DE",{  
            style: "currency",                                
            currency: "EUR"                                   
        }).format(valorInput)
    }

    if (valorSelecao.value == "euros" && valorSelect.value == "real"){               
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("pt-BR",{   
            style: "currency",
            currency: "BRL"                                             
        }).format(valorInput / euroReal)
        valorReal.innerHTML = new Intl.NumberFormat("de-DE",{  
            style: "currency",                                
            currency: "EUR"                                   
        }).format(valorInput)
    }
    
    if (valorSelecao.value == "euros" && valorSelect.value == "libra"){               
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("en-UK",{   
            style: "currency",
            currency: "GBP"                                             
        }).format(valorInput / euroLibra)
        valorReal.innerHTML = new Intl.NumberFormat("de-DE",{  
            style: "currency",                                
            currency: "EUR"                                   
        }).format(valorInput)
    }

    if (valorSelecao.value == "euros" && valorSelect.value == "bitcoin"){               
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat({   
            style: "currency",
            currency: "BTC"                                             
        }).format(valorInput / euroBitCoin)
        valorReal.innerHTML = new Intl.NumberFormat("de-DE",{  
            style: "currency",                                
            currency: "EUR"                                   
        }).format(valorInput)
    }

    if (valorSelecao.value == "libras" && valorSelect.value == "dolar"){               
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("en-US",{   
            style: "currency",
            currency: "USD"                                             
        }).format(valorInput / libraDolar)
        valorReal.innerHTML = new Intl.NumberFormat("en-UK",{  
            style: "currency",                                
            currency: "GBP"                                   
        }).format(valorInput)
    }

    if (valorSelecao.value == "libras" && valorSelect.value == "euro"){               
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("de-DE",{   
            style: "currency",
            currency: "EUR"                                             
        }).format(valorInput / libraEuro)
        valorReal.innerHTML = new Intl.NumberFormat("en-UK",{  
            style: "currency",                                
            currency: "GBP"                                   
        }).format(valorInput)
    }

    if (valorSelecao.value == "libras" && valorSelect.value == "real"){               
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("pt-BR",{   
            style: "currency",
            currency: "BRL"                                             
        }).format(valorInput / libraReal)
        valorReal.innerHTML = new Intl.NumberFormat("en-UK",{  
            style: "currency",                                
            currency: "GBP"                                   
        }).format(valorInput)
    }

    if (valorSelecao.value == "libras" && valorSelect.value == "bitcoin"){               
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat({   
            style: "currency",
            currency: "BTC"                                             
        }).format(valorInput / libraBitcoin)
        valorReal.innerHTML = new Intl.NumberFormat("en-UK",{  
            style: "currency",                                
            currency: "GBP"                                   
        }).format(valorInput)
    }

}

function mudarBandeira(){
    const trocarNome = document.querySelector(".moeda-convertida")
    const trocarImg = document.querySelector(".band-us")

    if (valorSelect.value == "dolar"){
        trocarNome.innerHTML = "Dólar"
        trocarImg.src = "./Assets/estados-unidos (1) 1.png"
    }

    if (valorSelect.value == "euro"){
        trocarNome.innerHTML = "Euro"
        trocarImg.src = "./Assets/euro.png"
    }

    if (valorSelect.value == "libra"){
        trocarNome.innerHTML = "Libra"
        trocarImg.src = "./Assets/libra.png"
    }

    if (valorSelect.value == "bitcoin"){
        trocarNome.innerHTML = "BitCoin"
        trocarImg.src = "./Assets/bitcoin.png"
    }

    if (valorSelect.value == "real"){
        trocarNome.innerHTML = "Real"
        trocarImg.src = "./Assets/brasil 2.png"
    }

    converterValores()
}

function mudarBandeiras(){
    const alterarNome = document.querySelector(".moeda")
    const alterarBandeira = document.querySelector(".band-br")

    if (valorSelecao.value == "reals"){
        alterarNome.innerHTML = "Real"
        alterarBandeira.src = "./Assets/brasil 2.png"
    }

    if (valorSelecao.value == "dolars"){
        alterarNome.innerHTML = "Dólar"
        alterarBandeira.src = "./Assets/estados-unidos (1) 1.png"
    }

    if (valorSelecao.value == "euros"){
        alterarNome.innerHTML = "Euro"
        alterarBandeira.src = "./Assets/euro.png"
    }

    if (valorSelecao.value == "libras"){
        alterarNome.innerHTML = "Libra"
        alterarBandeira.src = "./Assets/libra.png"
    }
    
    converterValores()
}

botaoConversor.addEventListener("click", converterValores)
valorSelect.addEventListener("change", mudarBandeira)
valorSelecao.addEventListener("change", mudarBandeiras)