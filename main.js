let main = document.getElementsByClassName('main')[0];
let winArr = [
    [1,2,3],
    [1,4,7],
    [7,8,9],
    [9,6,3],
    [1,5,9],
    [3,5,7],
    [4,5,6],
    [2,5,8],
];

function creat(){
    for (let i = 1; i < 10; i++){
    let squer = document.createElement('div');
    squer.classList.add('squer');
    squer.setAttribute('pos',`${i}`);
    squer.innerHTML = i;
    main.appendChild(squer);
};
}
creat();

let mainArr = [];
for(let i = 1; i < 10; i++){
    let squer  = document.querySelector(`[pos = "${i}"]`);
    mainArr.push(squer);
};
let count  = 0;
//function changeColor(){
//    let currentSquer  = ;
//    if(count % 2 == 0){
//        currentSquer.classList.add("blue");
//    }else{
//        currentSquer.classList.add("red");
//    }
//    count++;
//};
for (let i = 0; i < mainArr.length; i++){
    mainArr[i].onclick =  function(event){
        if (event.target.className == "squer"){
             if(count % 2 == 0){
                this.innerHTML = "X";
                this.classList.add("blue");
            }else{
                this.innerHTML = "O";
                this.classList.add("red");
                }
            count++;
           
        };
         checkWinner();
    };
};

function checkWinner(){
if ( mainArr[0].innerHTML == "X" && mainArr[1].innerHTML == "X" && mainArr[2].innerHTML == "X" ||
     mainArr[0].innerHTML == "X" && mainArr[3].innerHTML == "X" && mainArr[6].innerHTML == "X" ||
     mainArr[6].innerHTML == "X" && mainArr[7].innerHTML == "X" && mainArr[8].innerHTML == "X" ||
     mainArr[2].innerHTML == "X" && mainArr[5].innerHTML == "X" && mainArr[8].innerHTML == "X" ||
     mainArr[1].innerHTML == "X" && mainArr[4].innerHTML == "X" && mainArr[7].innerHTML == "X" ||
     mainArr[3].innerHTML == "X" && mainArr[4].innerHTML == "X" && mainArr[5].innerHTML == "X" ||
     mainArr[0].innerHTML == "X" && mainArr[4].innerHTML == "X" && mainArr[7].innerHTML == "X" ||
     mainArr[2].innerHTML == "X" && mainArr[4].innerHTML == "X" && mainArr[6].innerHTML == "X" 
   ){ 
    alert("x wins");
}else if(mainArr[0].innerHTML == "O" && mainArr[1].innerHTML == "O" && mainArr[2].innerHTML == "O" ||
     mainArr[0].innerHTML == "O" && mainArr[3].innerHTML == "O" && mainArr[6].innerHTML == "O" ||
     mainArr[6].innerHTML == "O" && mainArr[7].innerHTML == "O" && mainArr[8].innerHTML == "O" ||
     mainArr[2].innerHTML == "O" && mainArr[5].innerHTML == "O" && mainArr[8].innerHTML == "O" ||
     mainArr[1].innerHTML == "O" && mainArr[4].innerHTML == "O" && mainArr[7].innerHTML == "O" ||
     mainArr[3].innerHTML == "O" && mainArr[4].innerHTML == "O" && mainArr[5].innerHTML == "O" ||
     mainArr[0].innerHTML == "O" && mainArr[4].innerHTML == "O" && mainArr[7].innerHTML == "O" ||
     mainArr[2].innerHTML == "O" && mainArr[4].innerHTML == "O" && mainArr[6].innerHTML == "O" 
){
         alert("o wins");
         }
}
