const memberOfChannels = function(parent, args, context, info) {
    return context.prisma.user({ id: parent.id }).memberOfChannels();
}

const ownerOfChannels = function(parent, args, context, info) {
    return context.prisma.user({ id: parent.id }).ownerOfChannels();
}

module.exports = {
    memberOfChannels,
    ownerOfChannels
};