import TaskRow from "./TaskRow";
import {Stack} from "@mui/material";

const TaskList = ({tasks}) => {
    return (
        <Stack>
            {tasks.map(task =>
                <TaskRow task={task} key={task.taskID}/>
            )}
        </Stack>
    );
};

export default TaskList;