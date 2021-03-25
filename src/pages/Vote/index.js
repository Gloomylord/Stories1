import React from "react";
import '../../styles/Vote.css';
import User from "./User";

function Vote({data}) {
    const offset = data.offset - 1 ? data.offset : 0;

    return (
        <div className="vote-page">
            <h1 className="title vote_title">{data.title}</h1>
            <h3 className="subtitle vote_subtitle">{data.subtitle}</h3>
            <div className="vote vote_horizontal">
                <div>
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset]}/>
                </div>
                <div className="vote_block">
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 1]}/>
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 4]}/>
                </div>

                <div className="vote-center">
                    <button className="vote_button vote_up" disabled={offset === 0}
                            data-action="update"
                            data-params={
                                `{"alias": "vote","data": {"offset": ${offset - 6 >= 0 ? offset - 6 : 0}}`
                            }>
                        <span/>
                    </button>
                    <button className="vote_button vote_down"
                            data-action="update"
                            data-params={
                                `{"alias": "vote","data": {"offset": ${offset + 6}}`
                            }
                            disabled={data.users.length - 1 <= offset + 6}>
                        <span/>
                    </button>
                </div>

                <div className="vote_block">
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 2]}/>
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 5]}/>
                </div>
                <div>
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 3]}/>
                </div>
            </div>

            <div className="vote vote_vertical">
                <div className="vote-side">
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset]}/>
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 3]}/>
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 6]}/>
                </div>

                <div className="vote-center">
                    <button className="vote_button vote_up" disabled={offset === 0}
                            data-action="update"
                            data-params={
                                `{"alias": "vote",data: {"offset": ${offset - 8 >= 0 ? offset - 8 : 0}}`
                            }
                    >
                        <span/>
                    </button>
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 1]}/>
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 4]}/>
                    <button className="vote_button vote_down"
                            data-action="update"
                            data-params={`{alias: 'vote',data: {offset: ${offset + 8}}`}
                            disabled={data.users.length - 1 - offset <= 8}>
                        <span/>
                    </button>
                </div>

                <div className="vote-side">
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 2]}/>
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 5]}/>
                    <User selectedUserId={data.selectedUserId} emoji={data.emoji}
                          user={data.users[offset + 7]}/>
                </div>
            </div>
        </div>
    )
}

export default Vote;
