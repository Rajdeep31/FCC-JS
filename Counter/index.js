// document.getElementById("count-el").innerText=2;

// let firstBatch=5;
// let secondBatch=7;
// let count=firstBatch+secondBatch;
// console.log(count)

// let myAge=18;
// let humanDogRatio=7;
// let myDogAge=myAge*humanDogRatio;
// console.log(myDogAge);

// let count=5;
// count=count+2;
// count=count+10;
// count=count-2;
// console.log(count);


// let bonusPoints=50;
// console.log(bonusPoints);
// bonusPoints=bonusPoints+50;
// console.log(bonusPoints);
// bonusPoints=bonusPoints-75;
// console.log(bonusPoints);
// bonusPoints=bonusPoints+45;
// console.log(bonusPoints);

//-----------------------------------------

//initialize count as 0
//listen for click on variable when the button is clicked
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
let saveEl=document.getElementById("save-el");
let countEl=document.getElementById("count-el");
let count=0;
function increment(){
    count+=1;
    countEl.innerText=count;
}

function save(){
    let countStr=count+" - ";
    saveEl.textContent+=countStr;
    countEl.textContent=0;
    count=0;
}