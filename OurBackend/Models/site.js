
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

function getAllSites() {
    return prisma.site.findMany()
}
function getSiteById(id) {
    return prisma.site.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}
function createSite(data) {
    return prisma.site.create({
        data
    })
}
function updateSite(id, data) {
    return prisma.site.update({
        where: {
            id: parseInt(id)
        },
        data
    })
}
function deleteSite(id) {
    return prisma.site.delete({
        where: {
            id: parseInt(id)
        }
    })
}


module.exports = {
    getAllSites,
    getSiteById,
    createSite,
    updateSite,
    deleteSite
}