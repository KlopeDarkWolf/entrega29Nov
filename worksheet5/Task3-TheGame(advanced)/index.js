

window.onload=function(){
    

    //Create variables for catch the html elements
        var resultado=document.getElementById("resultado");
        let crear=document.getElementById("crear");
        let rock=document.getElementById("piedra");
        let paper=document.getElementById("papel");
        let scissor=document.getElementById("tijera");
        let img1=document.getElementById("imgP1");
        let img2=document.getElementById("imgP2");
       


        crear.addEventListener("click",crearPartida);
        rock.addEventListener("click",piedra);
        paper.addEventListener("click",papel);
        scissor.addEventListener("click",tijera);
    //variables to create the game
        var jug;
        var jug2;
        var gam;
        
        

    //function to create the game
    function crearPartida(){
         jug=new player("Jugador1");
         jug2=new player("CPU");
         gam=new game(jug,jug2);
    }

    //Function to show results
    function showResult(){
        resultado.innerText=" Jugador1 "+jug.wins+" IA "+jug2.wins;
    }

    //Function when you press rock
    function piedra(){
        jug.move("r");
        img1.src="piedra.jpg";
        gam.iaMove();
        switch(jug2.hands){
            case "s":
                img2.src="tijera.jpg";
            break;
            case "p":
                img2.src="papel.jpg";
            break;
            case "r":
                img2.src="piedra.jpg";
            break;
        }

        gam.comparar();
        showResult();

        
        
    }
    //Function when you press paper
    function papel(){
        jug.move("p");
        img1.src="papel.jpg";
        gam.iaMove();
        switch(jug2.hands){
            case "s":
                img2.src="tijera.jpg";
            break;
            case "p":
                img2.src="papel.jpg";
            break;
            case "r":
                img2.src="piedra.jpg";
            break;
        }
        gam.comparar();
        showResult();
        
    }
    //Function when you press scissor
    function tijera(){
        jug.move("s");
        img1.src="tijera.jpg";
        gam.iaMove();
        switch(jug2.hands){
            case "s":
                img2.src="tijera.jpg";
            break;
            case "p":
                img2.src="papel.jpg";
            break;
            case "r":
                img2.src="piedra.jpg";
            break;
        }

        gam.comparar();
        showResult();
        
    }


}
import {player,game} from "./juego.js";