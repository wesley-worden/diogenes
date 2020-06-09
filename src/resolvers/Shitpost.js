const postedBy = function(parent, args, context, info) {
    return context.prisma.shitpost({ id: parent.id }).postedBy();
}

const channel = function(parent, args, context, info) {
    return context.prisma.shitpost({ id: parent.id }).channel();
}

module.exports = {
    postedBy,
    channel
};