
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

function getAllUsers() {
    return prisma.user.findMany()
}
function getUserById(id) {
    return prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}
function createUser(data) {
    return prisma.user.create({
        data
    })
}
function updateUser(id, data) {
    return prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data
    })
}
function deleteUser(id) {
    return prisma.user.delete({
        where: {
            id: parseInt(id)
        }
    })
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}