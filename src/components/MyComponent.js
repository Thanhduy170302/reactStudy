import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "ThanhDuy", age: "21" },
            { id: 2, name: "Dev", age: "31" },
            { id: 3, name: "DuyTran", age: "41" },
        ]
    }

    handleAddNewUser = (userObj) => {
       // console.log("Check data from parent: ", userObj);
        this.setState({
            listUsers: [userObj,...this.state.listUsers]
        })
    }
    handleDeleteUser=(userId)=>{
        let listUserClone=[...this.state.listUsers]
        listUserClone=listUserClone.filter(item=>item.id !==userId)
        this.setState({
            listUsers:listUserClone
        })
    }
    render() {
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}

                />
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />



            </div>

        );
    }
}

export default MyComponent;