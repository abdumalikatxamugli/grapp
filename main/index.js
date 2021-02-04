<<<<<<< HEAD
const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const { anketa_create } = require('./controllers/anketa');
=======
const {app, BrowserWindow, ipcMain,Notification } = require('electron');
const { anketa } = require('./controllers/anketa');
>>>>>>> 2bb37daa8ddde55b3de877e86eabf5430edc8730
const { client } = require('./controllers/client');
const { contract } = require('./controllers/contract');
const { transport } = require('./controllers/transport');
const { voditel } = require('./controllers/voditel');


var mainWindow;
async function createWindow() {
  const win = await new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.maximize();
  // win.removeMenu()

  win.loadURL("http://localhost:3000");

  mainWindow = win;
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

//listener abdumalik
ipcMain.on('save-client', client.create);


// Shoh functions
<<<<<<< HEAD
ipcMain.on('anketa_create', (event, came) => {
  anketa_create(came, mainWindow)
});
ipcMain.on('transport-create', transport.create);
ipcMain.on('transport-delete', transport.delete);
ipcMain.on('voditel-create', voditel.create);
ipcMain.on('contract-create', contract.create);
=======
ipcMain.on('anketa_save', anketa.create)

>>>>>>> 2bb37daa8ddde55b3de877e86eabf5430edc8730
// setInterval(check_internet, 3000);
