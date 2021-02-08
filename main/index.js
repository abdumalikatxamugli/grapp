const {app, BrowserWindow, ipcMain,Notification } = require('electron');
const { anketa } = require('./controllers/anketa');
const { client } = require('./controllers/client');
const { contract } = require('./controllers/contract');
const {payment} = require('./controllers/payment');
const {transch} = require('./controllers/transch');
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
ipcMain.on('get-clients', client.list);
ipcMain.on('remove-client', client.remove);
ipcMain.on('insert-client-from-archive', client.insertFromArchive);
ipcMain.on('get-contracts', contract.get);
ipcMain.on('get-transports', transport.get);

// Shoh functions
ipcMain.on('anketa_save', anketa.create);
ipcMain.on('transport-create', transport.create);
ipcMain.on('transport-delete', transport.delete);
ipcMain.on('voditel-create', voditel.create);
ipcMain.on('contract-create', contract.create);
ipcMain.on('transch-create', transch.create);
ipcMain.on('payment-create', payment.create);
// setInterval(check_internet, 3000);
