// check internet

//  

// const check_internet=()=>{
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

const helpers=()=>{
  const upsert=async (model, data)=>{
    const temp=await model.upsert(data,{returning:true});
    return temp[0].dataValues;
  }
  return {
    myupsert:upsert
  }
}
module.exports=helpers();