import {Box, Button, Typography} from "@mui/material";
import AnswerBlock from "../common/AnswerBlock";
import React, {useEffect, useState} from "react";
import {isResponse} from "../../typeguards";
import {useBaseSolveMutation} from "../../store/services/api";

export default function BaseAlgorithm({title, type, Input, Theory, Example}) {
    const [args, setArgs] = useState([]);
    const [getAnswer] = useBaseSolveMutation();
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        setAnswer([]);
        setArgs([]);
    }, [type]);

    const getAnswerHandler = async () => {
        const result = await getAnswer({type, args});
        if (isResponse(result)) setAnswer(result.data);
    };

    return (
        <Box display={'flex'} justifyContent="center" alignItems="center">
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pt="10px">
                <Typography fontSize={20} sx={{m: 1}}>
                    {title}
                </Typography>

                {Input && <Input updateArgs={setArgs}/>}
                {Theory && <Theory/>}
                {Example && <Example/>}

                <Button variant={'contained'} onClick={getAnswerHandler} sx={{m: 1, width: '150px'}}>Решить!</Button>
                <AnswerBlock answer={answer}/>
            </Box>
        </Box>
    )
}