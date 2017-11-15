const electron = require('electron');
const {app, BrowserWindow} = electron;

const path = require('path');
const url = require('url');

let win;

var Twitch = require("twitch-sdk");


function createWindow() {
  win = new BrowserWindow ({width: 800, height: 600});
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));

  win.webContents.openDevTools();
}

exports.loginTwitch = function () {
  console.log(true);
};

app.on('ready', createWindow);
