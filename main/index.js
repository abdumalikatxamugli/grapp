const {app, BrowserWindow, ipcMain,Notification } = require('electron');

var internet=false;

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


// Shoh functions


// check internet

// setInterval(check_internet, 3000);

// function check_internet(){
//   dns.resolve('www.google.com', function(err) {
//     if (err) {
//      if(internet){
//       const notification = {
//          title: 'GROSS: Интернет отключен',
//       }
//       new Notification(notification).show();
//       internet=false;
//     }
//   } else {
//     if(!internet){
//       const notification = {
//         title: 'GROSS: Интернет',
//         body: 'У вас есть интернет, я начинаю синхронизацию'
//       }
//       new Notification(notification).show()
//       internet=true;
//     }
//   }
// });
// }