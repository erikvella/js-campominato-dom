
/* cose da fare 
PLAY
- leggo le proprietà della griglia di gioco(livello)
- reset
- genero tutte le bombe

CLICK DELLA CELLA
- verfico se è una bomba: 
SI ---> FINE GIOCO
NO ---> - Aggiungo la classe clicked alla cella
        - Incremento il punteggio
        - Verifico se il punteggio è vincente --> SI --> FINE GIOCO

RESET
- Cancella la griglia
- Cancella le bombe 
- Azzera il punteggio

FINE GIOCO 
- Accendo tutte le bombe
- Congelo la griglia
- In base al punteggio restituisco un messaggio di vincita/perdita
 */

// prendo i miei elementi 

const main = document.querySelector('.game-wrapper');
const startBtn = document.querySelector('#play');
let cellNumber ;
const selectLevel = document.querySelector('#level')
const levels = [100 , 81 , 49] ;
let arrBombs = [] ;
const numBombs = 16 ;

let points = 0 ; 



startBtn.addEventListener('click' , play);



// tutte le funzioni **********************************************
function play(){
  console.log('play');
  cellNumber = levels[selectLevel.value]
//  resetto 
  reset();
// genero la mia griglia
  generatePlayGround();
// genero le bombe 
  arrBombs = generateBombs();
  // console.log('le mie bombe' , arrBombs);
}

function reset(){
// - Cancella la griglia
// - Cancella le bombe 
// - Azzera il punteggio

  main.innerHTML = '';
  points = 0;
  document.querySelector('.end-message').innerHTML = '';
  arrBombs = [];
}

function generatePlayGround(){
  // creo il contenitore delle celle
  const grid = document.createElement('div');
  grid.className = 'grid';
  // creo un ciclo per generare le celle 
  for(let i = 0 ; i < cellNumber ; i++){
     const cell = createCell(i);
     console.log(cell);
     grid.append(cell);
  }
  main.append(grid);
}

// funzione per generare le bombe 
function generateBombs(){
  //  creo un array dentro il quale pushare le bombe
  // generare un numero random fra 1 e il numero di celle (cellNumber)
  // se il numero non è presente nell'array lo pusho fino a che non ho estratto tutte le bombe
  // se è presente ne estraggo un altro
  // finisco di estrarre quando la lunghezza dell'array è uguale al numer di bombe da estrarre (numBombs)
  // restutuisco l'array completo
  let arrBombs = []

  while(arrBombs.length < numBombs){
    const bomb = Math.ceil(Math.random() * cellNumber)
    // pusho la bomba solo se non è presente nell'array (arrBombs)
    if(!arrBombs.includes(bomb)) arrBombs.push(bomb);
    }
    return arrBombs;
}






// funzione per creare la cella
function createCell(index){
   const cell = document.createElement('div');
   cell.className = 'cell';
   cell.classList.add('square' + cellNumber);
   cell._cellID = index; 
   cell.addEventListener('click' , hendleClickCell);
   return cell;
}  

function hendleClickCell(){
// verifico se la cella cliccata è una bomba
// SI ---> FINE GIOCO
// NO ---> - Aggiungo la classe clicked alla cella
//         - Incremento il punteggio
//         - Verifico se il punteggio è vincente --> SI --> FINE GIOCO
  if(arrBombs.includes(this._cellID)){
    // fine gioco
    endgame(false);
  }else{
    // 
    this.classList.add('clicked');
    points++;
    if(points === cellNumber - numBombs){
      endgame(true);
    } 
  }
  
  this.removeEventListener('click' , hendleClickCell);
  
}

function endgame(isWin){
  console.log('fine gioco!');
// - Accendo tutte le bombe
// - Congelo la griglia
// - In base al punteggio restituisco un messaggio di vincita/perdita
showBombs();
const endgame = document.createElement('div');
endgame.className = 'end-game';
main.append(endgame);

let message ;
if(isWin){
message = 'Hai vinto!!!'
}else{
  message = `Hai perso, hai fatto solo ${points} punti , su ${cellNumber - numBombs}`;
}
document.querySelector('.end-message').innerHTML = message;
}

function showBombs(){
  // prendo tutte le celle 
  // ciclo tutte le celle 
  // se l'ID della cella è presente nell'array delle bombe (arrBombs) allora gli aggiungo la classe .bomb
  const cells = document.getElementsByClassName('cell');
  for(i = 0 ; i < cells.length ; i++){
    const cell = cells[i];
    if(arrBombs.includes(cell._cellID)){
      cell.classList.add('bomb')
    }
  }
}
