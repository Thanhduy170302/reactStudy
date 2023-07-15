import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  
    render() {
        const myInfor=['ab','c','c']
        return (

            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor name="ThanhDuy" age="21"/>
                <hr/>
                <DisplayInfor name="ThanhDuy" age={26} myInfor={myInfor}/>


            </div>

        );
    }
}

export default MyComponent;