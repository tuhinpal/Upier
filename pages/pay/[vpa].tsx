import type { NextPage } from "next";
import QRCode from "react-qr-code";
import { useRouter } from "next/router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Meta from "../../components/meta";
import * as gtag from "../../analytic/gtag";
const { v4: uuidv4 } = require("uuid");

const Pay: NextPage = () => {
  const router = useRouter();
  const deeplink = `upi://pay?pa=${
    router.query.vpa
  }&pn=withUpier&mc=Upier&tr=${uuidv4()}&tn=withUpier&cu=INR${
    router.query.am ? `&am=${router.query.am}` : ""
  }`;

  return (
    <>
      <Meta title="Pay | Upier" />
      <main>
        <Header title="Pay" />
        <section className="content pay">
          <QRCode value={deeplink} className="qrsvg" size={200} />
          <p className="computerprompt">
            If you are in PC Scan It with any UPI App to Pay
          </p>
          <p className="payingtext">
            You are paying{router.query.am ? ` ₹ ${router.query.am}` : ""}
          </p>
          <p className="payingtext">to</p>
          <p className="payingtext vpatext">{router.query.vpa}</p>
          <div className="center">
            <a
              href={deeplink}
              className="paybutton"
              onClick={(): any => {
                gtag.event({
                  action: "clicked_pay_button",
                  category: "engagement",
                  label: `Vpa: ${router.query.vpa} - Amount: ${
                    router.query.am || "null"
                  }`,
                  value: `Clicked on Deep Link by user`,
                });
              }}
            >
              P A Y
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Pay;
