import React from 'react';
import ReactDom from 'react-dom';

//显示货物名称和价格
var ProductRow = React.createClass({
    render: function () {
        var style = {};
        this.props.stocked ? style.color = 'black' : style.color = 'red';
        return (
            <tr style={style}><td>{this.props.name}</td><td>{this.props.price}</td></tr>
        )
    }
})
export default ProductRow;