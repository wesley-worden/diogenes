const { showMe, ensureAuthenticated } = require('./../utils');

const getShitpost = async function(parent, args, context, info) {
    ensureAuthenticated(context);
    return await context.prisma.shitpost({ id: args.id});
};

const getChannel = async function(parent, args, context, info) {
    ensureAuthenticated(context);
    const foundChannel = await context.prisma.channel({ id: args.id });
    showMe(foundChannel);
    return foundChannel;
};

const getUser = async function(parent, args, context, info) {
    ensureAuthenticated(context);
    return await context.prisma.user({ id: args.id});
};

module.exports = {
    getShitpost,
    getChannel,
    getUser
};