// firstly clicked the button

document.getElementById('deposit-btn').addEventListener('click', function () {
    //console.log('finally clicked');
    const depositInput = document.getElementById('deposit-input');

    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // console.log(depositAmount);

    // secondly text to convert number

    //get current deposit
    const depositTotal = document.getElementById('deposit-total');


    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
    console.log(depositTotalText);

    //clear input field
    depositInput.value = '';

    //update balance item
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
});


//hanle withdraw button and item

document.getElementById('withdraw-btn').addEventListener('click', function () {
    //console.log('withdraw click')
    //input ke niye ase
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    // console.log(withdrawAmountText)
    const withdrawAmount = parseFloat(withdrawAmountText);
    //update withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    //span ar vitor je sonka pabo sob innerText akere thake tai text thake Float a convert korte hoi
    const withdrawTotalText = withdrawTotal.innerText;
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update Balance Total after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);


    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;



    //cleare withdraw input field
    withdrawInput.value = '';
});