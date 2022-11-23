import * as React from 'react';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import "./UI/TaskRow.css";
import TaskMenu from "./TaskMenu";

const TaskRow = ({task}) => {

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        alignItems: 'flex-start',
        textAlign: 'start',
        justifyContent: 'flex-start',
        color: theme.palette.text.secondary,
    }));
    return (
        <div className="Row">
            <Item className="Item">
                <div className="text">
                    <h1>{task.text}</h1>
                    <h2>{task.dateStarted}</h2>
                </div>
                <div className="delete_button">
                    <TaskMenu/>
                </div>
            </Item>
        </div>
    );
};

export default TaskRow;