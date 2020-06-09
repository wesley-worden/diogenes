const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, showMe, getUserId, channelExists } = require('./../utils');

const login = async function(parent, args, context, info) {
    //get existing user from prisma database
    const { password, ...user } = await context.prisma.user({ email: args.email });
    if (!user) {
        throw new Error('No user found bruh');
    }

    //check if password is same ...same .. same password (same)
    const valid = await bcrypt.compare(args.password, password);
    if (!valid) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    //return AuthPayload object according to schema
    return { token, user };
};

const signup = async function(parent, args, context, info) {
    // showMe(args);
    //hash password
    const hashedPassword = await bcrypt.hash(args.password, 10)

    //bro whats destructuring
    const { password, ...user } = await context.prisma.createUser({ ...args, password: hashedPassword });
    // showMe(user); showMe(password);
    // showMe(user.id);

    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    // showMe(token);

    return { token, user }; // AuthPayload object
};

const createChannel = function(parent, args, context, info) {
    const userId = getUserId(context);
    const createdChannel = context.prisma.createChannel({
        name: args.name,
        owner: { connect: { id: userId } }
    });
    return createdChannel;
};

//help
// const addMembers = function(parent, args, context, info) {
//     const userId = getUserId(context);
//     if (!channelExists(args.channelId)) {
//         throw new Error("Channel doesn't exist");
//         return;
//     }
//     const channel = context.prisma.channel({ id: args.channelId }); //todo will this throw an error if channel doesnt exist?
//     if (channel.owner !== userId) {
//         throw new Error('You are not the owner of this channel!');
//         return;
//     }
//     const members = args.members;
//     for (member in members) {

//     }
// };

const shitpost = function(parent, args, context, info) {
    const userId = getUserId(context);

    // if (!channelExists(context, args.channelId)) {
    //instead,
    const channelExists = context.prisma.channel({ id: args.channelId });
    if (channelExists !== undefined) {
        throw new Error("Channel doesn't exists");
        return;
    }

    const createdShitpost = context.prisma.createShitpost({
        postedBy: { connect: { id: userId } },
        encryptedContent: args.encryptedContent,
        channel: channelExists //shocked if this works
    });
    return createdShitpost;
};

const deleteShitpost = async function(parent, args, context, info) {
    const userId = getUserId(context);
    if (!context.prisma.shitpost({ id: args.shitpostId }) ) {
        throw new Error("Shitpost doesn't exist");
        return;
    }
    return await context.prisma.deleteShitpost({ id: args.shitpostId });
};

// const removeMembers = f
//todo: help

const deleteChannel = async function(parent, args, context, info) {
    const userId = getUserId(context);
    if (!context.prisma.$exists.channel({ id: args.channelId})) {
        throw new Error("Shitpost doesn't exist")
        return;
    }
    return await context.prisma.deleteShitpost({ id: args.shitpostId });
};

module.exports = { 
    login,
    signup,
    createChannel,
    // addMembers,
    shitpost,
    deleteShitpost,
    // removeMembers,
    deleteChannel
};