const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

function getAllCiteWaterReserves(cite) {
    return prisma.WaterReserve.findMany({
        where: {
            siteId: cite.id
        }
    })
}
function getWaterReserve(id) {
    return prisma.WaterReserve.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}
function WaterReserve(data) {
    return prisma.WaterReserve.create({
        data
    })
}
function updateWaterReserve(id, data) {
    return prisma.WaterReserve.update({
        where: {
            id: parseInt(id)
        },
        data
    })
}
function deleteWaterReserve(id) {
    return prisma.WaterReserve.delete({
        where: {
            id: parseInt(id)
        }
    })
}


module.exports = {
    getAllCiteWaterReserves,
    getWaterReserve,
    WaterReserve,
    updateWaterReserve,
    deleteWaterReserve
}