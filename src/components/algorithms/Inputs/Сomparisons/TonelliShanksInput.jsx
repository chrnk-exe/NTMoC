import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { CustomTextField } from '../common/CustomTextField';

export default function LinearComparisonInput({ updateArgs }) {
    const [B, setB] = useState(10);
    const [Module, setModule] = useState(13);

    useEffect(() => {
        updateArgs([B, Module]);
    }, [B, Module]);

    return (
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Typography fontSize={'1em'} color={'gray'}>
                {'𝑥'}
            </Typography>
            <Box position={'relative'} display={'flex'} mr={1}>
                <Box position={'absolute'} top={-30} left={-10} zIndex={1}>
                    <Typography
                        fontSize={'0.8em'}
                        color={'gray'}
                        fontStyle={'italic'}>
                        {'2'}
                    </Typography>
                </Box>
            </Box>
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
