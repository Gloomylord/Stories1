import React, {useMemo} from 'react';
import cn from "classnames";
import Column from "./Column";
import "../../styles/Activity.css";

function Activity({data: dataProps}) {
    const {data, subtitle, title} = dataProps;

    const res = useMemo(() => {
        let max = 0;
        Object.values(data).forEach((arr) => {
            arr.forEach((count) => {
                if (count > max)
                    max = count;
            });
        });
        return {step: Math.floor(max / 3), mod:max % 3};
    }, [data]);

    const hourArr = useMemo(() => {
        let arrVertical = [];
        let arrHorizontal = [];
        let days = Object.values(data);
            for (let i = 0; i < 24; i++) {
                arrVertical[i] = [];
                for (let j = 0; j < 7; j++) {
                    arrVertical[i][j] = days[j][i];
                }
            }

            for (let j = 0; j < 7; j++) {
                arrHorizontal[j] = [];
                for (let i = 0; i < 12; i++) {
                    arrHorizontal[j][i] = days[j][2 * i] + days[j][2 * i + 1];
                }
            }
        return [arrVertical, arrHorizontal];
    }, [data]);

    return (
        <div className="activity">
            <h1 className="title activity_title">{title}</h1>
            <h3 className="subtitle activity_subtitle">{subtitle}</h3>
            <div className="ratio">
                <div className="ratio-inner">
                    <div className={cn("activity_column_container", "ratio-content",
                        "activity_column_container_vertical")}>
                        {
                            hourArr[0].map((hour, i) =>
                                <div className="activity_hour_vertical" key={i}>
                                    {
                                        hour.map((value, index) => <Column res={res} value={value} key={index}/>)
                                    }
                                </div>)
                        }
                    </div>
                    <div className={cn("activity_column_container", "ratio-content",
                        "activity_column_container_horizontal")}>
                        {
                            hourArr[1].map((hour, i) =>
                                <div className="activity_hour_horizontal" key={i}>
                                    {
                                        hour.map((value, index) => <Column res={res} value={value} key={index}/>)
                                    }
                                </div>)
                        }
                    </div>
                </div>
            </div>
            <div className="activity_data">
                <div className="activity_data_interval-size activity_data_interval-container">
                    <div className="activity_data_interval activity_data_first-interval">
                        <div className="activity_data_first-interval-left"/>
                        <div className="activity_data_first-interval-center"/>
                        <div className="activity_data_first-interval-right"/>
                    </div>
                    <p className="activity_data_text activity_data_text-vertical">1 час</p>
                    <p className="activity_data_text activity_data_text-horizontal">2 часа</p>
                </div>
                <div className="activity_data_interval">
                    <div className="activity_data_interval activity_data_second-interval"/>
                    <p className="activity_data_text">0</p>
                </div>
                <div className="activity_data_interval">
                    <div className="activity_data_interval activity_data_third-interval"/>
                    <p className="activity_data_text">{`${1} - ${res.step}`}</p>
                </div>
                <div className="activity_data_interval">
                    <div className="activity_data_interval activity_data_fourth-interval"/>
                    <p className="activity_data_text">{`${1 + res.step} - ${2 * res.step}`}</p>
                </div>
                <div className="activity_data_interval">
                    <div className="activity_data_interval activity_data_fifth-interval"/>
                    <p className="activity_data_text">{`${1 + 2 * res.step} - ${3 * res.step + res.mod}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Activity;