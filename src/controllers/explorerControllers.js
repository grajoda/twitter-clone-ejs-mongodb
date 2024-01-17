const renderExplorerHome = async (req, res) => {

    res.render('pages/explorer', {
        user: req.user
    });
}



module.exports = {
    renderExplorerHome
}