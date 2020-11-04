/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */

let params = new URLSearchParams(location.search);
var virpa = params.get('vpa');
var am = params.get('amount');
if (virpa == null) {
    document.getElementById("content").style.display = "none";
} else {
    document.getElementById("nothing").style.display = "none";
    var vpa = params.get('vpa');
    if (am == null) {
        document.getElementById("payingam").innerHTML = "You are paying";
        var upilink = "upi://pay?pn=" + vpa + "&tn=UPIER&pa=" + vpa + "&cu=INR";
        var qr_string = "upi://pay?pn=" + vpa + "~tn=UPIER~pa=" + vpa + "~cu=INR"
    } else {
        var amount = params.get('amount');
        var upilink = "upi://pay?pn=" + vpa + "&tn=UPIER&pa=" + vpa + "&cu=INR" + "&am=" + amount;
        var qr_string = "upi://pay?pn=" + vpa + "~tn=UPIER~pa=" + vpa + "~cu=INR" + "~am=" + amount;
        document.getElementById("payingam").innerHTML = "You are paying " + amount + "₹";

    }

    document.getElementById("vpa").innerHTML = vpa;
    document.getElementById("qrcode").src = "../api?url=" + qr_string;
    document.getElementById("upibtn").href = upilink;

}

/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */