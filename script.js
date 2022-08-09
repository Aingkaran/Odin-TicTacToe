const gameBoard = (()=>{

    const gameBox= [1,2,3,
                    4,5,6,
                    7,8,9]
    return {
        gameBox
    }

})()



const Player= (name,choice) =>{

    const getName= name;

    const getChoice = choice;

    return (getName,getChoice)

};


const displayController =(()=>{

    const displayXO=()=>{
        const displayBox= document.querySelectorAll('.box')
        displayBox.forEach((box)=>{
        for (let i=0;i<gameBoard.gameBox.length;i++){
            if (box.id==i){
            box.textContent= gameBoard.gameBox[i]
            console.log(box.id);
                }

            }
    

        })
    }
    return {displayXO}

})()