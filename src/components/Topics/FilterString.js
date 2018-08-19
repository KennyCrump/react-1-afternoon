import React, {Component} from 'react';

class FilterString extends Component{
    constructor(props){
        super(props);

        this.state = {
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: "",
            filteredArray: []
        }
    }
    updateInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }
    clickConfirm = () => {
        let filterStr = this.state.userInput;
        this.setState({
            filteredArray: this.state.unfilteredArray.filter((e) => e.toLowerCase().includes(filterStr.toLowerCase())),
            userInput: ""
        })
    }
    
    render(){
        console.log(this.state)
        return(
            <div className="puzzleBox filterStringPB">
                <h4>FilterString</h4>
                <span className="puzzleText">Unfiltered: {this.state.unfilteredArray.join(", ")}</span>
                <input onChange={this.updateInput} value={this.state.userInput} className="inputLine" type="text"/>
                <button onClick={this.clickConfirm} className="confirmationButton">Find</button>
                <span className="resultsBox filterStringRB">Filtered: {this.state.filteredArray.join(", ")}</span>
            </div>
        )
    }
}
export default FilterString;