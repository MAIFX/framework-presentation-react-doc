import React from "react";
import PropTypes from "prop-types";

import SliderValeur from "maif-framework-presentation-react/lib/components/simulateur/sliderValeur";

function SimulateurExample(){
  return <SliderValeur labels={["5 ans", "7 ans", "10 ans", "20 ans", "30 ans"]} />;
}

export default SimulateurExample;