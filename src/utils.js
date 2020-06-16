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
    throw new Error("Bruh you ain't authenticated bro");
};

const ensureAuthenticated = function(context) {
    return getUserId(context);
}

const channelExists = async function(context, channelId) {
    return await context.prisma.$exists.channel({
        id: channelId
    });
};

const ensureChannelExists = function(context, channelId) {
    if (!channelExists(context, channelId)) {
        throw new Error('Channel does not exist!');
    }
};

const fragmentChannelOwnerId = `
fragment ChannelOwnerId on Channel {
    owner {
        id
    }
}`;

const getChannelOwnerId = async function(context, channelId) {
    const channelOwnerId = await context.prisma.channel({ 
        id: channelId 
    }).$fragment(fragmentChannelOwnerId);
    // }).$fragment(fragmentChannelOwnerId).owner.id;
    // }).$fragment(fragmentChannelOwnerId)["owner"]["id"];
    // showMe(channelOwnerId);
    console.log(`channelOwnerId: ${JSON.stringify(channelOwnerId)}`);
    const foo = channelOwnerId.owner.id;
    console.log(`foo: ${JSON.stringify(foo)}`);

    // return channelOwnerId;
    return foo;
}
const ensureUserIsChannelOwner = async function(context, userId, channelId) {
    const channelOwnerId = await getChannelOwnerId(context, channelId);
    // console.log(`channelOwnerId: ${channelOwnerId}`);
    if (userId !== channelOwnerId) {
        throw new Error("You are not the owner of this channel");
    }
}

const fragmentChannelMemberIds = `
fragment ChannelMemberIds on Channel {
    members {
        id
    }
}`;

const getChannelMembers = async function(context, channelId) {
    return await context.prisma.channel({ id: channelId }).$fragment(fragmentChannelMemberIds);
}

const showMe = function(variable) {
    const variableName = Object.keys(variable)[0];
    // console.log(Object.keys(variable));
    console.log(`${variableName}: ${JSON.stringify(variable)}`);
}

module.exports = { 
    APP_SECRET, 
    getUserId, 
    ensureAuthenticated,
    channelExists, 
    ensureChannelExists,
    getChannelOwnerId,
    ensureUserIsChannelOwner,
    getChannelMembers,
    showMe 
};