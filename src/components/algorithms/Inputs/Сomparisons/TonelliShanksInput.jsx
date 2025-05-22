import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { CustomTextField } from '../common/CustomTextField';

export default function LinearComparisonInput({ updateArgs }) {
    const [A, setA] = useState(896);
    const [B, setB] = useState(649);
    const [Module, setModule] = useState(1475);

    useEffect(() => {
        updateArgs([A, B, Module]);
    }, [A, B, Module]);

    return (
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <CustomTextField value={A} setValue={setA} />

            <Typography fontSize={'1em'} color={'gray'}>
                {'𝑥'}
            </Typography>
            <Typography fontSize={'1em'} color={'gray'} px={0.5}>
                {'≡'}
            </Typography>

            <CustomTextField value={B} setValue={setB} />

            <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
                <Typography fontSize={'1em'} color={'gray'}>
                    {'( '}
                </Typography>
                <Typography
                    fontSize={'1em'}
                    fontStyle={'italic'}
                    color={'gray'}>
                    {'mod '}
                </Typography>
                <CustomTextField
                    value={Module}
                    setValue={setModule}
                    color={'gray'}
                />

                <Typography fontSize={'1em'} color={'gray'}>
                    {')'}
                </Typography>
            </Stack>
        </Stack>
    );
}
