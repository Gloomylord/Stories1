import React, {useMemo} from "react";
import "../../styles/Column.css";

function Column({res, value}) {
    const src = useMemo(()=>{
        const arrDark = ['min-dark', 'mid-dark','max-dark', 'extra-dark'];
        const arrLight = ['min-light', 'mid-light', 'max-light', 'extra-light'];
        if (value === 0) return [arrDark[0], arrLight[0]];
        if (value !== 0 && value <= res.step)
            return [arrDark[1], arrLight[1]];
        if (value !== 0 && value <= res.step * 2 && value > res.step)
            return [arrDark[2], arrLight[2]];
        if (value !== 0 && value <= res.step * 3 + res.mod && value > res.step * 2)
            return [arrDark[3], arrLight[3]];
    },[]);
    return (
        <div className="activity_column">
            <div className="column">
                <img src={`/assets/images/${src[0]}.svg`}
                     srcSet={`/assets/images/1x/${src[0]}.png 500w,
                         /assets/images/2x/${src[0]}.png 700w,
                         /assets/images/3x/${src[0]}.png 1200w,
                         /assets/images/4x/${src[0]}.png 1700w,`}
                     className="dark"
                     title={`${value} commit`}
                     alt={`${value} commit`}/>
                <img src={`/assets/images/1x/${src[1]}.png`}
                     srcSet={`/assets/images/1x/${src[1]}.png 500w,
                         /assets/images/2x/${src[1]}.png 700w,
                         /assets/images/3x/${src[1]}.png 1200w,
                         /assets/images/4x/${src[1]}.png 1700w,`}
                     title={`${value} commit`}
                     className="light light-column"
                     alt={`${value} commit`}/>
            </div>
        </div>
    )
}

export default Column;
