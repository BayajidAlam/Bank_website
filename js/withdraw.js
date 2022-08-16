document.getElementById('btn-withdraw').addEventListener('click',function(){
  // withdrawField
  const withdrawField = document.getElementById('withdraw-input');
  const newWithDrawAmmountString = withdrawField.value;
  const newWithDrawAmmount =parseFloat(newWithDrawAmmountString);
  
  // withdraw screen
  const WithdawElement = document.getElementById("withdraw-total");
  const previousWithdrawString = WithdawElement.innerText;
  const previousWithdawTotal = parseFloat(previousWithdrawString);

  const currentWithdrawTotal = previousWithdawTotal + newWithDrawAmmount;
  WithdawElement.innerText = currentWithdrawTotal;

  // balance total calculation
  const balanceaTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalstring = balanceaTotalElement.innerText;
  const previousbalanceTotal = parseFloat(previousBalanceTotalstring);
 
  // total balance after withdraw
  const newBalanceTotal = previousbalanceTotal - newWithDrawAmmount;
  balanceaTotalElement.innerText = newBalanceTotal;
  withdrawField.value = '';
})
