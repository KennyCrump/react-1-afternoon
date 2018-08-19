import React, {Component} from 'react';

class EvenAndOdd extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }
    updateInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }
    clickConfirm = (e) => {
        let inputArr = this.state.userInput.split(' ')
        console.log(inputArr)
        this.setState({
            evenArray: inputArr.filter((e) => e%2 === 0),
            oddArray: inputArr.filter((e) => e%2 === 1)
        })
    }
    render(){
        console.log(this.state)
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input onChange={this.updateInput} className="inputLine" type="text"/>
                <button onClick={this.clickConfirm} className="confirmationButton">Sort</button>
                <span className="resultsBox">
                Evens: { this.state.evenArray.length > 0 ? this.state.evenArray.join(', ') : null}
                </span>
                <span className="resultsBox">
                Odds: { this.state.oddArray.length > 0 ? this.state.oddArray.join(', '): null}
                </span>
            </div>
        )
    }
}

export default EvenAndOdd;