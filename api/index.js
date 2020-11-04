var QRCode = require("qrcode-svg");

module.exports = (req, res) => {
    var url = req.query.url;
    var urldecode = url.replace(/~/gi, "&")
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
    res.send(new QRCode(urldecode).svg());
}