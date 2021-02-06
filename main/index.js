const {app, BrowserWindow, ipcMain,Notification } = require('electron');
const { anketa } = require('./controllers/anketa');
const { client } = require('./controllers/client');



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

  mainWindow=win;
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
ipcMain.on('save-client',client.create);


// Shoh functions
ipcMain.on('anketa_save', anketa.create)

// setInterval(check_internet, 3000);
