import React from "react";
class DisplayInfor extends React.Component {
    render() {
        //destructuring aray
        const { listUsers } = this.props;//object

        //=là: const listUsers=this.props.listUsers

        //props=> Viết tắt của từ properties
        return (
            <div>
                {listUsers.map((user, index) => {

                    return (
                        <div key={user.id}>

                            <div>My name's {user.name}</div>
                            <div>My age's  {user.age} </div>
                            <hr />
                        </div>
                    )
                })}
                {/* <div>My name's  {name}</div>
                <div>My age's   {age}</div>
                <hr/>
                <div>My name's  {name}</div>
                <div>My age's   {age}</div>
                <hr/>
                <div>My name's  {name}</div>
                <div>My age's   {age}</div> */}
            </div>
        )
    }
}

export default DisplayInfor;