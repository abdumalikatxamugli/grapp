const { ipcMain } = require('electron')
const window = require('electron').BrowserWindow;
const Anketa = require('../models/anketa.js');


const anketa_controller = () => {

    const create = async (arg, win) => {
        try {
            const anketa= await Anketa.create(arg);
            console.log('fc success')
            win.webContents.send('anketa_saved',client);
        }
        catch (e) {
            // console.log(e)
            win.webContents.send('error_occured',e);
        }

    }
    const list = async (event, win) => {
        const anketas= await Anketa.findAll({
            limit: 2,
            offset: 1
        });
        win.webContents.send('anketa_list_resp',anketas);
    }
    return {
        anketa_create: create,
        anketa_list: list
    }

}
module.exports = anketa_controller();