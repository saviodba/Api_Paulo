const sql = require('../database/dbConsultas');

module.exports.consult_all_line = (app, req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    sql.getAlldata().then((result) => {
        res.json(result[0]);
    });
}

module.exports.consult_line_name = (app, req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    sql.getLine_name(req.params.id).then((result) => {
        res.json(result[0]);
    });
}
