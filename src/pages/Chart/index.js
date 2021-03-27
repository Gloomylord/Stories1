import React, {useMemo} from "react";
import cn from "classnames";
import "../../styles/Chart.css";

function Chart({data}) {

    const maxValue = useMemo(() => {
        return data.values.reduce((res, item) => res < item.value ? item.value : res, 0);
    }, [data]);

    const activeIndex = useMemo(() => {
        let index = null;
        data.values.forEach((value, i) => {
            if (value.active)
            index = i;
        });
        return index > 5 ? index : 5;
    },[data]);
    return (
        <div className="chart-page">
            <h1 className="title chart_title">{data.title}</h1>
            <h3 className="subtitle chart_subtitle">{data.subtitle}</h3>
            <div className="chart">
                <div className="chart-container">
                    {
                        data.values.slice(activeIndex - 6, activeIndex + 3).map((column, index) => {
                                return <div key={index} className={cn("chart-column",
                                    {"chart-column-active": column.active}
                                )} style={{"--height": column.value / maxValue}}>
                                    <div className="chart-column-title">{column.value}</div>
                                    <div className="chart-column-item"/>
                                    <div className="chart-column-value">{column.title}</div>
                                </div>
                            }
                        )
                    }
                </div>
            </div>
            <div className="chart-leaders">
                {
                    data.users.slice(0, -1).map((user) =>
                        <div key={user.id} className="chart-user">
                            <div className="chart-user-img">
                                <img src={'assets/images/1x/' + user.avatar} alt="avatar"
                                     srcSet={`assets/images/1x/${user.avatar} 500w,
                         assets/images/2x/${user.avatar} 900w,
                         assets/images/3x/${user.avatar} 1000w,
                         assets/images/4x/${user.avatar} 1400w,`}
                                />
                            </div>
                            <div className="chart-user_description">
                                <h6 className="chart-user-name">{user.name}</h6>
                                <label className="chart-user-text">{user.valueText}</label>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Chart;
