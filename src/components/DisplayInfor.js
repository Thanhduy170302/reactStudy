import React, { useEffect } from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'
import { useState } from "react";


const DisplayInfor = (props) => {

    const { listUsers } = props;//object

    const [isShowHideListUser,setShowHideListUser]=useState(true);

    const handleShowHideListUser=()=>{
        setShowHideListUser(!isShowHideListUser)
    }

    console.log(">>call me render");
    useEffect(
        ()=>{
            if(listUsers.length===0)
            {
                alert("you deleted all the users")
            }
        console.log(">>>call me useeffect");
    },[listUsers]
    );
        return (
            <div className="display-infor-container">

                <div>
                    <span onClick={()=>handleShowHideListUser()}>
                        {/* Show List User */}
                        {isShowHideListUser===true?"Hide List User":"Show List User"}
                        </span>
                </div>

                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            {
                                isShowHideListUser &&

                                <div key={user.id} className={+user.age > 21 ? "green" : "red"}>
                                    <div >My name's {user.name}</div>
                                    <div>My age's  {user.age} </div>
                                    <hr />
                                </div>
                            }
                            <div>
                                <button onClick={() =>props.handleDeleteUser(user.id)}>Delete</button>
                            </div>
                            <hr />
                        </div>

                    )

                })}

            </div>

        )

    }


export default DisplayInfor;