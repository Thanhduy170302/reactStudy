import React from "react";
class DisplayInfor extends React.Component {
    render() {
        //destructuring aray
        const { age, name } = this.props;//object
        //props=> Viết tắt của từ properties
        return (
            <div>
                <div>My name's   {name}</div>
                <div>My age's    {age}</div>
            </div>
        )
    }
}

export default DisplayInfor;