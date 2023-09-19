// prendo i miei elementi 

const main = document.querySelector('.game-wrapper');
const startBtn = document.querySelector('#play');
let cellNumber ;
const selectLevel = document.querySelector('#level')
const levels = [100 , 81 , 49]



startBtn.addEventListener('click' , play);



// tutte le funzioni **********************************************
function play(){
  console.log('play');
  cellNumber = levels[selectLevel.value]
  reset();
  generatePlayGround();
}

function reset(){
  main.innerHTML = '';
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
  this.classList.add('clicked');
  console.log(this._cellID);
}