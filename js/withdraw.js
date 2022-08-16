document.getElementById('btn-withdraw').addEventListener('click',function(){
  // withdrawField
  const withdrawField = document.getElementById('withdraw-input');
  const newWithDrawAmmountString = withdrawField.value;
  const newWithDrawAmmount =parseFloat(newWithDrawAmmountString);
  // clear input field
  withdrawField.value = '';

  // input varification
   if(isNaN(newWithDrawAmmount)){
    alert('Please Input a number!')
    return;
   }
  // withdraw screen
  const WithdawElement = document.getElementById("withdraw-total");
  const previousWithdrawString = WithdawElement.innerText;
  const previousWithdawTotal = parseFloat(previousWithdrawString);
  
  // balance total calculation
  const balanceaTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalstring = balanceaTotalElement.innerText;
  const previousbalanceTotal = parseFloat(previousBalanceTotalstring);

  // withdraw ammount validition
  if(newWithDrawAmmount > previousbalanceTotal){
    alert("bapar bank e eto taka nai!");
    return;
  }

  const currentWithdrawTotal = previousWithdawTotal + newWithDrawAmmount;
  WithdawElement.innerText = currentWithdrawTotal;

  // total balance after withdraw
  const newBalanceTotal = previousbalanceTotal - newWithDrawAmmount;
  balanceaTotalElement.innerText = newBalanceTotal;
})
