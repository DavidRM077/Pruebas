var txtbox = document.getElementById("txtboxp")
var boton = document.getElementById("btnp")
var parrafo = document.getElementById("parrafoleer")

function hablar () 
{
    let texto = parrafo.textContent
    let voz = new SpeechSynthesisUtterance() //crear nueva voz
    voz.text = texto
    voz.lang = "es-Es"
    window.speechSynthesis.speak(voz)
}

boton.onclick = hablar;
