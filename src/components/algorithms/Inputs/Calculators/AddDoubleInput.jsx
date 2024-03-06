import React, {useEffect, useState} from 'react';
import {Box, Stack, TextField, Typography} from '@mui/material';
import {CustomTextField} from "../common/CustomTextField";
import Latex from "react-latex";


export default function AddDoubleInput({updateArgs}) {
    const [A, setA] = useState(4980);
    const [B, setB] = useState(816);
    const [m, setM] = useState(7);

    useEffect(() => {
        updateArgs([A, B, m])
    }, [A, B, m]);

    return (
        <Stack direction={"row"} spacing={0.7} alignItems={"center"}>
            <CustomTextField value={A} setValue={setA}/>
            <Typography fontSize={'1em'} color={'gray'} px={0.3}>
                {'*'}
            </Typography>
            <CustomTextField value={B} setValue={setB}/>
            {/*<Typography fontSize={'1em'} color={'gray'} px={0.3}>*/}
            {/*    {'≡'}*/}
            {/*</Typography>*/}
            <Typography fontSize={'1em'} color={'gray'} pl={0.7}>
                {'('}
            </Typography>
            <Typography fontSize={'0.95em'} fontStyle={'italic'} pl={0.2} pr={0.4} color={'gray'}>
                <Latex>
                    {'$mod $'}
                </Latex>
            </Typography>
            <CustomTextField value={m} setValue={setM}/>
            <Typography fontSize={'1em'} color={'gray'} pl={0.2}>
                {')'}
            </Typography>
        </Stack>
    )
};