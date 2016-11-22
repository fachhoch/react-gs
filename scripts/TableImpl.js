import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(70);

export default class DefaultPaginationTable extends React.Component {
  constructor(props) {
    super(props);
  }
  renderShowsTotal(start, to, total) {
    return (
      <p style={ { color: 'blue' } }>
        From { start } to { to }, totals is { total }&nbsp;&nbsp;(its a customize text)
      </p>
    );
 }
  render() {

		const options = {
			 page: 1,
			 sizePerPageList: [ {
		        text: '5', value: 5
		      }, {
		        text: '10', value: 10
		      }, {
		        text: '20', value: 20
		      } ]
		      ,sizePerPage: 5,  // which size per page you want to locate as default
		      pageStartIndex: 0, // where to start counting the pages
		      paginationSize: 10,  // the pagination bar size.
		      prePage: 'Prev', // Previous page button text
		      nextPage: 'Next', // Next page button text
		      firstPage: 'First', // First page button text
		      lastPage: 'Last', // Last page button text
		      paginationShowsTotal: this.renderShowsTotal

		};
    return (
      <div>
        <BootstrapTable data={ products } pagination={ true } options={options} >
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}