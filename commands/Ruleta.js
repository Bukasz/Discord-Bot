module.exports.run = async (bot, message, args) => {
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    // console.log(randomNumber);
    if(randomNumber==2){
        message.reply("nie zyjesz");
    }else{
        message.reply("zyjesz");
    }
}
