import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { CustomTextField } from '../common/CustomTextField';
import { useSearchParams } from 'react-router-dom';

export default function KaratsubaInput({ updateArgs }) {
    const [A, setA] = useState(23);
    const [B, setB] = useState(47);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        updateArgs([A, B]);
    }, [A, B]);

    useEffect(() => {
        const args = searchParams.get('args')?.split(',');
        if (args?.length > 1) {
            setA(args[0]);
            setB(args[1]);
        }
    }, [searchParams]);

    return (
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <CustomTextField value={A} setValue={setA} />
            {/*<Typography fontSize={'1.5em'} sx={{mx: 1}}>*/}
            {/*    {'×'}*/}
            {/*</Typography>*/}
            <Typography fontSize={'1em'} color={'gray'} px={0.3}>
                {'*'}
            </Typography>

            <CustomTextField value={B} setValue={setB} />
        </Stack>
    );
}
