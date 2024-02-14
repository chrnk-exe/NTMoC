import {Box, Button, Typography} from "@mui/material";
import AnswerBlock from "../common/AnswerBlock";
import React, {Fragment, useEffect, useState} from "react";
import {useBaseSolveMutation} from "../../store/services/api";
import {useParams} from "react-router";
import {Algorithms} from "../../Calculators";
import ErrorPage from "../ErrorPage";

export default function BaseAlgorithm() {
    const [args, setArgs] = useState([]);
    const [getAnswer] = useBaseSolveMutation();
    const [answer, setAnswer] = useState(undefined);
    const [algorithm, setAlgorithm] = useState(null);

    const {type} = useParams();

    useEffect(() => {
        if (type) {
            setAlgorithm(Algorithms.find(alg => alg.type === type))
        }
    }, [type]);

    useEffect(() => {
        setAnswer([]);
        setArgs([]);
    }, [type]);

    const getAnswerHandler = async () => {
        const result = await getAnswer({type, args});
        setAnswer(result.data);
    };

    const CustomDivider = () => <Box my={4} width={1} height={1} borderTop={'2px dashed green'}/>

    return algorithm ? (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pt="10px">
            <Box width={8.5/10} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <CustomDivider/>
                <Typography fontSize={20} sx={{m: 1}}>
                    {algorithm.title}
                </Typography>

                {algorithm.Input && <algorithm.Input updateArgs={setArgs}/>}
                <Button disabled={!algorithm.Input} variant={'contained'} onClick={getAnswerHandler} sx={{m: 1, width: '150px'}}>
                    Решить!
                </Button>

                {
                    answer && (
                        <Fragment>
                            <AnswerBlock answer={answer}/>
                            <CustomDivider/>
                        </Fragment>
                    )
                }
                {
                    algorithm.Theory && (
                        <Fragment>
                            <algorithm.Theory/>
                            <CustomDivider/>
                        </Fragment>
                    )
                }
                {
                    algorithm.Example && (
                        <Fragment>
                            <algorithm.Example/>
                            <CustomDivider/>
                        </Fragment>
                    )
                }
            </Box>
        </Box>
    ) : algorithm === undefined ? (
        <ErrorPage/>
    ) : <Box/>
}