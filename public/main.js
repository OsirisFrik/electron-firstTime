const remote = require('electron').remote;
const app = remote.require('./app');

let button = document.createElement('button');

button.textContent = 'Login';
document.body.appendChild(button);

button.addEventListener('click', function () {
  app.loginTwitch();
})
