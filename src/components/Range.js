import React, { useState} from 'react';
import { Slider } from "react-semantic-ui-range";
import { Label, Button } from "semantic-ui-react";

function Range (props) {
	const dragStart = e => {
		const target = e.target;

		e.dataTransfer.setData('card_id', target.id);

		setTimeout(() => {
			target.style.display = 'none';
		}, 0);	
	}


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

	const dragOver = e => {
		e.stopPropagation();
	}

	return (
		<div
			id={props.id}
			className={props.className}
			draggable={props.draggable}
			onDragStart={dragStart}
			onDragOver={dragOver}
		>
		{props.children}
		  	<div className="range">
        <div>
        	<Label className="range-label-block" size='medium' color="green">Category {value}</Label>
        </div>
  		<div className="range-slider-block">
        	<Slider  value={value} settings={settings} style={{ trackFill: { backgroundColor: "#21b34f"}}} />
        </div>
    </div>
		</div>
	)
}

export default Range;


        // <div>
        // 	<Button color="red" className="range-button-block" size='mini'> x </Button>
        // </div>


// import React, { useState } from "react";
// import { Slider } from "react-semantic-ui-range";
// import { Label, Button } from "semantic-ui-react";
// import '../App.css';

// const Range = props => {
//   const [value, setValue] = useState(1);

//   const settings = {
//     start: 2,
//     min: 0,
//     max: 5,
//     step: 1,
//     onChange: value => {
//       setValue(value);
//     }
//   };

//  console.log(value);
//   return (
//   	<div className="range">
//         <div>
//         	<Label className="range-label-block" size='medium' color="green">Category {value}</Label>
//         </div>
//   		<div className="range-slider-block">
//         	<Slider  value={value} settings={settings} style={{ trackFill: { backgroundColor: "#21b34f"}}} />
//         </div>
//         <div>
//         	<Button color="red" className="range-button-block" size='mini'> x </Button>
//         </div>
//     </div>
//   );
// };

// export default Range;