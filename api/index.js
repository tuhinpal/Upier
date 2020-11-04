var QRCode = require("qrcode-svg");

module.exports = (req, res) => {
    var url = req.query.url;
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
    res.send(new QRCode(url).svg());
}