import type { NextPage } from "next";
import QRCode from "react-qr-code";
import { useRouter } from "next/router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Meta from "../../components/meta";
import * as gtag from "../../analytic/gtag";

const Pay: NextPage = () => {
  const router = useRouter();
  const deeplink = `upi://pay?pn=withUpier&pa=${router.query.vpa}&cu=INR${
    router.query.am
      ? `&am=${
          router.query.am.includes(".")
            ? router.query.am
            : `${router.query.am}.0`
        }`
      : ""
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
              target="_blank"
              rel="noopener noreferrer"
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
