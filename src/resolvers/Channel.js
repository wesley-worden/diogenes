const owner = async function(parent, args, context, info) {
    return await context.prisma.channel({ id: parent.id }).owner();
}

const members = async function(parent, args, context, info) {
    return await context.prisma.channel({ id: parent.id }).members();
}

const shitposts = async function(parent, args, context, info) {
    return await context.prisma.channel({ id: parent.id }).shitposts();
}

module.exports = {
    owner,
    members,
    shitposts
};