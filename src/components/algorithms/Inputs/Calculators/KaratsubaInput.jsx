import React, {useEffect, useState} from 'react';
import {Box, Stack, TextField, Typography} from '@mui/material';
import {CustomTextField} from "../common/CustomTextField";

export default function KaratsubaInput({updateArgs}) {
    const [A, setA] = useState(23);
    const [B, setB] = useState(47);

    useEffect(() => {
        updateArgs([A, B])
    }, [A, B]);

    return (
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <CustomTextField value={A} setValue={setA} />
            {/*<Typography fontSize={'1.5em'} sx={{mx: 1}}>*/}
            {/*    {'×'}*/}
            {/*</Typography>*/}
            <Typography fontSize={'1em'} color={'gray'} px={0.3}>
                {'*'}
            </Typography>

            <CustomTextField value={B} setValue={setB} />
        </Stack>
    )
}
