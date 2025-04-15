import React, { useEffect, useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { CustomTextField } from '../common/CustomTextField';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Latex from 'react-latex';
import { useSearchParams } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function ThePowerTowerInput({ updateArgs, setDisable }) {
    const [args, setArgs] = useState([17, 31, 57, 7]);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const args = searchParams.get('args')?.split(',');
        if (args) {
            setArgs(args);
        }
    }, [searchParams]);

    useEffect(() => {
        updateArgs(args);
    }, [args]);

    const removeArg = (index) => {
        setArgs(args.filter((_, i) => i !== index));
    };

    const addArg = () => {
        let new_args = [...args];
        new_args.push(1);
        setArgs(new_args);
    };

    const setValueToIndex = (arg_index) => {
        return (new_value) => {
            let new_args = [...args];
            new_args[arg_index] = new_value;
            setArgs(new_args);
        };
    };

    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Box display={'flex'} alignItems={'center'}>
                <Box mr={2}>
                    <Latex>$R \Big($</Latex>
                </Box>

                {args
                    .filter((_, i) => i !== 0)
                    .map((arg, index) => (
                        <Box display={'flex'} alignItems={'center'} key={index}>
                            {index !== 0 && <Box mx={1.5}>,</Box>}
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                direction={'row'}
                                position={'relative'}>
                                <Box
                                    position={'absolute'}
                                    top={'-25px'}
                                    left={'-9px'}>
                                    <IconButton
                                        onClick={(e) => removeArg(index + 1)}>
                                        <DeleteOutlineOutlinedIcon
                                            sx={{
                                                color: 'gray',
                                                transform: 'scale(0.7)',
                                            }}
                                        />
                                    </IconButton>
                                </Box>
                                <Box
                                    display={'flex'}
                                    flexDirection={'column'}
                                    alignItems={'center'}>
                                    <CustomTextField
                                        value={arg}
                                        setValue={setValueToIndex(index + 1)}
                                        size={1}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    ))}

                {args?.length < 6 && (
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <IconButton onClick={addArg} sx={{ mx: 1 }}>
                            <AddOutlinedIcon color={'success'} />
                        </IconButton>
                    </Box>
                )}

                <Box ml={args?.length === 6 ? 2 : -1}>
                    <Latex>$\Big)$</Latex>
                </Box>
            </Box>

            <Box display={'flex'} alignItems={'center'} mt={2}>
                <Box ml={-1}>
                    <Latex>{'$m= $'}</Latex>
                </Box>
                <Box ml={1}>
                    <CustomTextField
                        value={args[0]}
                        setValue={setValueToIndex(0)}></CustomTextField>
                </Box>
            </Box>

            <Stack spacing={0.7} mt={4}>
                <Box display={'flex'} alignItems={'center'}>
                    <AddOutlinedIcon sx={{ color: 'gray' }} />
                    <Typography color={'gray'} fontSize={16}>
                        - нажми чтобы добавить степень
                    </Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                    <DeleteOutlineOutlinedIcon
                        sx={{ color: 'gray' }}
                        fontSize={'small'}
                    />
                    <Typography color={'gray'} fontSize={16}>
                        - нажми чтобы удалить степень
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}
