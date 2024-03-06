import React, {useEffect, useState} from 'react';
import {Box, IconButton, Stack, TextField, Typography} from '@mui/material';
import {CustomTextField} from "../common/CustomTextField";
import Button from "@mui/material/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Latex from "react-latex";


export default function ChineseCodeToInt({updateArgs}) {
    const [lines, setLines] = useState([[1, 2]]);

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

    useEffect(() => {
        updateArgs(lines)
    }, [lines]);

    const customSetFunc = (index, pos) => (value) => {
        editLine(index, pos, value)
    }

    return (
        <Box display={"flex"} >
            <Box mt={1.1} width={25} color={'grey'}>
                <Latex>
                    {`$\\left\\{ \\begin{array}{ccc} ${'\\\\'.repeat(lines?.length)} \\end{array} \\right. $`}
                </Latex>
            </Box>
            <Box>
                {
                    lines?.map((line, index) => (
                        <Stack direction={"row"} spacing={0.7} alignItems={"center"}>
                            <IconButton sx={{mr: 1}} onClick={e => removeLine(index)}>
                                <RemoveOutlinedIcon color={"error"}/>
                            </IconButton>

                            <Typography fontSize={'1em'} color={'gray'} px={0.3}>
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
                        </Stack>
                    ))
                }
                {
                    lines?.length < 5 && (
                        <Box display={"flex"} justifyContent={"center"} mt={1.5} alignItems={"center"}>
                            <Button onClick={addLine} startIcon={<AddOutlinedIcon/>}>
                                Добавить строку
                            </Button>
                        </Box>
                    )
                }
            </Box>
        </Box>
    )
};