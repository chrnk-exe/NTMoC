import React, {useEffect, useState} from 'react';
import {Box, IconButton, Stack, TextField, Typography} from '@mui/material';
import {CustomTextField} from "../common/CustomTextField";
import Button from "@mui/material/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Latex from "react-latex";
import {useSearchParams} from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";


export default function ChineseCode({updateArgs, setDisable}) {
    const [lines, setLines] = useState([[3, 5], [13, 31]]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        updateArgs(lines);
        setDisable(lines?.length < 1);
    }, [lines]);

    useEffect(() => {
        const args = searchParams.get('args')?.split(',')
        if (args) {
            let newLines = []
            for (let i = 0; i < args.length; i += 2) {
                newLines.push([args[i], args[i+1]]);
            }
            setLines(newLines);
        }
    }, [searchParams]);

    const addLine = () => {
        setLines([...lines, [1, 2]])
    }
    const editLine = (index, part, new_value) => {
        var temp_lines = [...lines]
        temp_lines[index][part] = new_value
        setLines(temp_lines)
    }
    const removeLine = (index) => {
        let newLines = [...lines]
        newLines.splice(index, 1)
        setLines(newLines)
    }

    const customSetFunc = (index, pos) => (value) => {
        editLine(index, pos, value)
    }

    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} >
                <Box width={25} color={'grey'}>
                    <Latex>
                        {`$\\begin{cases} ${'\\\\'.repeat(lines?.length + 1)} \\end{cases}\\,$`}
                    </Latex>
                </Box>
                <Stack spacing={0.8}>
                    {
                        lines?.map((line, index) => (
                            <Stack direction={"row"} spacing={0.7} alignItems={"center"}>
                                <Typography fontSize={'1em'} color={'gray'} px={0.3} pl={1.5}>
                                    {'𝑥'}
                                </Typography>
                                <Typography fontSize={'1em'} color={'gray'} px={0.3}>
                                    {'≡'}
                                </Typography>
                                <CustomTextField value={line[0]} setValue={customSetFunc(index, 0)}/>
                                <Typography fontSize={'1em'} color={'gray'} pl={0.7}>
                                    {'('}
                                </Typography>
                                <Typography fontSize={'0.95em'} fontStyle={'italic'} pl={0.2} pr={0.4} color={'gray'}>
                                    <Latex>
                                        {'$mod$'}
                                    </Latex>
                                </Typography>
                                <CustomTextField value={line[1]} setValue={customSetFunc(index, 1)}/>
                                <Typography fontSize={'1em'} color={'gray'} pl={0.2}>
                                    {')'}
                                </Typography>
                                <Box>
                                    <IconButton sx={{ml: 1}} onClick={e => removeLine(index)}>
                                        <DeleteOutlineOutlinedIcon sx={{color: '#aaa', transform: 'scale(0.9)'}}/>
                                    </IconButton>
                                </Box>
                            </Stack>
                        ))
                    }
                    {
                        lines?.length < 7 && (
                            <Box display={"flex"} justifyContent={"center"} mt={1.5} alignItems={"center"} pt={1}>
                                <Button onClick={addLine} startIcon={<AddOutlinedIcon/>}>
                                    Добавить строку
                                </Button>
                            </Box>
                        )
                    }
                </Stack>
            </Box>
            <Stack spacing={0.7} mt={2}>
                <Box display={"flex"} alignItems={"center"}>
                    <AddOutlinedIcon sx={{color: 'gray'}}/>
                    <Typography color={"gray"} fontSize={16}>
                        - нажми чтобы добавить аргумент
                    </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                    <DeleteOutlineOutlinedIcon sx={{color: 'gray'}} fontSize={"small"}/>
                    <Typography color={"gray"} fontSize={16}>
                        - нажми чтобы удалить аргумент
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
};