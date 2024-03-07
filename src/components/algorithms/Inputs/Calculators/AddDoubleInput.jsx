import React, {useEffect, useState} from 'react';
import {Box, Stack, TextField, Typography} from '@mui/material';
import {CustomTextField} from "../common/CustomTextField";
import Latex from "react-latex";
import {useSearchParams} from "react-router-dom";


export default function AddDoubleInput({updateArgs}) {
    const [A, setA] = useState(4980);
    const [B, setB] = useState(816);
    const [m, setM] = useState(7);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        updateArgs([A, B, m])
    }, [A, B, m]);

    useEffect(() => {
        const args = searchParams.get('args')?.split(',')
        if (args?.length > 2) {
            setA(args[0]);
            setB(args[1]);
            setM(args[2]);
        }
    }, [searchParams]);

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