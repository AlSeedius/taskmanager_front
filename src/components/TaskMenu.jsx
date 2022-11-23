import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {bindTrigger, bindMenu} from 'material-ui-popup-state';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import {usePopupState} from "material-ui-popup-state/hooks";

const TaskMenu = () => {
    const popupState = usePopupState({variant: 'popover', popupId: 'demoMenu'})
    return (
        <div>
            <IconButton {...bindTrigger(popupState)}>
                <MoreVertIcon/>
            </IconButton>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                <MenuItem onClick={popupState.close}>My account</MenuItem>
                <MenuItem onClick={popupState.close}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
export default TaskMenu