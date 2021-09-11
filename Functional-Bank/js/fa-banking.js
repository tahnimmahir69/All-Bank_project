

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

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


document.getElementById('deposit-btn').addEventListener('click', function () {
    //console.log('finally clicked');
    // const depositInput = document.getElementById('deposit-input');

    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    const depositAmount = getInputValue('deposit-input');  // main input value ta aii function ta nicce

    //get & update deposite total

    // const depositTotal = document.getElementById('deposit-total');


    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);

    // depositTotal.innerText = previousDepositTotal + depositAmount;
    // console.log(depositTotalText);

    updateTotalField('deposit-total', depositAmount);

    // //update balance item
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal + depositAmount;

    updateBalance(depositAmount, true);
});




//hanle withdraw button and item

document.getElementById('withdraw-btn').addEventListener('click', function () {
    //console.log('withdraw click')
    //input ke niye ase
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // // console.log(withdrawAmountText)
    // const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawAmount = getInputValue('withdraw-input');

    // // get & update withdraw total

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    // //span ar vitor je sonka pabo sob innerText akere thake tai text thake Float a convert korte hoi
    // const withdrawTotalText = withdrawTotal.innerText;

    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    updateTotalField('withdraw-total', withdrawAmount);


    // update Balance Total after withdraw

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);


    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    updateBalance(withdrawAmount, false); // bcz amader nagative value pataite hobe jaite (-) kora jai


});

