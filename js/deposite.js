document.getElementById('btn-deposite').addEventListener('click',function(){
  // deposite field
  const depositeField = document.getElementById('deposite-field');
  const newDepositeAmmountString = depositeField.value;
  const newDepositeAmmount = parseFloat(newDepositeAmmountString);
  depositeField.value = '';
  
  if(isNaN(newDepositeAmmount)){
    alert('please input deposite ammount on number!')
    return;
  }
  // deposite screen
  const depositeTotalElement = document.getElementById('deposite-total');
  const PreviousDepositeTotalString = depositeTotalElement.innerText;
  const PreviousDepositeTotal = parseFloat(PreviousDepositeTotalString);
   depositeTotalElement.innerText = newDepositeAmmount;

  // total ammount on dipusite screen
  const currentDepositeTotal = PreviousDepositeTotal + newDepositeAmmount;
  depositeTotalElement.innerText = currentDepositeTotal;
   
  // total balance screen
  const balanceTotalElement = document.getElementById('balance-total');
  const previousbalanceTotalString = balanceTotalElement.innerText;
  const previousbalanceTotal = parseFloat(previousbalanceTotalString);

  // current total balance
  const currentBalanceTotal = previousbalanceTotal + newDepositeAmmount;

  balanceTotalElement.innerText =  currentBalanceTotal;
})

// clear deposite field


