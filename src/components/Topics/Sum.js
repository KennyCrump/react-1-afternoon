import React, {Component} from 'react';

class Sum extends Component{
    constructor(props){
        super(props)

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNum1 = (e) => {
        this.setState({
            number1: parseInt(e.target.value, 10)
        })
    }
    updateNum2 = (e) => {
        this.setState({
            number2: parseInt(e.target.value, 10)
        })
    }
    clickConfirm = () => {
        this.setState({
            sum: this.state.number1 + this.state.number2
        })
    }


    render(){
        console.log(this.state)
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={this.updateNum1} type="text"/>
                <input className="inputLine" onChange={this.updateNum2} type="text"/>
                <button onClick={this.clickConfirm}className="confirmationButton">Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}
export default Sum;