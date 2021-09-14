import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <h1 className="logo">U P I E R</h1>
      <p className="slogan">
        Shareable Payment&apos;s Link for{" "}
        <img
          src="/images/upi.svg"
          className="upilogo"
          width="40"
          alt="Upi Icon"
        />
      </p>
      <p className="tpf">
        <Link href={"/privacy-policy"} passHref>
          <u>Privacy Policy</u>
        </Link>
      </p>
      <p className="tuhin">
        An Open Source Project by{" "}
        <a
          href="http://thetuhin.com/?ref=upier"
          target="_blank"
          rel="noreferrer"
        >
          Tuhin
        </a>
      </p>
      <img
        src="/images/github.svg"
        className="center"
        width="35"
        alt="Github"
      />
    </footer>
  );
};

export default Footer;
