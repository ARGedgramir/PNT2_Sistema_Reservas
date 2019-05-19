const dotenv = require('dotenv')
dotenv.config()

const dbConfigs = {
    home: {
        client: 'mssql',
        connection: {
            server: 'localhost\\SQLEXPRESS',
            user: 'Login_aterri',
            password: 'Pass#0rD',
            database: 'aterrizar.com'
        }
    },
}

const srvConfigs = {
    port: process.env.PORT || 8080,
    env: process.env.DB_ENV
}

module.exports = {
    dbConfig: dbConfigs[srvConfigs.env],
    port: srvConfigs.port
}