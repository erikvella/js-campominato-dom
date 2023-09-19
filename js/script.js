// prendo i miei elementi 

const main = document.querySelector('.game-wrapper');
const startBtn = document.querySelector('#play');
let cellNumber = 100;





startBtn.addEventListener('click' , play);



// tutte le funzioni **********************************************
function play(){
  console.log('play');
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
     const cell = createCell[i];
     console.log(cell);
  }
}
// funzione per creare la cella
function createCell(index){
   const cell = document.createElement('div');
   cell.className = 'cell';
   cell.classList.add('square100');
   cell._cellID = index; 
   return cell;
}  