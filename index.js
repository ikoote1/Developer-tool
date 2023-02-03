


const names = document.getElementById('nam');
const email = document.getElementById('nams');
const textArea = document.getElementById('enter-t');

const userDat = {
    userName :''
    userEmail: ',
    userText :''
    };

function press(){
  userDat.userName = names.value;
  userDat.userEmail = email.value;
  userDat.userText = textArea.value;
}

console.log(userDat);=


const form = document.querySelector('#acts');
const errorSpan = document.querySelector(error');

const EMAIL_ERROR = 'Email should be in lower cases';

function validateEmail(email) {
  if (email.value  email.value.toLowerCase()) form.submit();
  else errorSpan.innerHTML = EMAIL_ERROR;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  validateEmail(form.elements.nam;
});
