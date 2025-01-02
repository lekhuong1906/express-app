export default class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }
}
