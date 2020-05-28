import React, { useState } from "react";
import { Slider } from "react-semantic-ui-range";
import { Label, Button, Header } from "semantic-ui-react";
import '../App.css';

const Range = props => {
  const [value, setValue] = useState(1);

  const settings = {
    start: 2,
    min: 0,
    max: 5,
    step: 1,
    onChange: value => {
      setValue(value);
    }
  };

 console.log(value);
  return (
  	<div className="range">
        <div>
        	<Label className="range-label-block" size='medium' color="#21b34f">Category {value}</Label>
        </div>
  		<div className="range-slider-block">
        	<Slider  value={value} settings={settings} style={{ trackFill: { backgroundColor: "#21b34f"}}} />
        </div>
        <div>
        	<Button className="range-button-block" size='mini'> x </Button>
        </div>
    </div>
  );
};

export default Range;