import React from 'react';
import ReactDom from 'react-dom';


//显示货物种类
var ProductCategory = React.createClass({
    render: function () {
        return (
            <tr><th>{this.props.category}</th></tr>
        )
    }
})
export default ProductCategory;