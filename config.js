// Aqui fica a configuração com o banco de dados
var config = {
    server: 'bdmatheus.database.windows.net',
    userName: 'matheus.oliveira',
    password: 'Manphius13'

    , options: {
        debug: {
            packet: true,
            data: true,
            payload: true,
            token: false,
            log: true
        },
        database: 'MatheusBanco',
        encrypt: true // for Azure users
    }
};

module.exports = config;