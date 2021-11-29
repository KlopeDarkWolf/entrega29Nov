//Our game class

  export class game{

        //Constructor
        constructor(player1,player2){
            this.player1=player1;
            this.moves=["s","p","r"];
            this.player2=player2;
            this.res="";
            
        }

        

        //Computer random moves
        iaMove(){
            let rand=Math.floor(Math.random()*3);
            this.player2.hands=this.moves[rand];
        }

        //Compare the results of the game
        comparar(){
            if(this.player1.hands==this.player2.hands){
                this.res="tie";
            }else if(this.player1.hands=="s" && this.player2.hands=="p"){
                this.res="p1";
                this.player1.wins++;
            }else if(this.player1.hands=="s" && this.player2.hands=="r"){
                this.res="p2";
                this.player2.wins++;
            }else if(this.player1.hands=="p" && this.player2.hands=="s"){
                this.res="p2";
                this.player2.wins++;
            }else if(this.player1.hands=="p" && this.player2.hands=="r"){
                this.res="p1";
                this.player1.wins++;
            }else if(this.player1.hands=="r" && this.player2.hands=="p"){
                this.res="p2";
                this.player2.wins++;
            }else if(this.player1.hands=="r" && this.player2.hands=="s"){
                this.res="p1";
                this.player1.wins++;
            }
        }

        

        
        
        

    }


//Our player class
  export  class player {

        constructor(name){
            this.name=name;
            this.wins=0;
            this.loses=0;
            this.hands="";
        }


        move(movement) {
            this.hands=movement;
        }
    }
    
  
  