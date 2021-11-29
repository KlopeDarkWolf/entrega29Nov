export class bola
{
      constructor(radio, posicionX, posicionY, velocidadX, velocidadY) {
        this.x = posicionX;
        this.y = posicionY;
        this.radio = radio;
        this.vX = velocidadX;
        this.vY = velocidadY;

    }
    //Realizar el movimiento de las bolas teniendo en cuenta el ancho y alto del navegador
    mover(anchoContenedor, altoContenedor)
    {
        this.posAnteriorX = this.x;
        this.posAnteriorY = this.y;

        this.x += this.vX;
        this.y += this.vY;    
        
        // Comprobar si está dentro de los límites teniendo en cuenta los límites de la circunferencia
        // Eje X
            if (this.x-this.radio<=0 || this.x+this.radio >= anchoContenedor )
            {
                this.vX *= -1;
                this.x  = (this.x-this.radio<=0) ? this.radio: anchoContenedor-this.radio;
            }
            
        // Eje Y
            if (this.y-this.radio <=0 || this.y+this.radio >= altoContenedor )
            {
                this.vY *= -1;
                this.y  = (this.y-this.radio<=0) ? this.radio: altoContenedor-this.radio;
            }
    }

    
    


}


 
