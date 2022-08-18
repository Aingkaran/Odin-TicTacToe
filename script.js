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




const Player= (name, symbol) =>{

    const getName= name;
    const getSymbol= symbol;
   
    
    return {getName,getSymbol}

};




const Game =(()=>{
    
    let count= 0;
    let Xcount=0;
    const gameWinner=(Player1,Player2)=>{

            
            const boxChosen= document.querySelectorAll(".box")
            

                    boxChosen.forEach((box)=>{
                        box.addEventListener('click', ()=>{
                            const playerChoice = box.id;
                            
                            if (Game.count==0){
                       
                                if(gameBoard.gameBox[box.id]=="X"||gameBoard.gameBox[box.id]=="O"){
                                    console.log("Choose another square")
                                    
                                    
                                }
                                else{
                                    gameBoard.gameBox[box.id]="X"
                                    gameBoard.displayXO()
                                    Game.count=Game.count+1
                                    if (gameBoard.gameBox.slice(0,3).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(0,3).toString()===gameBoard.gameWinner[1].toString()
                                    ||gameBoard.gameBox.slice(3,6).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(3,6).toString()===gameBoard.gameWinner[1].toString()
                                    ||gameBoard.gameBox.slice(6,9).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(6,9).toString()===gameBoard.gameWinner[1].toString()
                                    ||(gameBoard.gameBox[0]+gameBoard.gameBox[3]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[0]+gameBoard.gameBox[3]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[1]+gameBoard.gameBox[4]+gameBoard.gameBox[7]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[1]+gameBoard.gameBox[4]+gameBoard.gameBox[7]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[2]+gameBoard.gameBox[5]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[2]+gameBoard.gameBox[5]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[0]+gameBoard.gameBox[4]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[0]+gameBoard.gameBox[4]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[2]+gameBoard.gameBox[4]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[2]+gameBoard.gameBox[4]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ){
                                        console.log("You WIN")
                                        Game.count=2
                                    }
                                    
                                    else{
                                        Game.Xcount=Game.Xcount+1
                                        if (Game.Xcount==5){
                                            console.log("TIE")
                                        }
                                    }
                                    
                                }
                               

                            }




                            else if(Game.count==1) {
                                

                                if (gameBoard.gameBox[box.id]=="X"||gameBoard.gameBox[box.id]=="O"){
                                    console.log("Choose another square")
                                }



                                else{
                                    gameBoard.gameBox[box.id]="O"
                                    gameBoard.displayXO()
                                    Game.count=Game.count-1

                                    if (gameBoard.gameBox.slice(0,3).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(0,3).toString()===gameBoard.gameWinner[1].toString()
                                    ||gameBoard.gameBox.slice(3,6).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(3,6).toString()===gameBoard.gameWinner[1].toString()
                                    ||gameBoard.gameBox.slice(6,9).toString()===gameBoard.gameWinner[0].toString()||gameBoard.gameBox.slice(6,9).toString()===gameBoard.gameWinner[1].toString()
                                    ||(gameBoard.gameBox[0]+gameBoard.gameBox[3]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[0]+gameBoard.gameBox[3]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[1]+gameBoard.gameBox[4]+gameBoard.gameBox[7]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[1]+gameBoard.gameBox[4]+gameBoard.gameBox[7]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[2]+gameBoard.gameBox[5]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[2]+gameBoard.gameBox[5]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[0]+gameBoard.gameBox[4]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[0]+gameBoard.gameBox[4]+gameBoard.gameBox[8]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ||(gameBoard.gameBox[2]+gameBoard.gameBox[4]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[0].toString().replace(/,/g, '')|| (gameBoard.gameBox[2]+gameBoard.gameBox[4]+gameBoard.gameBox[6]).toString()===gameBoard.gameWinner[1].toString().replace(/,/g, '')
                                    ){
                                        console.log("You WIN")
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
const jimmie = Player('jim',"X");
const steph= Player('steph',"O")
Game.gameWinner(jimmie,steph)