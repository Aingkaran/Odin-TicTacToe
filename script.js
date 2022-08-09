const gameBoard = (()=>{

    const gameBox= ["O","X","X",
                    "O","X","O",
                    "X","O","X"]

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
    const getChoice= ()=>{
        const boxChosen= document.querySelectorAll(".box")
        boxChosen.forEach((box)=>{
            box.addEventListener('click', ()=>{
                const playerChoice = box.id;
                console.log(playerChoice)
                return playerChoice

        })
    })
}
    return {getName,getSymbol,getChoice}

};


const displayController =(()=>{
    

    

})()

gameBoard.displayXO()
const jimmie = Player('jim',"X");
jimmie.getChoice()