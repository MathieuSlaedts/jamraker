import React, { useEffect, useState } from 'react';
import Grid from '../../Components/Grid/Grid.js';

import Play from '../../Components/Play/Play.js'

function StepSequencer() {

    /*
    * ----------
    * TEMP
    * ----------
    */

    const tracksNum = 5;
    const stepsNum = 24;

    /*
    * ----------
    * METHODS
    * ----------
    */

    const [notes, setNotes] = useState([
        { name: "A5", duration: 0.5, time: 1},
    ]);

    /*
    * ----------
    * RENDER
    * ----------
    */
    
    return (
    <div className="box step-sequencer">
        <div className="box__header">
            <h2 className="box__title">Step Sequencer</h2>
            <button className="box__close">x</button>
        </div>
        <div className="box__content ss__content">

            <Grid rowNum={tracksNum} colNum={stepsNum} />
            <button onClick={Play}>Play</button>
        </div>
    </div>
    );
}

export default StepSequencer;