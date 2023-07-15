import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Tran Thanh Duy",
        address: "HCM",
        age: 21


    }

    handleClick = (event) => {
        console.log("Click me my button");
        console.log("My name is ", this.state.name);

        this.setState({
            name: "NgocAnh",
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleMouseOver(event) {
        console.log(event);
    }
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (

            <div>
                my name is: {this.state.name} and {this.state.age}
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) =>{this.handleOnChangeInput(event)}} />
                    <button>Submit</button>
                </form>
            </div>

        );
    }
}

export default MyComponent;