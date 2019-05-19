const dao = require('../src/estudiantesDAO_SQL')

async function main() {
    await testGetAll()
    await testGetByAge()
    await testGetByDni()
}

async function testGetAll() {
    try {
        const result = await dao.getAll()
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

async function testGetByAge() {
    try {
        const result = await dao.getByAge(12, 22)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

async function testGetByDni() {
    try {
        const result = await dao.getByDni(111)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

main()
