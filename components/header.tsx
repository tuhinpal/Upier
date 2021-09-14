import type { NextPage } from "next";
import Link from "next/link";

interface Props {
  title?: string;
  share?: boolean;
}

const Header: NextPage<Props> = (props) => {
  async function share() {
    if (props.share) {
      try {
        if (navigator.share) {
          await navigator.share({
            title: "Share | Upier",
            text: "*Upier* \n\nShareable Secure Payment's Link for UPI :\n",
            url: window.location.href,
          });
        } else {
          throw new Error("Web share is not sipported !");
        }
      } catch (error) {
        alert((error as object).toString());
      }
    }
  }

  return (
    <header className="header">
      <h1 className="title">{props.title}</h1>
      <Link href={"/"} passHref>
        <div className="icon">
          <img
            src={`/images/${props.share ? "share" : "plus"}.svg`}
            alt="Share | Create"
            width="30"
            height="30"
            onClick={share}
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
