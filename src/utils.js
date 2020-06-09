const jwt = require('jsonwebtoken');
// const APP_SECRET = 'bruh-this-needs-to-be-locked-down';
const { APP_SECRET } = require('./../config.json');

const getUserId = function(context) {
    const Authorization = context.request.get('Authorization');
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        const { userId } = jwt.verify(token, APP_SECRET);
        return userId;
    }
    throw new Error('Not authenticated bro');
}

// const channelExists = async function(context, channelId) {
//     return context.prisma.$exists.channel({
//         id: channelId
//     });
// }

const showMe = function(variable) {
    const variableName = Object.keys(variable)[0];
    console.log(`${variableName}: ${variableName}`);
}

module.exports = { 
    APP_SECRET, 
    getUserId, 
    // channelExists, 
    showMe 
};