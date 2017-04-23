var ticTacToe = ()=>{
    var that = {};
    var players = {
        'A':1,
        'B':2
    }
    that.currentPlayer = 'A';
                //  0   1   2
    var squares = that.squares = [
                    [0, 0,  0],
                    [0, 0,  0],
                    [0, 0,  0]
    ]

    that.init = ()=>{
                //  0   1   2
        squares = that.squares = [
                    [0, 0,  0],
                    [0, 0,  0],
                    [0, 0,  0]
            ]
    }
    that.setItem = ( position, player  )=>{  
        player = player || that.currentPlayer;
        if (!players[player]) return 'error invalid player'

        var playerCd = players[player];

        if (!position || typeof position.x == 'undefined' || typeof position.y == 'undefined') return 'error invalid position'
        if ( squares[position.x][position.y]) return 'error square already occupied'
        that.currentPlayer = player === 'A' ? 'B':'A';

        squares[position.x][position.y] = playerCd;

        if ( squares[0][0] === playerCd ){  // first row 1st col
            if (squares[0][1] === playerCd && squares[0][2] === playerCd){ // straight hor
                return 'player '+ playerCd + ' is the winner';
            } else if (squares[1][0] === playerCd && squares[2][0] === playerCd){ // stright vert
                return 'player '+ playerCd + ' is the winner';
            } else if (squares[1][1] === playerCd && squares[2][2] === playerCd){ // diagonal
                return 'player '+ playerCd + ' is the winner';
            }
        } else if ( squares[1][0] === playerCd ){ // 2nd
            if (squares[1][1] === playerCd && squares[1][2] === playerCd){ // straight hor
                return 'player '+ playerCd + ' is the winner';
            }
        } else if ( squares[2][0] === playerCd ){ // 3rd
            if (squares[2][1] === playerCd && squares[2][2] === playerCd){ // straight hor
                return 'player '+ playerCd + ' is the winner';
            } else if (squares[1][1] === playerCd && squares[0][2] === playerCd){ // diagonal
                return 'player '+ playerCd + ' is the winner';
            }
        } else if ( squares[0][1] === playerCd ){ // 1st row 2nd col
            if (squares[1][1] === playerCd && squares[2][1] === playerCd){ // stright vert
                return 'player '+ playerCd + ' is the winner';
            }
        } else if ( squares[0][2] === playerCd ){ // 1st row 3rd col
            if (squares[1][2] === playerCd && squares[2][2] === playerCd){ // stright vert
                return 'player '+ playerCd + ' is the winner';
            }
        }
        return '';
    }
    return that;
}
console.info('****** start tic tac toe ******')
var ttt = ticTacToe();
// console.info(' ttt setItem a, {x:0,y:0}', ttt.setItem('A',{x:0,y:0}) );
// console.info(' ttt setItem a, {x:0,y:1}', ttt.setItem('A',{x:0,y:1}) );
// console.info(' ttt setItem a, {x:0,y:1}', ttt.setItem('A',{x:1,y:1}) );
// console.info(' ttt setItem a, {x:0,y:1}', ttt.setItem('A',{x:2,y:2}) );

// console.info(' ttt squares', ttt.squares );

console.info('****** end tic tac toe ******', document.querySelectorAll('.col'))
// var cols = document.querySelectorAll('.col');
// [].forEach.call(cols, function(element) {
//     console.info('hello')
// });

// document.querySelectorAll('.col').addEventListener('click',(event)=>{
//     alert('hello')
// },false,false)
document.querySelector('.main-container').addEventListener('click',(event)=>{
    if (event.target.classList.contains('col') ){
        var mark = ttt.currentPlayer === 'A' ? 'X' : 'Y';
        var val = ttt.setItem({
            x:Number( event.target.getAttribute('row') ),
            y:Number( event.target.getAttribute('col') )
        });
        if (!val || !val.match(/error/)){
            event.target.innerText = mark;
            if ( val.match(/winner/) ){
                setTimeout(()=>{
                    alert(val)
                },10)
            }
        } else {
            alert(val)
        }
    }
},false,false)