import React, {useMemo} from "react";
import cn from "classnames";
import UserData from "../../components/UserData";
import "../../styles/Leaders.css"

const arrOrder = [3, 4, 2, 5, 1];
const like = "👍";

function Leaders({data}) {

    const selectedUser = useMemo(() => {
        let selectedUser = null;
        data.users.forEach((user, i) => {
            if (data.selectedUserId === user.id && i > 2) {
                selectedUser = user;
                selectedUser.place = i + 1;
            }
        });
        return selectedUser;
    }, [data]);

    return <div className={"leaders-page"}>
        <h1 className="title chart_title">{data.title}</h1>
        <h3 className="subtitle chart_subtitle">{data.subtitle}</h3>
        <div className="leaders">
            {
                data.users.slice(0, 5).map((user, i) => {
                        return <div className={cn("leaders-column", {"leaders-column-top": i === 0})}
                                    key={user.id}
                                    style={{
                                        "--i": i,
                                        order: arrOrder[i],
                                        zIndex: 5 - Math.abs(3 - arrOrder[i])
                                    }}>
                            <UserData data={user} showText={true}
                                      emoji={(i === 0 && data.emoji) || (user.id === data.selectedUserId && like)}/>
                            <div className="user-column">
                                <div className="user-place">
                                    {i + 1}
                                </div>
                                {i === 0 && user.id !== data.selectedUserId && selectedUser
                                &&
                                <div className='selected-user-on-top'>
                                    <UserData data={selectedUser}
                                              showText={true}
                                              emoji={like}/>
                                    <div className="selected-user-place">
                                        {selectedUser.place}
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    }
                )
            }
        </div>
    </div>
}

export default Leaders;
