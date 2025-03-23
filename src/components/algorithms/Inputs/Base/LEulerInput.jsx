import BaseInput from "../../BaseInput";
import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {Box, IconButton, Stack, Typography} from "@mui/material";
import Latex from "react-latex";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {CustomTextField} from "../common/CustomTextField";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";


export default function LEulerInput({updateArgs}) {
    const [module, setModule] = useState(7);

    useEffect(() => {
        updateArgs(module)
    }, [module]);

    return (
        <Stack direction={"row"} spacing={0.7} alignItems={"center"}>
            <Box display={"flex"} alignItems={"center"}>
                <Typography fontSize={'0.95em'} pl={0.2} pr={0.4} color={'gray'} >
                    <Latex>
                        {`$L\\ ($`}
                    </Latex>
                </Typography>
                <CustomTextField value={module} setValue={setModule}/>
                <Typography fontSize={'0.95em'} pl={0.2} pr={0.4} color={'gray'} >
                    <Latex>
                        {`$)$`}
                    </Latex>
                </Typography>
            </Box>
        </Stack>
    );
}
