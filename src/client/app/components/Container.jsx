import React, {Component} from 'react';
import List from './List.jsx';
import Form from './Form.jsx';

export default class Container extends Component {
 render() {
    return (
      <div>
        <Form onFormSubmit={this.props.updateItems} />
        <List items={this.props.items}/>
      </div>
    );
  }
}

