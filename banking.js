// handel deposit button 

document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposit
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const newDepositAmount = parseFloat(depositAmount);

    // update total deposit amount
    const depositTotal = document.getElementById('deposit-total');

    const courentDepositAmount = parseFloat(depositTotal.innerText);
    const newDepositTotal = courentDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // update total balance total 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const courentBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = courentBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input fild 
    depositInput.value = '';
})

// handel withdraw button 

document.getElementById('withdraw-button').addEventListener('click', function () {

    // get the amount withdraw
    const withdrawInpute = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInpute.value;
    const newWithdrawAmount = parseFloat(withdrawAmount);

    // update total withdraw amount 
    const totalWithdraw = document.getElementById('total-withdraw');
    const curentWithdrawTotal = parseFloat(totalWithdraw.innerText);
    const newWithdrawTotal = curentWithdrawTotal + newWithdrawAmount;
    totalWithdraw.innerText = newWithdrawTotal;

    withdrawInpute.value = '';

    // update total balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const courentBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = courentBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

})