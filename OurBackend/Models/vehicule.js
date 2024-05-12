
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

function getAllUserVehicule(user) {
    return prisma.vehicle.findMany({
        where: {
            driverId: user.id
        }
    })
}
function getVehicleById(id) {
    return prisma.vehicle.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}
function createVehicle(data) {
    return prisma.vehicle.create({
        data
    })
}
function updateVehicle(id, data) {
    return prisma.vehicle.update({
        where: {
            id: parseInt(id)
        },
        data
    })
}
function deleteVehicle(id) {
    return prisma.vehicle.delete({
        where: {
            id: parseInt(id)
        }
    })
}


module.exports = {
    getAllUserVehicule,
    getVehicleById,
    createVehicle,
    updateVehicle,
    deleteVehicle
}