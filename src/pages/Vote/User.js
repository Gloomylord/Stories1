import React from "react";
import cn from "classnames";
import UserData from "../../components/UserData";

function User({user, selectedUserId, emoji}) {
    return (
        <>
            {user &&
            <div className={cn("user-container", {
                "selected-user": user && selectedUserId === user.id
            })}
                 data-action="update"
                 data-params={`{"alias": "leaders","data": {selectedUserId: ${user.id}}`}
            >

                <UserData data={user} emoji={selectedUserId === user.id && emoji}/>
            </div>
            }
        </>
    );
}

export default User;