import React from 'react';

function RewardTable (props) {
	const drop = e => {
		e.preventDefault();
		const card_id = e.dataTransfer.getData('card_id');

		const card = document.getElementById(card_id);
		card.style.display = 'block';

		e.target.appendChild(card);
	}

	const dragOver = e => {
		e.preventDefault();
	}

	return (
		<div
			id={props.id}
			className={props.className}
			onDrop={drop}
			onDragOver={dragOver}
		>
		{props.children}
		</div>
		)
}

export default RewardTable;













// import React from 'react';
// import '../App.css';
// import { Button, Table } from 'semantic-ui-react';
// import Range from '../components/Range';


// function RewardTable (props) {

//     return (
// 	<div >
// 	  <Table className="table" >
// 	    <Table.Header className="t-head">
// 	      <Table.Row>
// 	        <Table.HeaderCell rowSpan='2'>Rewards</Table.HeaderCell>
// 	        <Table.HeaderCell rowSpan='7'>Categories</Table.HeaderCell>
// 	      </Table.Row>
// 	    </Table.Header>
// 	    <Table.Body className="t-body">
// 	      <Table.Row>
// 	        <Table.Cell>Reward 1</Table.Cell>
// 	        <Table.Cell>
// 	        	<Range />
// 	        </Table.Cell>
// 	      </Table.Row>
// 	      <Table.Row>
// 	        <Table.Cell>Reward 2</Table.Cell>
// 	        <Table.Cell>
// 	        	<Range />
// 	        </Table.Cell>
// 	      </Table.Row>
// 	      <Table.Row>
// 	        <Table.Cell>Reward 3</Table.Cell>
// 	        <Table.Cell>
// 	        	<Range />
// 	        </Table.Cell>
// 	      </Table.Row>
// 	      <Table.Row>
// 	        <Table.Cell>Reward 4</Table.Cell>
// 	        <Table.Cell>
// 	        	<Range />
// 	        </Table.Cell>
// 	      </Table.Row>
// 	      <Table.Row>
// 	        <Table.Cell>Reward 5</Table.Cell>
// 	        <Table.Cell>
// 	        	<Range />
// 	        </Table.Cell>
// 	      </Table.Row>
// 	    </Table.Body>
// 	  </Table>
// 	  <Button className="clear" size="small" type="button">Reset All</Button>
// 	</div>
//     );
// }

// export default RewardTable;