import React, { useState } from "react";
import { Slider } from "react-semantic-ui-range";
import { Label, Button } from "semantic-ui-react";
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
          <Header>
            <Slider value={value} settings={settings} style={{ trackFill: { backgroundColor: "#21b34f"}}} />
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
  );
};

export default Range;

  	// <div className="range">
  	// 	<div>
   //      	<Slider value={value} settings={settings} style={{ trackFill: { backgroundColor: "#21b34f"}}} />
   //      </div>
   //      <div>
   //      	<Label size='medium' color="#21b34f">Category {value}</Label>
   //      	<Button size='mini'> x </Button>
   //      </div>
   //  </div>