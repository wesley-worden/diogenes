const getShitpost = function(parent, args, context, info) {
    return context.prisma.shitpost({ id: args.id});
};

const getChannel = function(parent, args, context, info) {
    return context.prisma.channel({ id: args.id});
};

const getUser = function(parent, args, context, info) {
    return context.prisma.user({ id: args.id});
};

module.exports = {
    getShitpost,
    getChannel,
    getUser
};