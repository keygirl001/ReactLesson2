import React from 'react';
import ReactDom from 'react-dom';


var SearchBar = React.createClass({
    onHandleChangeText: function () {
        var filterText = this.refs.inp.value;
        this.props.changeText(filterText);
    },
    render: function () {
        return (
            <div>
                <input type="text" ref='inp' onChange={this.onHandleChangeText}/>
                <input type="checkbox" onClick={this.props.changeFunc}/>
                <span>只显示有货...</span>
            </div>
        )
    }
});
export default SearchBar;