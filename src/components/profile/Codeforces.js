import React, { useState,useEffect } from 'react'
import "./Codeforces.css"
export default function Codeforces() {
    function secondsToDate(totalSeconds) {
        // Create a new Date object with the given total seconds
        var date = new Date(totalSeconds * 1000); // Multiply by 1000 to convert seconds to milliseconds
      
        // Format the date
        var formattedDate = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
      
        return formattedDate;
    }
    const [show,setShow]= useState(false);
    const [userDetail, setUserDetail]= useState({});
    const userHandle="singhcoder694";
    const toggle= ()=>{
        setShow(!show);
    }
    useEffect(()=>{
        fetch(`https://codeforces.com/api/user.info?handles=${userHandle}`)
        .then((res)=>{
            return res.json();
        }).then((data)=>{
            const arr=data.result[0];
            setUserDetail({
                "Registration Date": secondsToDate(arr.registrationTimeSeconds),
                "Last Online": secondsToDate(arr.lastOnlineTimeSeconds),
                "Contributions": arr.contribution,
                "Organization": arr.organization,
                "Rating": arr.rating,
                "Max Rating":arr.maxRating,
                "Rank": arr.rank,
                "Max Rank": arr.maxRank,
                "Friends": arr.friendOfCount,
                "Profile": userHandle,
        })
        })
    },[])
    return (
        <div>
            <div className="codeforces_heading" onClick={toggle}>
                <p>Codeforces</p>
            </div>
            <div className={show ?'shoW': 'hidE'}>
                <div className="codeforces_data">
                    <div className="codeforces_col">
                        <div className="codeforces_col_data">
                            <p className="col_data_head">Registration Date</p>
                            <p className="col_data_detail">{userDetail["Registration Date"]}</p>
                        </div>
                        <div className="codeforces_col_data">
                            <p className="col_data_head">Last Online</p>
                            <p className="col_data_detail">{userDetail["Last Online"]}</p>
                        </div>
                        <div className="codeforces_col_data">
                            <p className="col_data_head">Organization</p>
                            <p className="col_data_detail">{userDetail["Organization"]}</p>
                        </div>
                        <div className="codeforces_col_data">
                            <p className="col_data_head">Contribution</p>
                            <p className="col_data_detail">{userDetail["Contributions"]}</p>
                        </div>
                        <div className="codeforces_col_data">
                            <p className="col_data_head">Rating</p>
                            <p className="col_data_detail">{userDetail["Rating"]}</p>
                        </div>
                        <div className="codeforces_col_data">
                            <p className="col_data_head">Max Rating</p>
                            <p className="col_data_detail">{userDetail["Max Rating"]}</p>
                        </div>
                        <div className="codeforces_col_data">
                            <p className="col_data_head">Rank</p>
                            <p className="col_data_detail">{userDetail["Rank"]}</p>
                        </div>
                        <div className="codeforces_col_data">
                            <p className="col_data_head">Max Rank</p>
                            <p className="col_data_detail">{userDetail["Max Rank"]}</p>
                        </div>
                        <div className="codeforces_col_data">
                            <p className="col_data_head">Total Friends</p>
                            <p className="col_data_detail">{userDetail["Friends"]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
