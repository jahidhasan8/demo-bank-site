
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get new withdraw amount
    const withdrawAmount = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawAmount.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawAmount.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('please provide valid number')
        return;
    }
    
    //    get previous withdraw amount
    const previousWithdraw = document.getElementById('previous-withdraw');
    const previousWithdrawAmountString = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    //  get previous balance
    const previousBalance = document.getElementById('previous-balance');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    if (newWithdrawAmount > previousBalanceAmount) {
        alert('Sorry you do not have sufficient balance');
        return;
    }
    //   calculate total withdraw
    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    previousWithdraw.innerText = totalWithdrawAmount;

    //    calculate total balance
    const remainingBalance = previousBalanceAmount - newWithdrawAmount;
    previousBalance.innerText = remainingBalance;


})

document.getElementById('btn-home').addEventListener('click', function () {
    window.location.href = 'index.html';
})
