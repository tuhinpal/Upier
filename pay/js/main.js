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
		var upilink = "upi://pay?pa=" + vpa + "&cu=INR&tn=Pay using upier.tk";
	} else {
		var amount = params.get('amount');
		var upilink = "upi://pay?pa=" + vpa + "&cu=INR&tn=Pay using upier.tk" + "&am=" + amount;
		document.getElementById("payingam").innerHTML = "You are paying " + amount + "₹";

	}

	document.getElementById("vpa").innerHTML = vpa;
	document.getElementById("qrcode").src = "https://svgqr.upier.tk/fg=000000/bg=ffffff/max=100?" + upilink;
	document.getElementById("upibtn").href = upilink;

}

/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */
