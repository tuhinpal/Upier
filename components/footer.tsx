import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <h1 className="logo">U P I E R</h1>
      <p className="slogan">
        Shareable Payment's Link for{" "}
        <img src="/images/upi.svg" className="upilogo" width="40" />
      </p>
      <p className="tpf">
        <Link href={"/privacy-policy"}>
          <u>Privacy Policy</u>
        </Link>
      </p>
      <p className="tuhin">An Open Source Project by Tuhin</p>
      <img src="/images/github.svg" className="center" width="35" />
    </footer>
  );
};

export default Footer;
