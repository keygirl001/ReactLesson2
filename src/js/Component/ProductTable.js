import React from 'react';
import ReactDom from 'react-dom';
import ProductCategory from './ProductCategory.js';
import ProductRow from './ProductRow.js';
//显示货物部分的总组件
var ProductTable = React.createClass({
    render: function () {
        var products = this.props.products;
        var row = [];
        var lastCategory = '';
        var onlyShowStocked = this.props.onlyShowStocked;
        var filterText = this.props.filterText;
        products.forEach(function (ele, index) {
            if(lastCategory != ele.category) {
                lastCategory = ele.category;
                row.push(<ProductCategory key={index} category={ele.category}></ProductCategory>);
            }
            if( !(onlyShowStocked && !ele.stocked) ) {
                if(ele.name.indexOf(filterText) !== -1) {
                    row.push(<ProductRow key={index + 100} name={ele.name} price={ele.price} stocked={ele.stocked}></ProductRow>);                                    
                }
            }
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>name</th><th>price</th>                        
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        )
    }
});
export default ProductTable;