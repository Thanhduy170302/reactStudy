import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'
import { useState } from "react";
// class DisplayInfor extends React.Component {
//     render() {
//         console.log(">>> call me render");
//         //destructuring aray
//         const { listUsers } = this.props;//object
//         //=là: const listUsers=this.props.listUsers

//         //props=> Viết tắt của từ properties

//         return (
//             <div className="display-infor-container">

//                 {listUsers.map((user, index) => {
//                     return (
//                         <div>
//                             {
//                                 true &&

//                                 <div key={user.id} className={+user.age > 21 ? "green" : "red"}>
//                                     <div >My name's {user.name}</div>
//                                     <div>My age's  {user.age} </div>
//                                     <hr />
//                                 </div>
//                             }
//                             <div>
//                                 <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                             </div>
//                             <hr />
//                         </div>

//                     )

//                 })}

//             </div>

//         )

//     }
// }

const DisplayInfor = (props) => {

    const { listUsers } = props;//object

    const [isShowHideListUser,setShowHideListUser]=useState(true);

    const handleShowHideListUser=()=>{
        setShowHideListUser(!isShowHideListUser)
    }

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
                        <div>
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