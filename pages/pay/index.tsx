import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../../analytic/gtag";

// Redirecting previous users to new route
const PayRefer: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    gtag.event({
      action: "pushed_to_new_path",
      category: "engagement",
      label: `Pushed existing user to new path`,
      value: `Pushed`,
    });
    router.push(
      `/pay/${router.query.vpa}${
        router.query.amount ? `?am=${router.query.amount}` : ""
      }`
    );
  }, [router.query]);

  return <p>Redirecting ...</p>;
};

export default PayRefer;
