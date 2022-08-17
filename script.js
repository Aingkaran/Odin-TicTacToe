const gameBoard = (()=>{

    const gameBox= [,,,
                    ,,,
                    ,,]

    const displayXO=()=>{
        const displayBox= document.querySelectorAll('.box')
        displayBox.forEach((box)=>{
        for (let i=0;i<gameBoard.gameBox.length;i++){
            if (box.id==i){
            box.textContent= gameBoard.gameBox[i]
                }

            }
    

        })
    }
    return {
        gameBox,
        displayXO
    }

})()




const Player= (name, symbol) =>{

    const getName= name;
    const getSymbol= symbol;
   
    
    return {getName,getSymbol}

};




const Game =(()=>{
  

    const gameWinner=(Player1,Player2)=>{

            let count= 0;
            const boxChosen= document.querySelectorAll(".box")


                    boxChosen.forEach((box)=>{
                        box.addEventListener('click', ()=>{
                            const playerChoice = box.id;
                            if (count==0||count==2||count==4||count==6||count==8){

                                gameBoard.gameBox[box.id]="X"
                                gameBoard.displayXO()
                                console.log("works")
                                count=count+1

                            }

                            else if(count==1||count==3||count==5||count==7||count==9) {
                                gameBoard.gameBox[box.id]="O"
                                gameBoard.displayXO()
                                console.log("works")
                                count=count+1
                            }

                            else{

                                console.log("Game DONE")
                            }
                            
                            


                                   
                    
                            
                            
            
                    })
                })
        
              
               
            
        
    }


    
    return {gameWinner} 
        
})()

const jimmie = Player('jim',"X");
const steph= Player('steph',"O")
Game.gameWinner(jimmie,steph)