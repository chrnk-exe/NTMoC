import React, { useEffect, useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { CustomTextField } from '../common/CustomTextField';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Latex from 'react-latex';
import { useSearchParams } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function ChineseCodeToPolycode({ updateArgs, setDisable }) {
    const [lines, setLines] = useState([
        [0, 2],
        [0, 3],
        [3, 5],
        [5, 7], // в виде[остаток, модуль]
    ]);

    const [searchParams, setSearchParams] = useSearchParams();

    // Тут подходит из китайского кода
    useEffect(() => {
        const args = searchParams.get('args')?.split(',');
        if (args) {
            let newLines = [];
            for (let i = 0; i < args.length; i += 2) {
                newLines.push([args[i], args[i + 1]]);
            }
            setLines(newLines);
        }
    }, [searchParams]);

    useEffect(() => {
        updateArgs(lines);
        setDisable(lines?.length < 1);
    }, [lines]);

    const setValueToIndex = (arg_index, isModule) => {
        return (new_value) => {
            let new_lines = [...lines];
            new_lines[arg_index][isModule ? 1 : 0] = new_value;
            setLines(new_lines);
        };
    };

    const removeLine = (index) => {
        let new_lines = [...lines];
        new_lines.splice(index, 1);
        setLines(new_lines);
    };

    const addLine = () => {
        setLines([...lines, [0, 0]]);
    };

    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Box display={'flex'} alignItems={'center'}>
                <Box mr={2}>
                    <Latex>$CC \Big($</Latex>
                </Box>

                {lines.map((line, index) => (
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
                                top={'-14px'}
                                left={'-9px'}>
                                <IconButton onClick={(e) => removeLine(index)}>
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
                                alignItems={'center'}
                                position={'relative'}
                                top={'15px'}>
                                <CustomTextField
                                    value={line[0]}
                                    setValue={setValueToIndex(index)}
                                    size={1}
                                    allowZero
                                />

                                <CustomTextField
                                    value={line[1]}
                                    setValue={setValueToIndex(index, true)}
                                    size={1}
                                    allowZero
                                />
                            </Box>
                        </Box>
                    </Box>
                ))}

                {lines?.length < 5 && (
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <IconButton onClick={addLine} sx={{ mx: 1 }}>
                            <AddOutlinedIcon color={'success'} />
                        </IconButton>
                    </Box>
                )}

                <Box ml={2}>
                    <Latex>$\Big)$</Latex>
                </Box>
            </Box>

            <Stack spacing={0.7} mt={4}>
                <Box display={'flex'} alignItems={'center'}>
                    <AddOutlinedIcon sx={{ color: 'gray' }} />
                    <Typography color={'gray'} fontSize={16}>
                        - нажми чтобы добавить аргумент
                    </Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                    <DeleteOutlineOutlinedIcon
                        sx={{ color: 'gray' }}
                        fontSize={'small'}
                    />
                    <Typography color={'gray'} fontSize={16}>
                        - нажми чтобы удалить аргумент
                    </Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                    <Typography color={'gray'} fontSize={16}>
                        Снизу - значения модулей!
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}
