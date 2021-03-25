import React from "react";
import cn from "classnames";
import "../../styles/Diagram.css";
import CustomPie from "./Pie";

function Diagram({data}) {
    return (
        <div className="diagram-page">
            <h1 className="title diagram_title">{data.title}</h1>
            <h3 className="subtitle diagram_subtitle">{data.subtitle}</h3>
            <div className="diagram_block">
                <div className="diagram-container">
                    <div className='diagram-ratio'>
                        <div className="diagram-ratio-inner">
                            <CustomPie width={500} height={500} data={data} animate={false}/>
                            <svg className="diagram" viewBox="0 0 500 500" width="100%" height="100%">
                                <use xlinkHref="#diagram-link"/>
                            </svg>
                        </div>
                    </div>
                    <div className="diagram_text">
                        <div>
                            {data.totalText}
                        </div>
                        <div>
                            {data.differenceText}
                        </div>
                    </div>
                </div>
                <ul className="diagram-list">
                    {
                        data.categories.map((value, i) =>
                            <li className="diagram-list-item" key={i}>
                                <div className={cn("diagram-list-icon-" + (i + 1), "diagram-list-icon")}/>
                                <div>{value.title}</div>
                                <div className="diagram-list-second-content">
                                    {parseInt(value.differenceText) < 0 ? parseInt(value.differenceText) :
                                        "+" + parseInt(value.differenceText) + ' '}
                                </div>
                                <div className="diagram-list-second-content">
                                    {" " + parseInt(value.valueText)}
                                </div>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Diagram;
