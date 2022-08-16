


document.getElementById('btn-deposit').addEventListener('click', function(){
    // get new deposit amount from input field
    const depositAmount = document.getElementById('deposit-amount');
      const newDepositAmountString = depositAmount.value;
       const newDepositAmount = parseFloat(newDepositAmountString);
       depositAmount.value='';
       if(isNaN(newDepositAmount)){
        alert('please provide valid number')
        return;
    }
    //   get previews deposit amount
     const previousDepositAmount= document.getElementById('previous-depositAmount');
      const previousDepositMoneyString=previousDepositAmount.innerText;
       const previousDepositMoney =parseFloat(previousDepositMoneyString);
    //   calculate total deposit amount
     const totalDepositAmount = previousDepositMoney + newDepositAmount;
       previousDepositAmount.innerText = totalDepositAmount;

    //    get previous balance
      const previousBalance = document.getElementById('previous-balance');
      const previousBalanceAmountString = previousBalance.innerText;
      const previousBalanceAmount = parseFloat(previousBalanceAmountString);
    // calculate total balance
    const totalBalance = previousBalanceAmount + newDepositAmount;
    previousBalance.innerText=totalBalance;

       
})