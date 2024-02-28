import React, {useEffect, useState} from 'react';
import {Box, TextField, Button, Typography, Stack} from '@mui/material';
import {CustomTextField} from "../common/CustomTextField";

export default function FastPowInput({updateArgs}) {
    const [A, setA] = useState(123);
    const [B, setB] = useState(12);
    const [m, setM] = useState(213);

    useEffect(() => {
        updateArgs([A, B, m])
    }, [A, B, m]);

    return (
        <Box display={"flex"} mt={2} alignItems={"center"}>
            <CustomTextField value={A} setValue={setA}/>
            <Box position={"relative"} display={"flex"} mr={1}>
                <Box position={"absolute"} top={-53} left={-10} zIndex={1}>
                    <CustomTextField
                        value={B} setValue={setB}
                        fontSize={'1.2em'} lineSpace={0.1} size={0.8}
                    />
                </Box>
            </Box>
            <Stack direction={"row"} alignItems={"center"} spacing={0.1}>
                <Typography fontSize={'1em'} color={'gray'} pl={0.7}>
                    {'('}
                </Typography>
                <Typography fontSize={'0.95em'} fontStyle={'italic'} pl={0.2} pr={0.4} color={'gray'}>
                    {'mod '}
                </Typography>
                <CustomTextField value={m} setValue={setM}/>
                <Typography fontSize={'1em'} color={'gray'} pl={0.2}>
                    {')'}
                </Typography>
            </Stack>
        </Box>
    );
}
