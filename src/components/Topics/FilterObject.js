import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(props){
        super(props);

        this.state = {
            unfilteredArray: [{name: "Kenny", hobby: "Coding", occupation: "Student"}, 
                                // {id: "Robot 2", status: "Offline", occupation: "Robot"},
                                {name: "Billy Bob", status: "Amputee", desire: "Walk Again"},
                                {id: "Christopher Robin", status: "Schizophrenic", desire: "Find a Friend"}],
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
        let filterProp = this.state.userInput;
        let unfliteredArr = this.state.unfilteredArray
        this.setState({
            filteredArray: unfliteredArr.filter( (obj) => {
                for(let prop in obj){
                    if(prop === filterProp)return true; 
                }
            } )
        })
    }

    displayObject = () => {

    }
    

    render(){
        console.log(this.state)
        return(
        <div className="puzzleBox filterObjectPB">
            <h4>FilterObject</h4>
            <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
            <input onChange={this.updateInput} value={this.state.userInput} className="inputLine" type="text"/>
            <button onClick={this.clickConfirm} className="confirmationButton">Filter</button>
            <span className="resultsBox filterObjectRB">filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            
        </div>
        )
    }
}
export default FilterObject;