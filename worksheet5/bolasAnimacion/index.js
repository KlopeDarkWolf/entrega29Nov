import{bola}from "./bola.js"
import {interfazBolas} from "./interfazBola.js"
//Obtener numero aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//Crear array de bolas
var bolas = new Array();
//Crear variable que obtenga el panel donde se dibujarán las bolas
var svg;

 window.onload = () =>
  {
      svg = document.getElementById("panel");

      for (var i=0; i<1; i++)
        bolas.push(new bola(aleatorio(100,150), aleatorio(70,900), aleatorio(70,900), aleatorio(1,5),aleatorio(1,3)));
        interfaz=new interfazBolas(bolas[i]);
        bolas[i].dibujar(svg,bolas[i])
     // setInterval( loop, 30);
     elId = window.requestAnimationFrame(animacion);
  }

  
  function animacion()
  { 
    //Detectar límites de la ventana del cliente
      ancho=svg.clientWidth;
      alto = svg.clientHeight;
    //Bucle para mover las bolas que hay
      for (let i=0; i<bolas.length; i++)
      {
        bolas[i].mover(ancho, alto);
        interfaz= new interfazBolas(svg,bolas[i]);

        
     //Método que dibuja las bolas en su nueva posición   
          bolas[i].dibujar(svg,bolas[i]);
      }
      //Informa al navegador de que se quiere realizar una animación y quieres repintar la ventana
      elId = window.requestAnimationFrame(animacion);
  }