document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if(handleMove(position)) {

        setTimeout(() =>{
            alert("O Jogo acabou - O vencedor foi " + playerTime);
        }, 10);

    };
    uptadeSquares(position);
}

function uptadeSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function uptadeSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

let btnClear = document.querySelector('button');

btnClear.addEventListener('click', () => {
    squares.forEach(button => button.value = '')
})