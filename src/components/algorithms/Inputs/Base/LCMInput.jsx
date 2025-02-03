import BaseInput from "../../BaseInput";
import React, {useEffect, useState} from 'react';
import {CustomTextField} from "../common/CustomTextField";
import {Box, IconButton, Stack} from "@mui/material";
import Latex from "react-latex";
import {useSearchParams} from "react-router-dom";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Typography from "@mui/material/Typography";


export default function LCMInput({updateArgs}) {
    const [args, setArgs] = useState([2, 3]);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        updateArgs(args)
    }, [args]);

    const setValueToIndex = (arg_index) => {
        return (new_value) => {
            let new_args = [...args];
            new_args[arg_index] = new_value;
            setArgs(new_args);
        }
    }
    const addArg = () => {
        let new_args = [...args];
        new_args.push(1);
        setArgs(new_args);
    }
    const removeArgByIndex = (arg_index) => {
        let new_args = [...args];
        new_args.splice(arg_index, 1);
        setArgs(new_args);
    }

    return (
        <Box display={"flex"} flexDirection={"column"} >
            <Box display={"flex"} alignItems={"center"}>
                <Box mr={2}>
                    <Latex>$M \Big($</Latex>
                </Box>
                {
                    args?.map((arg, index) =>
                        <Box display={"flex"} alignItems={"center"}>
                            {index !== 0 && <Box mx={1.5}>,</Box>}
                            <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <CustomTextField value={arg} setValue={setValueToIndex(index)} />
                                <IconButton onClick={e => removeArgByIndex(index)} sx={{mt: 1}}>
                                    <DeleteOutlineOutlinedIcon color={"error"} fontSize={"small"}/>
                                </IconButton>
                            </Stack>
                        </Box>
                    )
                }
                {
                    args?.length < 5 && (
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <IconButton onClick={addArg} sx={{mx: 1}}>
                                <AddOutlinedIcon color={"success"}/>
                            </IconButton>
                        </Box>
                    )
                }
                <Box ml={2}>
                    <Latex>$\Big)$</Latex>
                </Box>
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
}