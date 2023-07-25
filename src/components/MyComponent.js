import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "ThanhDuy", age: "21" },
            { id: 2, name: "Dev", age: "31" },
            { id: 3, name: "DuyTran", age: "41" },
        ]
    )



    const handleAddNewUser = (userObj) => {
        setListUsers(
            [userObj, ...listUsers]
        )
    }
    const handleDeleteUser = (userId) => {
        let listUserClone = listUsers
        listUserClone = listUserClone.filter(item => item.id !== userId)
        setListUsers({
            listUserClone
        })
    }

    return (
        <div>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}

            />
            <br></br>
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />



        </div>

    );
}

export default MyComponent;