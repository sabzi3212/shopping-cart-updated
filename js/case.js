/*
1. add event listener to the case plus button
2. get the value inside the case number field
3. conver string to integer
4. calculate the new case number
5. set the value to the case number field
*/

// function updateCaseNumber(isIncrease){
//     const caseNumberString = document.getElementById('case-number');
//     const caseNumber = caseNumberString.value;
//     const previousCaseNumber = parseInt(caseNumber);
//     let newCaseNumber;
//     if(isIncrease === true){
//         newCaseNumber = previousCaseNumber + 1;
//     }
//     else{
//         newCaseNumber = previousCaseNumber - 1;
//     }
//     caseNumberString.value = newCaseNumber;

//     return newCaseNumber;
// }
// function updateTotalPrice(newCaseNumber){
//     const caseTotalPrice = newCaseNumber * 59;
//     const casePerPieceString = document.getElementById('case-price');
//     casePerPieceString.innerText = caseTotalPrice;
// }

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    // const caseTotalPrice = newCaseNumber * 59;
    // const casePerPieceString = document.getElementById('case-price');
    // casePerPieceString.innerText = caseTotalPrice;

    updateTotalPrice(newCaseNumber);
    calculateSubTotal();
    // console.log(previousCaseNumber);

})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateTotalPrice(newCaseNumber);
    calculateSubTotal();
    //we will do that in a funtion
    // const caseTotalPrice = newCaseNumber * 59;
    // const casePerPieceString = document.getElementById('case-price');
    // casePerPieceString.innerText = caseTotalPrice;
    // console.log(previousCaseNumber);

})

