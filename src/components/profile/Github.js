import React, { useState,useEffect } from 'react'
import "./Github.css"
export default function Codeforces() {
    const [show,setShow]= useState(false);
    const [data, setData]=useState("");
    const userHandle="singhcoder694";
    const year=2023
    const toggle= ()=>{
        setShow(!show);
    }
    useEffect(()=>{
        fetch("http://localhost:3001/profile/git",
        {
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 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'
          },
          body:JSON.stringify({"userName":userHandle, "year":year})
        })
        .then((res)=>{
          return res.json();
        })
        .then((res)=>{
          setData(res);
        })
    },[])
    return (
        <div>
            <div className="codeforces_heading" onClick={toggle}>
                <p>Github</p>
            </div>
            <div className={show ?'shoW': 'hidE'}>
                <div className="codeforces_data">
                    <div className="codeforces_col">
                        <div className="codeforces_col_data">
                            <p className="col_data_head">Total Contributions</p>
                            <p className="col_data_detail">{data}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
