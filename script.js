const gameBoard = (()=>{

    const gameBox= [,,,,,,,,]

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

    const resetGame=()=>{
        const resetBtn= document.querySelector(".Game-Reset")
        resetBtn.addEventListener('click', ()=>{
            const gameText= document.querySelector(".in-game-text")

            gameText.textContent="Submit Your Names To Begin!!"
            gameBoard.gameBox=[,,,,,,,,,]
            Game.count=0
            Game.Xcount=0
            
            gameBoard.displayXO()
            

        })

    }

    const gameWinner= [["X","X","X"],["O","O","O"]]

    

    return {
        gameBox,
        displayXO,
        resetGame,
        gameWinner
    }

})()




const Player= (name) =>{

    const getName= name;
 
   
    
    return {getName}

};




const Game =(()=>{
    
    let count= 0;
    let Xcount=0;

    const gameWinner=(Player1,Player2)=>{
        
        

            const gameText= document.querySelector(".in-game-text")
            const boxChosen= document.querySelectorAll(".box")
            

                    boxChosen.forEach((box)=>{
                        box.addEventListener('click', ()=>{
                            const playerChoice = box.id;
                            
                            if (Game.count==0){
                       
                                if(gameBoard.gameBox[box.id]=="X"||gameBoard.gameBox[box.id]=="O"){
                                    gameText.textContent="Choose Another Square!"
                                    
                                    
                                }
                                else{
                                    gameBoard.gameBox[box.id]="X"
                                    gameBoard.displayXO()
                                    Game.count=Game.count+1
                                    gameText.textContent= Player2.getName +" Turn!"
                                    if (gameBoard.gameBox.slice(0,3).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(0,3).toString()===gameBoard.gameWinner[1].toString()
                                    ||gameBoard.gameBox.slice(3,6).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(3,6).toString()===gameBoard.gameWinner[1].toString()
                                    ||gameBoard.gameBox.slice(6,9).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(6,9).toString()===gameBoard.gameWinner[1].toString()
                                    ||(gameBoard.gameBox[0]+gameBoard.gameBox[3]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[0]+gameBoard.gameBox[3]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[1]+gameBoard.gameBox[4]+gameBoard.gameBox[7]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[1]+gameBoard.gameBox[4]+gameBoard.gameBox[7]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[2]+gameBoard.gameBox[5]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[2]+gameBoard.gameBox[5]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[0]+gameBoard.gameBox[4]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[0]+gameBoard.gameBox[4]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[2]+gameBoard.gameBox[4]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[2]+gameBoard.gameBox[4]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ){
                                        gameText.textContent= Player1.getName +" Wins!"
                                        Game.count=2
                                    }
                                    
                                    else{
                                        Game.Xcount=Game.Xcount+1
                                        if (Game.Xcount==5){
                                            gameText.textContent="TIE GAME!"
                                        }
                                    }
                                    
                                }
                               

                            }




                            else if(Game.count==1) {
                                

                                if (gameBoard.gameBox[box.id]=="X"||gameBoard.gameBox[box.id]=="O"){
                                    gameText.textContent="Choose Another Square!"
                                }



                                else{
                                    gameBoard.gameBox[box.id]="O"
                                    gameBoard.displayXO()
                                    Game.count=Game.count-1
                                    gameText.textContent= Player1.getName +" Turn!"

                                    if (gameBoard.gameBox.slice(0,3).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(0,3).toString()===gameBoard.gameWinner[1].toString()
                                    ||gameBoard.gameBox.slice(3,6).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(3,6).toString()===gameBoard.gameWinner[1].toString()
                                    ||gameBoard.gameBox.slice(6,9).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(6,9).toString()===gameBoard.gameWinner[1].toString()
                                    ||(gameBoard.gameBox[0]+gameBoard.gameBox[3]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[0]+gameBoard.gameBox[3]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[1]+gameBoard.gameBox[4]+gameBoard.gameBox[7]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[1]+gameBoard.gameBox[4]+gameBoard.gameBox[7]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[2]+gameBoard.gameBox[5]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[2]+gameBoard.gameBox[5]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[0]+gameBoard.gameBox[4]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[0]+gameBoard.gameBox[4]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[2]+gameBoard.gameBox[4]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[2]+gameBoard.gameBox[4]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ){
                                        gameText.textContent= Player2.getName+" Wins!"
                                        Game.count=3
                                    }
                                }
                                
                            }

                            
                            
            
                    })
                })
        
              
               
            
        
    }


    
    return {gameWinner,count,Xcount} 
        
})()
gameBoard.resetGame();
const jimmie = Player(
    


);

let Player1=""
let Player2=""
const playerBtn= document.querySelector(".Player-Submit")
        playerBtn.addEventListener('click', ()=>{
            Player1= Player(document.getElementById('Player1').value)
            Player2= Player(document.getElementById('Player2').value)
            Game.gameWinner(Player1,Player2)
            
        })

