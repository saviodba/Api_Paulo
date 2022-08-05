const sql = require('mssql');
const config = require('../config/configMssql');


async function getAlldata() {

    try {

        let pool = await sql.connect(config);
        let res = await pool.request().query('select * from LINE_STATUS');
        return res.recordsets;

    } catch (error) {
        console.error("Ocorreu um erro [MsSql] : ", error)
    }
}

async function getLine_name(param) {

    try {
        let pool = await sql.connect(config);

        let res = await pool.request().query(`select * from LINE_STATUS where Line_name = '${param}'`);
        return res.recordsets;

    } catch (error) {
        console.error("Ocorreu um erro [MsSql] : ", error)
    }
}
module.exports = {
    getAlldata: getAlldata,
    getLine_name: getLine_name,
};
