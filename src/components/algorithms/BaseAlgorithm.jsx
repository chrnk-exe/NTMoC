import {Box, Button, ButtonBase, CircularProgress, Collapse, Slide, Stack, Typography} from "@mui/material";
import AnswerBlock from "../common/AnswerBlock";
import React, {Fragment, useEffect, useState} from "react";
import {useBaseSolveMutation} from "../../store/services/api";
import {useParams} from "react-router";
import {Algorithms} from "../../Calculators";
import ErrorPage from "../ErrorPage";
import {useLocation, useSearchParams} from "react-router-dom";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import CircleIcon from '@mui/icons-material/Circle';
import {Helmet} from "react-helmet";
import Copyright from "../Copyright";


export default function BaseAlgorithm() {
    const [args, setArgs] = useState([]);
    const [getAnswer] = useBaseSolveMutation();
    const [answer, setAnswer] = useState(null);
    const [algorithm, setAlgorithm] = useState(null);
    const [errorData, setErrorData] = useState(null);

    const [buttonDisable, setButtonDisable] = useState(false);
    const [loading, setLoading] = useState(false);

    const {type} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        console.log(args)
    }, [args]);

    useEffect(() => {
        const query_args = searchParams.get('args')
        if (type && query_args) {
            setArgs(query_args);
            getAnswerHandler(type, query_args);
        }
    }, [searchParams, type]);

    useEffect(() => {
        setArgs([]);
        setAnswer(null);
        setErrorData(null);
        if (type) {
            setAlgorithm(Algorithms.find(alg => alg.type === type))
        }
    }, [type]);

    const getAnswerHandler = async (type_value, args_value) => {
        setErrorData(null);
        setAnswer(null);
        setLoading(true);

        const result = await getAnswer({type: type_value, args: args_value});
        setLoading(false);

        if ('data' in result) {
            setAnswer(result.data);
        } else if ('error' in result && 'data' in result.error) {
            setErrorData(result.error.data);
        }
    };

    const saveToStorage = (type, args) => {
        let history;
        try {
            history = JSON.parse(sessionStorage.getItem('solve_history'));
        } catch (e) {
            history = []
        }
        if (!history) history = []
        history.push({type, args, timestamp: Date.now()})

        sessionStorage.setItem('solve_history', JSON.stringify(history))
        window.dispatchEvent(new Event('storage'))
    }

    const CustomDivider = ({mt, mb}) => (
        <Box mt={mt !== undefined ? mt : 4} mb={mb !== undefined ? mb : 2} width={1} borderTop={'2px dashed green'}/>
    )

    const Section = ({check, label, children}) => {
        const [show, setShow] = useState(true);

        return check && (
            <Box mt={3} width={1} display={'flex'} flexDirection={'column'} justifyContent={'center'}
                 alignItems={'center'} border={`${show ? 2 : 0}px dashed green`} borderRadius={5}
                 p={show ? 3.5 : 0} sx={{transition: 'all 0.3s ease-in-out'}}
            >
                <Helmet>
                    <title>{algorithm.title} - CryptoMath</title>
                    <meta name="description"
                          content={`${algorithm.title}, онлайн калькулятор с примерами и теорией. 
                          CryptoMath – ваш надежный партнер в мире криптографии и математики!`}
                    />
                    <meta name="keywords"
                          content={`${algorithm.title}, онлайн, калькулятор, математика, алгоритм, 
                          криптография, решение, пример, теория`}
                    />
                </Helmet>

                {/*<CustomDivider mb={0}/>*/}

                <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"} width={1}>
                    <Button
                        fullWidth onClick={e => setShow(!show)}
                        sx={{p: 0, justifyContent: 'flex-start', borderRadius: 5}}
                    >
                        <Box
                            // border={'1px dashed green'} borderTop={0}
                            py={0.7} ml={0} px={2}
                            display={"flex"} alignSelf={"flex-start"}
                            bgcolor={'#58c479'}
                            borderRadius={5}
                            width={1}
                            // sx={{
                            //     background: 'linear-gradient(to bottom, #4caf50, #81c784)', // green gradient
                            // }}
                        >
                            <Box display={"flex"} alignItems={"center"} px={1}>
                                {show ?
                                    <ArrowUpwardOutlinedIcon sx={{color: 'white'}} fontSize={"small"}/> :
                                    <ArrowDownwardOutlinedIcon sx={{color: 'white'}} fontSize={"small"}/>}
                            </Box>

                            <Box color={'white'} fontSize={15} pr={2}>
                                {label}
                            </Box>
                        </Box>
                    </Button>
                </Box>

                <Collapse in={show} sx={{width: 1}}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
                         mt={3}>
                        {children}
                    </Box>
                </Collapse>
                {/*{*/}
                {/*    !show && (*/}
                {/*        <Button onClick={e => setShow(true)}>*/}
                {/*            <Stack direction={"row"} spacing={1}>*/}
                {/*                <CircleIcon sx={{transform: 'scale(0.5)', opacity: 0.8}}/>*/}
                {/*                <CircleIcon sx={{transform: 'scale(0.5)', opacity: 0.8}}/>*/}
                {/*                <CircleIcon sx={{transform: 'scale(0.5)', opacity: 0.8}}/>*/}
                {/*            </Stack>*/}
                {/*        </Button>*/}
                {/*    )*/}
                {/*}*/}
                {/*<Box height={10}/>*/}
            </Box>
        )
    }

    return algorithm ? (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pt="10px">
            <Box width={9 / 10} display={'flex'} flexDirection={'column'} justifyContent={'center'}
                 alignItems={'center'}
            >
                <CustomDivider mt={2} mb={2}/>

                <Box alignSelf={"flex-start"} display={"flex"} gap={2} alignItems={"center"}
                     justifyContent={"space-between"} width={1}>
                    <Typography fontSize={21} sx={{mb: 2}} alignSelf={"flex-start"}>
                        {algorithm.title} ({algorithm.origin})
                        <Box mt={1} mb={1} width={1} borderTop={'1px dashed green'}/>
                    </Typography>
                    <Typography fontSize={16} color={'gray'} alignSelf={"flex-start"}>
                        онлайн калькулятор
                    </Typography>
                </Box>

                <Box borderRadius={2} border={'1px solid lightgrey'} py={3} px={4} fontSize={'1.6em'} key={type}>
                    {algorithm.Input &&
                        <algorithm.Input updateArgs={setArgs} setDisable={setButtonDisable}/>}
                </Box>
                <Button
                    disabled={!algorithm.Input || loading || buttonDisable}
                    variant={'contained'}
                    onClick={e => {
                        saveToStorage(type, args);
                        getAnswerHandler(type, args);
                    }}
                    sx={{mt: 3, width: '200px'}}
                >
                    Решить
                </Button>

                <Section check={loading} label={'Решение'}>
                    <Box mt={4}>
                        <CircularProgress size={60} sx={{pt: 0}}/>
                    </Box>
                </Section>

                <Section check={errorData} label={'Ошибка'}>
                    <Box mb={3}>
                        {errorData}
                    </Box>
                </Section>

                <Section check={answer} label={'Решение'}>
                    <AnswerBlock answer={answer}/>
                </Section>

                <Section check={algorithm.Theory} label={'Теория'}>
                    {algorithm.Theory && <algorithm.Theory/>}
                </Section>

                <Section check={algorithm.Example} label={'Пример'}>
                    {algorithm.Example && <algorithm.Example/>}
                </Section>
                {/*<Box mt={4} mb={3}>*/}
                {/*    <Copyright />*/}
                {/*</Box>*/}
                <Box my={3}/>
            </Box>
        </Box>
    ) : algorithm === undefined ? (
        <ErrorPage/>
    ) : <Box/>
}