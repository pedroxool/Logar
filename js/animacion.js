let animado = document.querySelectorAll(".animado");
let animadoIzq = document.querySelectorAll(".animadoIzq");
let animadoDer = document.querySelectorAll(".animadoDer");
function mostrarScroll(){
  let scrollTop= document.documentElement.scrollTop;
  // for (var i = 0; i<animado.length; i++){
  //   let alturaAnimado = animado[i].offsetTop;
  //   if(alturaAnimado -450< scrollTop){
  //     animado[i].style.opacity = 1;
  //     animado[i].classList.add("mostrarArriba");
  //   }
  // }
  for (var i = 0; i<animadoIzq.length; i++){
    let alturaAnimadoIzq = animadoIzq[i].offsetTop;
    if(alturaAnimadoIzq -450< scrollTop){
      animadoIzq[i].style.opacity = 1;
      animadoIzq[i].classList.add("mostrarIzquierda");
    }
  }
  for (var i = 0; i<animadoDer.length; i++){
    let alturaAnimadoDer = animadoDer[i].offsetTop;
    if(alturaAnimadoDer -450< scrollTop){
      animadoDer[i].style.opacity = 1;
      animadoDer[i].classList.add("mostrarDerecha");
    }
  }
}
window.addEventListener('scroll', mostrarScroll);