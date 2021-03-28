import React from "react";
import '../styles/App.css';
import Activity from "./Activity";
import Diagram from "./Diagram";
import Chart from "./Chart";
import Leaders from "./Leaders";
import Vote from "./Vote";

function App(props) {
    const {alias, data} = props.data;

    return (
        <div className="App">
            {alias === "activity" &&
                <Activity data={data}/>
            }
            {
                alias === "diagram" &&
                <Diagram data={data}/>
            }
            {
                alias === "chart" &&
                <Chart data={data}/>
            }
            {
                alias === "leaders" &&
                <Leaders data={data}/>
            }
            {
                alias === "vote" &&
                <Vote data={data}/>
            }
        </div>
    );
}

export default App;
