import React, {useEffect} from "react";
import '../styles/App.css';
import Activity from "./Activity";
import Diagram from "./Diagram";
import Chart from "./Chart";
import Leaders from "./Leaders";
import Vote from "./Vote";

function App({data}) {
    const {alias} = data;

    useEffect(()=> {
        document.title = alias[0].toUpperCase() + alias.slice(1);
    },[]);

    return (
        <div className={"App"}>
            {alias === "activity" &&
                <Activity data={data.data}/>
            }
            {
                alias === "diagram" &&
                <Diagram data={data.data}/>
            }
            {
                alias === "chart" &&
                <Chart data={data.data}/>
            }
            {
                alias === "leaders" &&
                <Leaders data={data.data}/>
            }
            {
                alias === "vote" &&
                <Vote data={data.data}/>
            }
        </div>
    );
}

export default App;
