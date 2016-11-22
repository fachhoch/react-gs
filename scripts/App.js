import React, {Component} from 'react';
import DefaultPaginationTable from './TableImpl'
export default class App extends Component {

constructor(props) {
    super(props);
    
  }

  componentDidMount(){
  }
  

  render() {
    return (
      <div>
        <h1>Test</h1>
			 <DefaultPaginationTable />

	  </div>    
    );
  }
}
