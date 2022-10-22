import { useState } from 'react';
import './App.css';

function App() {
  const [UpdateRun, setUpdateRun] = useState(0)
  const [UpdateOut, setUpdateOut] = useState(0)
  const [UpdateNoBol, setUpdateNoBol] = useState(0)
  const [UpdateWideBol, setUpdateWideBol] = useState(0)
  return (
    <div className='bg_styles'>
      <div className='position_bg'>
        <div>
          <h1>Batting Team :{UpdateRun + UpdateNoBol + UpdateWideBol}/{UpdateOut}</h1>
          <h1>Fielding Team: <br /> {UpdateOut} Wickets   <br />{UpdateNoBol}  No Balls  <br /> {UpdateWideBol} Wide Balls  </h1>

          {/* +++++++++++ Run +++++++++++++ */}
          <div className='runAdd'>
            <button id="foot" onClick={() => setUpdateRun(UpdateRun + 1)}><button className="button-os">Run 1</button></button>
            <button id="foot" onClick={() => setUpdateRun(UpdateRun + 2)}><button className="button-os">Run 2</button></button>
            <button id="foot" onClick={() => setUpdateRun(UpdateRun + 3)}><button className="button-os">Run 3</button></button>
            <button id="foot" onClick={() => setUpdateRun(UpdateRun + 4)}><button className="button-os">Run 4</button></button>
            <button id="foot" onClick={() => setUpdateRun(UpdateRun + 6)}><button className="button-os">Run 5</button></button>
          </div>
          {/* +++++++++++ out  No Balls and  Wide Balls or  +++++++++++++ */}
          <div className='runAdd'>
            <button id="foot" onClick={() => setUpdateOut(UpdateOut + 1)}><button className="button-os">out</button></button>
            <button id="foot" onClick={() => setUpdateNoBol(UpdateNoBol + 1)}><button className="button-os">No Balls</button></button>
            <button id="foot" onClick={() => setUpdateWideBol(UpdateWideBol + 1)}><button className="button-os">Wide Balls</button></button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
