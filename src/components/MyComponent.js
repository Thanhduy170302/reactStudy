import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "ThanhDuy", age: "21" },
            { id: 2, name: "Dev", age: "22" },
            { id: 3, name: "DuyTran", age: "23" },
        ]
    }

    render() {
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor 
                listUsers={this.state.listUsers}

                />



            </div>

        );
    }
}

export default MyComponent;