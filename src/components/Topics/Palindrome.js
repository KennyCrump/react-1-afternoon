import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInput: "",
            palindrome: ""
        }
    }
    updateInput = (e) => {
            this.setState({
                userInput: e.target.value
            })
    }
    clickConfirm = () => {
        let palindrome = true;
        let inputArray = this.state.userInput.toLowerCase().split("").filter((letter) => letter !== " ")
        for(let i = 0; i < inputArray.length; i++){
            if(inputArray[i] !== inputArray[inputArray.length - i - 1]){
                
                palindrome = false;
            }
        }
        this.setState({
            palindrome: palindrome,
            userInput: ""
        })
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input onChange={this.updateInput} className="inputLine" type="text"/>
                <button onClick={this.clickConfirm} className="confirmationButton">Check for Palindrome</button>
                <span className="resultsBox">
                Palindrome: {this.state.palindrome === "" ? null : JSON.stringify(this.state.palindrome)}
                </span>
            </div>
        )
    }
}
export default Palindrome;