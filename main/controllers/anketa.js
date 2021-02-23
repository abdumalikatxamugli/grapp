const { ipcMain } = require('electron')
const window = require('electron').BrowserWindow;
const {Anketa, Transport, Contract} = require('../models');

const anketa_controller = () => {

    const create = async (event, args) => {
        try {
            const anketa = args.id ? await Anketa.upsert(args, { returning: true })
                : await Anketa.create(args)
            event.reply('anketa_saved', args.id ? anketa[0].dataValues : anketa.dataValues);
        }
        catch (e) {
            console.log(e)
            event.reply('error_occured', e.errors);
        }
    }
    const list = async (event, win) => {
        const anketas = await Anketa.findAll({
            limit: 2,
            offset: 1
        });
        win.webContents.send('anketa_list_resp', anketas);
    }
    const get = async (event)=>{
        var anketas = await Anketa.findAll();
        anketas=anketas.map(item=>item.dataValues);
        event.reply("get-anketas", anketas);
    }
    const getForPresent = async (event, anketa_id) =>{
        if(!anketa_id){
            return {};
        }
        const anketa= await Anketa.findOne({
            where:{
                id:anketa_id
            }
        });
        var transports= await Transport.findAll({
            where:{
                ANKETA_ID: anketa_id
            }
        });
        const contracts= await Contract.findAll({
            where:{
                ANKETA_ID: anketa_id
            }
        });
        transports=transports.map(item=>{
            item.dataValues.premiyaAmount=contracts.find(x=>x.dataValues.TRANSPORT_ID=item.dataValues.id).premiyaAmount;
            return item;
        })
        event.reply("get-presentable", {
            anketa:anketa,
            transports: transports
        });
    }
    return {
        anketa: {
            create: create,
            list: list,
            get:get,
            getForPresent:getForPresent
        }
    }

}

module.exports = anketa_controller();