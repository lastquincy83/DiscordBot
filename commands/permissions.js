module.exports = {
    name: 'change',
    description: 'this is a ping command!',
    execute(message, args){
        if(message.member.roles.cache.has('284984235897520128')) {
            message.channel.send('cool cool cool cool cool cool cool')    
        } else {
            message.channel.send('You dont have permission to use this command!');

        }
        
                
    }
}