function getPhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);
    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;  
    return newPhoneNumber; 
}

function updatePhonePrice(phoneNumber){
    const phoneTotalPrice = phoneNumber * 1219;
    const phonePriceString = document.getElementById('phone-total');
    phonePriceString.innerText = phoneTotalPrice;
}

function getTextValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalSrting = phoneTotalElement.innerText;
    const currentPhoneTotal =  parseInt(phoneTotalSrting);
    return currentPhoneTotal;
}

// function calculateSubTotal(){
//     const currentPhoneTotal = getTextValueById('phone-total');
//     const currentCaseTotal = getTextValueById('case-price');
//     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
//     const subTotalElement = document.getElementById('sub-total');
//     subTotalElement.innerText = currentSubTotal;
// }

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = getPhoneNumber(true);
    updatePhonePrice(newPhoneNumber);

    //calculate total
    calculateSubTotal();
    // const currentPhoneTotal = getTextValueById('phone-total');
    // const currentCaseTotal = getTextValueById('case-price');
    // const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;

    // const phoneTotalElement = document.getElementById('phone-total');
    // const phoneTotalSrting = phoneTotalElement.innerText;
    // const currentPhoneTotal =  parseInt(phoneTotalSrting);

    //updatng phone price

    // const phoneTotalPrice = newPhoneNumber * 1219;
    // const phonePriceString = document.getElementById('phone-total');
    // phonePriceString.innerText = phoneTotalPrice;

    // to get input field

    // const phoneNumberField = document.getElementById('phone-number-field');
    // const phoneNumberFieldString = phoneNumberField.value;
    // const previousPhoneNumber = parseInt(phoneNumberFieldString);
    // const newPhoneNumber = previousPhoneNumber + 1;
    // phoneNumberField.value = newPhoneNumber;
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = getPhoneNumber(false);
    updatePhonePrice(newPhoneNumber);
    calculateSubTotal();
    // const phoneNumberField = document.getElementById('phone-number-field');
    // const phoneNumberFieldString = phoneNumberField.value;
    // const previousPhoneNumber = parseInt(phoneNumberFieldString);
    // const newPhoneNumber = previousPhoneNumber - 1;
    // phoneNumberField.value = newPhoneNumber;
})