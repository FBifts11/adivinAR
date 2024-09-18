let numeroAleatorio = Math.floor(Math.random() * 10) + 1
let numeroIngresado = document.getElementById('numeroElegido')
let mensaje = document.getElementById('mensaje')

function comprobarNumero() {
    let numeroElegido = parseInt(numeroIngresado.value)

    if (numeroElegido > 10 || numeroElegido < 1 || isNaN(numeroElegido)) {
        mensaje.textContent = "Debés elegir un número entre 1 y 10"
        mensaje.style.color = 'red'
        return
    }

    if (numeroElegido > numeroAleatorio) {
        mensaje.textContent = '¡Te pasaste! Elegí un número mas bajo'
        mensaje.style.color = 'red'
    } else if (numeroElegido < numeroAleatorio) {
        mensaje.textContent = '¡Te faltó poquito! Elegí un número mas alto'
        mensaje.style.color = 'red'
    } else {
        mensaje.textContent = '¡Felicitaciones! ¡Elegiste el número correcto!'
        mensaje.style.color = 'green'
        document.getElementById('btnVolver').style.visibility= 'visible'
    }

    
}

function volverAJugar () {
    numeroIngresado.value = ''
    numeroAleatorio = Math.floor(Math.random() * 10) + 1
    mensaje.textContent = '¡A jugar!'
    mensaje.style.color = 'black'
    document.getElementById('btnVolver').style.visibility= 'hidden'
}