import React from "react";
import './DisplayInfor.scss'
class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        //destructuring aray
        const { listUsers } = this.props;//object
        //=là: const listUsers=this.props.listUsers

        //props=> Viết tắt của từ properties

        return (
            <div className="display-infor-container">

                <div>
                    <span onClick={() => { this.handleShowHide() }}>

                        {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {listUsers.map((user, index) => {
                    return (
                        <div>
                            {
                                this.state.isShowListUser &&
                                <div key={user.id} className={+user.age > 21 ? "green" : "red"}>
                                    <div >My name's {user.name}</div>
                                    <div>My age's  {user.age} </div>
                                    <hr />
                                </div>
                            }
                        </div>
                    )

                })}

            </div>

        )

    }
}

export default DisplayInfor;