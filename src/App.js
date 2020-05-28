import React, { useState } from 'react';
import './App.css';
import { Slider } from "react-semantic-ui-range";
import { Label, Button } from "semantic-ui-react";
import RewardTable from './components/RewardTable';
import Range from './components/Range';

function App() {

  // const [value1, setValue1] = useState(1);
  // const [value2, setValue2] = useState(1);
  // const [value3, setValue3] = useState(1);
  // const [value4, setValue4] = useState(1);
  // const [value5, setValue5] = useState(1);

  // const settings = {
  //   start: 2,
  //   min: 0,
  //   max: 5,
  //   step: 1,
  //   onChange: value => {
  //     setValue1(value1);
  //     setValue2(value2);
  //     setValue3(value3);
  //     setValue4(value4);
  //     setValue5(value5);
  //   }
  // }; 

  return (
    <div className="App">
    <h1> Miles Rewards </h1>
    <main className='flexbox'>
      <RewardTable id="board-1" className='board'>
      <h3>Reward 1</h3>
        <Range id='card-1' className='card' draggable='true'>

        </Range>
      </RewardTable>
      <RewardTable id="board-2" className='board'>
      <h3>Reward 2</h3>
        <Range id='card-2' className='card' draggable='true'>

        </Range>
      </RewardTable>
      <RewardTable id="board-3" className='board'>
      <h3>Reward 2</h3>
        <Range id='card-3' className='card' draggable='true'>

        </Range>
      </RewardTable>
      <RewardTable id="board-4" className='board'>
      <h3>Reward 4</h3>
        <Range id='card-4' className='card' draggable='true'>

        </Range>
      </RewardTable>
      <RewardTable id="board-5" className='board'>
      <h3>Reward 5</h3>
        <Range id='card-5' className='card' draggable='true'>
        </Range>
      </RewardTable>
      </main>
    </div>
  );
}

export default App;

    // <div className="App">
    // <h1> Miles Rewards </h1>
    // <main className='flexbox'>
    //   <RewardTable id="board-1" className='board'>
    //   <h3>Reward 1</h3>
    //     <Range id='card-1' className='card' draggable='true'>
    //      <div className="range">
    //           <div>
    //            <Label className="range-label-block" size='medium' color="green">Category {value1}</Label>
    //           </div>
    //        <div className="range-slider-block">
    //            <Slider  value={value1} settings={settings} style={{ trackFill: { backgroundColor: "#21b34f"}}} />
    //           </div>
    //           <div>
    //            <Button color="red" className="range-button-block" size='mini'> x </Button>
    //           </div>
    //       </div>
    //     </Range>
    //   </RewardTable>
    //   <RewardTable id="board-2" className='board'>
    //   <h3>Reward 2</h3>
    //     <Range id='card-2' className='card' draggable='true'>
    //      <div className="range">
    //           <div>
    //            <Label className="range-label-block" size='medium' color="green">Category {value2}</Label>
    //           </div>
    //        <div className="range-slider-block">
    //            <Slider  value={value2} settings={settings} style={{ trackFill: { backgroundColor: "#21b34f"}}} />
    //           </div>
    //           <div>
    //            <Button color="red" className="range-button-block" size='mini'> x </Button>
    //           </div>
    //       </div>
    //     </Range>
    //   </RewardTable>
    //   <RewardTable id="board-3" className='board'>
    //   <h3>Reward 2</h3>
    //     <Range id='card-3' className='card' draggable='true'>
    //      <div className="range">
    //           <div>
    //            <Label className="range-label-block" size='medium' color="green">Category {value3}</Label>
    //           </div>
    //        <div className="range-slider-block">
    //            <Slider  value={value3} settings={settings} style={{ trackFill: { backgroundColor: "#21b34f"}}} />
    //           </div>
    //           <div>
    //            <Button color="red" className="range-button-block" size='mini'> x </Button>
    //           </div>
    //       </div>
    //     </Range>
    //   </RewardTable>
    //   <RewardTable id="board-4" className='board'>
    //   <h3>Reward 4</h3>
    //     <Range id='card-4' className='card' draggable='true'>
    //      <div className="range">
    //           <div>
    //            <Label className="range-label-block" size='medium' color="green">Category {value4}</Label>
    //           </div>
    //        <div className="range-slider-block">
    //            <Slider  value={value4} settings={settings} style={{ trackFill: { backgroundColor: "#21b34f"}}} />
    //           </div>
    //           <div>
    //            <Button color="red" className="range-button-block" size='mini'> x </Button>
    //           </div>
    //       </div>
    //     </Range>
    //   </RewardTable>
    //   <RewardTable id="board-5" className='board'>
    //   <h3>Reward 5</h3>
    //     <Range id='card-5' className='card' draggable='true'>
    //      <div className="range">
    //           <div>
    //            <Label className="range-label-block" size='medium' color="green">Category {value5}</Label>
    //           </div>
    //        <div className="range-slider-block">
    //            <Slider  value={value} settings={settings} style={{ trackFill: { backgroundColor: "#21b34f"}}} />
    //           </div>
    //           <div>
    //            <Button color="red" className="range-button-block" size='mini'> x </Button>
    //           </div>
    //       </div>
    //     </Range>
    //   </RewardTable>
    //   </main>
    // </div>
