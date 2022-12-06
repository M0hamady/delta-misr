/*eslint-disable*/
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardLanding from "components/Cards/CardLanding";
import CardOverView from "components/Cards/CardOverView";
import CardOverViewHistory from "components/Cards/CardOverViewHistory";
import CardSupply from "components/Cards/CardSupply";
import CardSmartAsk from "components/Cards/CardSmartAsk";
import CardCardWtihTitleAndDesc from "components/Cards/CardCardWtihTitleAndDesc";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <CardLanding />
      <CardCardWtihTitleAndDesc />
      <CardOverView />


      <CardSmartAsk/>
      <Footer />
    </>
  );
}
