const dbConfig = {
    user: 'nikhitha03',
    password: 'Nikhitha_db',
    server: 'nikhithadb.database.windows.net',
    database: 'Nikhitha_db',
    options: {
        encrypt: true, // Use encryption for Azure SQL
        enableArithAbort: true,
    },
};

module.exports = dbConfig;
