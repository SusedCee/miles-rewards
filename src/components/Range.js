import React, { useState } from "react";
import { Slider } from "react-semantic-ui-range";
import { Label, Grid } from "semantic-ui-react";

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
  	<div>

        <Slider value={value} settings={settings} style={{ trackFill: { backgroundColor: "#21b34f"}}} />
        <Label color="red">{value}</Label>

    </div>
  );
};

export default Range;