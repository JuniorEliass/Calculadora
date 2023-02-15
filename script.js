let visor = document.querySelector(".display__numerico")
const tecla = document.querySelectorAll(".botoes").innerHTML

let numero = ['']

function clicar (tecla) {
    numero = numero + tecla
    mudarDisplay()
}

function mudarDisplay () {
    document.querySelector(".display__numerico").innerHTML = numero
}

function limpar () {
    numero = ''
    mudarDisplay()
}

function calcular () {
    let produto = document.querySelector(".display__numerico").innerHTML
    document.querySelector(".display__numerico").innerHTML = eval(produto)
}