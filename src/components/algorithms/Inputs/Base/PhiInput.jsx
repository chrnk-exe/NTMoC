import BaseInput from "../../BaseInput";
import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import Latex from "react-latex";
import {CustomTextField} from "../common/CustomTextField";


export default function PhiInput({updateArgs}) {
    const [value, setValue] = useState(3);

    useEffect(() => {
        updateArgs(value)
    }, [value]);

    return (
        <Stack direction={"row"} spacing={0.7} alignItems={"center"}>
            <Box display={"flex"} alignItems={"center"}>
                <Typography fontSize={'0.95em'} pl={0.2} pr={0.4} color={'gray'} >
                    <Latex>
                        {`$\\varphi\\ ($`}
                    </Latex>
                </Typography>
                <CustomTextField value={value} setValue={setValue}/>
                <Typography fontSize={'0.95em'} pl={0.2} pr={0.4} color={'gray'} >
                    <Latex>
                        {`$)$`}
                    </Latex>
                </Typography>
            </Box>
        </Stack>
    );
}
