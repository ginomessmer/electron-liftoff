const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
    let win = new BrowserWindow({width: 600, height: 400});
    win.loadURL(`file://${__dirname}/index.html`);
    win.setMenuBarVisibility(false);
});

exports.openWindow = () => {
    let win = new BrowserWindow({width: 300, height: 200});
    win.loadURL(`file://${__dirname}/window.html`);
    win.setMenuBarVisibility(false);
};
