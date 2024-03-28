import React, {useEffect, useState} from 'react';
import {Box, TextField, Button, Typography, Stack} from '@mui/material';
import {CustomTextField} from "../common/CustomTextField";
import Latex from "react-latex";
import {useSearchParams} from "react-router-dom";

export default function FastPowInput({updateArgs}) {
    const [A, setA] = useState(123);
    const [B, setB] = useState(12);
    const [m, setM] = useState(213);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        updateArgs([B, A, m])
    }, [B, A, m]);

    useEffect(() => {
        const args = searchParams.get('args')?.split(',')
        if (args?.length > 2) {
            setA(args[0]);
            setB(args[1]);
            setM(args[2]);
        }
    }, [searchParams]);

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
                    <Latex>
                        {'$mod $'}
                    </Latex>
                </Typography>
                <CustomTextField value={m} setValue={setM}/>
                <Typography fontSize={'1em'} color={'gray'} pl={0.2}>
                    {')'}
                </Typography>
            </Stack>
        </Box>
    );
}
