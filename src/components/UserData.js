import React from "react";
import cn from "classnames";
import "../styles/UserData.css";

function UserData({data, emoji, showText, imgSize}) {
    return (
        <>
            {data &&
            <div className={cn("user-data")}>
                <div className="user-img" style={{width: imgSize + 'px', height: imgSize + "px"}}>
                    <img
                        src={'assets/images/1x/' + data.avatar} alt="avatar"
                        srcSet={`assets/images/1x/${data.avatar} 500w,
                         assets/images/2x/${data.avatar} 900w,
                         assets/images/3x/${data.avatar} 1000w,
                         assets/images/4x/${data.avatar} 1400w,`}
                    />
                    {emoji &&
                    <div className="emoji">
                        {emoji}
                    </div>
                    }
                </div>
                <h6 className="user-name">
                    {data.name.split(' ')[0]}<br/>{data.name.split(' ')[1]}
                </h6>
                {data.valueText && showText &&
                <div className="user-text">
                    {data.valueText}
                </div>
                }
            </div>
            }
        </>
    )
}

export default UserData;
