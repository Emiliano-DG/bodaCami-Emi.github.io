let slider = document.querySelector("#slider")
let images = document.querySelectorAll(".slider_foto")

let operacion = 0;
let counter = 0;
let widthImg = 100/ images.length

setInterval(() =>{
  if(counter >= images.length-1){
    counter =0
    operacion = 0
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition= "none"
    return
  }
  counter ++
  operacion = operacion + widthImg
  slider.style.transform = `translate(-${operacion}%)`
  slider.style.transition = "all ease .8s"
  
},5000)

// CUENTA REGRESIVA

const variableDias = document.getElementById('dias')
const variableHoras = document.getElementById('horas')
const variableMinutos = document.getElementById('minutos')
const variableSegundos = document.getElementById('segundos')

//calculo futura
const fechaFutura = new Date('Apr 6, 2024 00:00:00').getTime()

let interval = setInterval(()=>{
// calculo fecha altual
const fechaActual = new Date().getTime()

//diferencia entre fechas
let distancia = fechaFutura - fechaActual

//calculo dias-horas-minutos-segundos
let dias = Math.floor(distancia /(1000*60*60*24))
console.log(dias)
let horas = Math.floor((distancia % (1000*60*60*24))/(1000*60*60))
let minutos = Math.floor((distancia % (1000*60*60))/(1000*60))
let segundos = Math.floor((distancia % (1000*60))/(1000))

//mostramos resultados
variableDias.innerHTML = dias
variableHoras.innerHTML = horas
variableMinutos.innerHTML = minutos
variableSegundos.innerHTML =('0' + segundos).slice(-2)
},1000)


// EFECTOS DE SCRLL
window.sr = ScrollReveal()
  sr.reveal(".inicio", {
    duration: 3000,
  });

  sr.reveal(".banner", {
    duration: 3000,
    origin:'bottom',
    distance:'-100px'
  }); 

  sr.reveal(".tiempo", {
    duration: 3000,
  });

  sr.reveal(".scroll_tarjeta", {
    duration: 3000,
    duration: 3000,
    origin:'top',
    distance:'-100px'
  });

  // sr.reveal(".slider_texto ", {
  //   duration: 3000,
  //   origin:'left',
  //   distance:'400px'
  // });

  // sr.reveal(".slider_contenedor", {
  //   duration: 3000,
  //   origin:'right',
  //   distance:'400px'
  // });