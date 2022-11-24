import React from 'react';
import Board from 'react-trello'

const BoardPage = () => {
    const data = {
        lanes: [
            {
                id: 'lane1',
                title: 'Planned Tasks',
                label: '2/2',
                cards: [
                    {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
                    {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
                ]
            },
            {
                id: 'lane2',
                title: 'Completed',
                label: '0/0',
                cards: []
            }
        ]
    }
    function onLaneDelete(){
        console.log('deleted')
    }
    return (
        <div>
            <Board
                data={data}
                canAddLanes
                editable
                collapsibleLanes
                onLaneDelete = {onLaneDelete}
            />
        </div>
    );
};

export default BoardPage;