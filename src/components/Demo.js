import React from "react";

class Demo extends React.Component {
    state = {
        school: "ĐHGTVT",
        class: "ĐHGTVT",
        SV: "20H112",
        Number: "01234"
    }

    ThanhDuy1 = (event) => {
        alert("Nguu")
        this.setState({
            SV: "Duy no pro"
        })
    }
    ThanhDuy = (event) => {
        this.setState({
            SV: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnChange=(event)=>{
        this.setState({
            SV:event.target.value
        })
    }
    handleOnSubmit=(event)=>{
        event.preventDefault();
        
    }
    render() {
        return (
            <div>
                Hello word Demo
                My name is: {this.state.SV}
                <button onClick={(event) => { this.ThanhDuy1(event) }}>Nhấn Vào đây</button>
                <button onMouseOver={(event) => { this.ThanhDuy(event) }}>Bấm vào đây</button>

                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event)=>this.handleOnChange(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};
export default Demo;