import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { CustomTextField } from '../common/CustomTextField';

export default function LinearComparisonInput({ updateArgs }) {
    const [A, setA] = useState(3);
    const [B, setB] = useState(22);
    const [Module, setModule] = useState(43);

    useEffect(() => {
        updateArgs([A, B, Module]);
    }, [A, B, Module]);

    return (
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Typography fontSize={'1em'} color={'gray'}>
                {'𝑥'}
            </Typography>
            <Box position={'relative'} display={'flex'} mr={1}>
                <Box position={'absolute'} top={-45} left={-10} zIndex={1}>
                    <CustomTextField
                        value={A}
                        setValue={setA}
                        fontSize={'1.2em'}
                        lineSpace={0.1}
                        size={0.8}
                    />
                </Box>
            </Box>

            <Typography fontSize={'1em'} color={'gray'}>
                {'='}
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
