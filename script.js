const container = document.querySelector('#container');

function changeSize(){
    let num = prompt("How many pixels you need (max. 100)?", "0");
    let text;
    if (num == null || num == "" || num > 100) {
        alert ('You entered wrong number');
    }
    else{
        makeRows(num,num);
    }
}

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c=0;c<(rows*cols);c++){
        let cell = document.createElement('div');
        cell.innerText = c+1;
        container.appendChild(cell).className = 'grid-item';
    }
}