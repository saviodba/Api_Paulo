module.exports = application => {

    application.get('/', (req, res) => {
        application.src.controllers.controllerIndex.consult_all_line(application, req, res);
    })

    application.get('/data_line/:id', (req, res) => {
        application.src.controllers.controllerIndex.consult_line_name(application, req, res);
    })

}
