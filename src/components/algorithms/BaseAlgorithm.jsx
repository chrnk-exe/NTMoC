import {Box, Button, CircularProgress, Typography} from "@mui/material";
import AnswerBlock from "../common/AnswerBlock";
import React, {Fragment, useEffect, useState} from "react";
import {useBaseSolveMutation} from "../../store/services/api";
import {useParams} from "react-router";
import {Algorithms} from "../../Calculators";
import ErrorPage from "../ErrorPage";

export default function BaseAlgorithm() {
    const [args, setArgs] = useState([]);
    const [getAnswer] = useBaseSolveMutation();
    const [answer, setAnswer] = useState([]);
    const [algorithm, setAlgorithm] = useState(null);
    const [errorData, setErrorData] = useState(null);

    const [loading, setLoading] = useState(false);

    const {type} = useParams();

    useEffect(() => {
        if (type) {
            setAlgorithm(Algorithms.find(alg => alg.type === type))
        }
        setArgs([]);
        setAnswer([]);
        setErrorData(null);
    }, [type]);

    const getAnswerHandler = async () => {
        setErrorData(null);
        setAnswer([]);
        setLoading(true);

        const result = await getAnswer({type, args});
        setLoading(false);

        if ('data' in result) {
            setAnswer(result.data);
        } else if ('error' in result && 'data' in result.error) {
            setErrorData(result.error.data);
        }
    };

    const CustomDivider = ({mt}) => <Box mt={mt ? mt : 4} mb={4} width={1} height={1} borderTop={'2px dashed green'}/>

    return algorithm ? (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pt="10px">
            <Box width={9 / 10} display={'flex'} flexDirection={'column'} justifyContent={'center'}
                 alignItems={'center'}>
                <CustomDivider mt={2}/>
                <Typography fontSize={20} sx={{mb: 2}}>
                    {algorithm.title}
                </Typography>

                <Box borderRadius={2} border={'1px solid lightgrey'} py={3} px={4} fontSize={'1.6em'}>
                    {algorithm.Input && <algorithm.Input updateArgs={setArgs}/>}
                </Box>

                <Button
                    disabled={!algorithm.Input || loading} variant={'outlined'} onClick={getAnswerHandler}
                    sx={{my: 3, width: '150px'}}
                >
                    Решить
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
                    loading && (
                        <Box mt={4}>
                            <CircularProgress size={60} sx={{pt: 0}}/>
                        </Box>
                    )
                }
                {
                    <Box mb={3}>
                        {errorData}
                    </Box>
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