import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ModalPage from "./ModalPage";
import {useEffect, useState} from "react";
import AddTaskComponent from "./AddTaskComponent"

export default function FloatingActionButtons({updateData}) {
    const [modalActive, setModalActive] = useState(false)
    useEffect(() => {
        updateData(true)
    }, [modalActive])
    return (
        <div>
            <Box sx={{position: 'fixed', bottom: 16, right: 16}}>
                <Fab color="primary" aria-label="add" onClick={() => setModalActive(true)}>
                    <AddIcon/>
                </Fab>
            </Box>
            <ModalPage active={modalActive} setActive={setModalActive}>
                <AddTaskComponent/>
            </ModalPage>
        </div>
    );
}