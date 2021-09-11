//function
function getInputValue(inputId) {

    const InputField = document.getElementById(inputId);

    const inputAmountText = InputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input field
    InputField.value = '';
    // return value ar por kono function or other case use korle applay hoi na so, (input clkarefield) age decleare korche

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {

    const totalElement = document.getElementById(totalFieldId);


    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

//mot balance thake jate basi collect kora nai jai atai aii function
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    //or
    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


document.getElementById('deposit-btn').addEventListener('click', function () {


    const depositAmount = getInputValue('deposit-input');  // main input value ta aii function ta nicce

    //if ar karone (-50) negative value nibe na
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

});




//hanle withdraw button and item

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const CurrentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < CurrentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false); // bcz amader nagative value pataite hobe jaite (-) kora jai
    }

});

