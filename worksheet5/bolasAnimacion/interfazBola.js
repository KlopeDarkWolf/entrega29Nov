export class interfazBolas{

    constructor(bola){
       this.circulo= document.createElementNS("http://www.w3.org/2000/svg","circle");
       this.circulo.setAttributeNS(null, "cx", bola.x);
       this.circulo.setAttributeNS(null, "cy", bola.y);
       this.circulo.setAttributeNS(null, "r", bola.radio);
       this.circulo.setAttributeNS(null,"fill",colorRandom());
    }
    
    dibujar(svgContenedor,bola)
    {
        bola.setAttributeNS(null, "cx", bola.x);
        bola.setAttributeNS(null, "cy", bola.y);
        svgContenedor.appendChild(bola);
    }



}

//Obtener color aleatorio
function colorRandom()
{
    return "#"+ Math.floor(Math.random()*16777215).toString(16);
}