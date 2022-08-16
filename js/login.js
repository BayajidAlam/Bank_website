document.getElementById('btn-submit').addEventListener('click',function(){
  // email value
 const emailField = document.getElementById('user-email');
 const email = emailField.value;
//  password value
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// compare/verify 
if(email === 'bayzedalam2001@gmail.com' && password === 'done123'){
  window.location.href = 'bank.html';
}
})
