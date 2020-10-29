import * as Tone from 'tone';

const Play = () => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    Tone.Transport.bpm.value = 80;
    Tone.Transport.scheduleRepeat(time => {
        synth.triggerAttackRelease("B4", "8n", time + 0.1);
    }, "4n");
    Tone.Transport.start();
    
}

export default Play;