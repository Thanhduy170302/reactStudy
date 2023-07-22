import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'
class DisplayInfor extends React.Component {

    constructor(props) {
        console.log(">>>call constructor: 1");
        super(props);
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log(">>> call me component đi mount");
        setTimeout(() => {
            document.title = "Thanh Duy và những người bạn"
        }, 3000);
    }

    componentDidUpdate(prevProps) {
        console.log(">>> call me component did update", this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('you got 5 users')
            }
        }

    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log(">>> call me render");
        //destructuring aray
        const { listUsers } = this.props;//object
        //=là: const listUsers=this.props.listUsers

        //props=> Viết tắt của từ properties

        return (
            <div className="display-infor-container">
                {/* <img src={logo}/> */}

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
                            <div>
                                <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                            </div>
                            <hr />
                        </div>

                    )

                })}

            </div>

        )

    }
}

export default DisplayInfor;