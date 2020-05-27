import React, { Component } from 'react';
import '../App.css';
import { Button, Table } from 'semantic-ui-react';
import Range from '../components/Range';


class RewardTable extends Component {

//State of app
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // var { } = this.state;
    return (

<div>
  <Table className="table" >
    <Table.Header className="t-head">
      <Table.Row>
        <Table.HeaderCell rowSpan='2'>Rewards</Table.HeaderCell>
        <Table.HeaderCell rowSpan='7'>Categories</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body className="t-body">
      <Table.Row>
        <Table.Cell>Reward 1</Table.Cell>
        <Table.Cell>
        	<Range />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Reward 2</Table.Cell>
        <Table.Cell>
        	<Range />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Reward 3</Table.Cell>
        <Table.Cell>
        	<Range />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Reward 4</Table.Cell>
        <Table.Cell>
        	<Range />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Reward 5</Table.Cell>
        <Table.Cell>
        	<Range />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
    <br />

  </Table>
    <Button className="clear" size="sm" type="button">Reset All</Button>

</div>
    );
  }
}

export default RewardTable;