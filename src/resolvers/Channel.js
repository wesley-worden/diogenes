const owner = function(parent, args, context, info) {
    return context.prisma.channel({ id: parent.id }).owner();
}

const members = function(parent, args, context, info) {
    return context.prisma.channel({ id: parent.id }).members();
}

const shitposts = function(parent, args, context, info) {
    return context.prisma.channel({ id: parent.id }).shitposts();
}

module.exports = {
    owner,
    members,
    shitposts
};