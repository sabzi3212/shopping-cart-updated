function updateCaseNumber(isIncrease){
    const caseNumberString = document.getElementById('case-number');
    const caseNumber = caseNumberString.value;
    const previousCaseNumber = parseInt(caseNumber);
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberString.value = newCaseNumber;

    return newCaseNumber;
}
function updateTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const casePerPieceString = document.getElementById('case-price');
    casePerPieceString.innerText = caseTotalPrice;
}

function setTextElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextValueById('phone-total');
    const currentCaseTotal = getTextValueById('case-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);
    

    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax', taxAmount);
    const finalAmount = taxAmount + currentSubTotal;
    setTextElementValueById('final-total', finalAmount); 
}