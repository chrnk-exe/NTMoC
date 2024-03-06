import React from 'react';
import {Box, Collapse, Stack} from '@mui/material';
import Matrix from '../steps/Matrix';
import System from '../steps/System';
import Latex from 'react-latex';
import Button from "@mui/material/Button";


const AnswerItem = ({data, label, type, showDetails, index, answer}) => {
    console.log(data, type);

    const color = '#00ab32'
    return (
        <Box
            width={1} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} pt={1}
            mb={answer ? 1 : 0}
        >
            <Box mr={3} fontSize={26}>
                <Button
                    // width={50} height={50}

                    sx={{
                        border: answer ? `1px dashed ${color}` : '1px dashed green',
                        borderRadius: '50%',
                        minWidth: 50,
                        height: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 26,
                    }}
                    // border={answer ? `1px dashed ${color}` : '1px dashed green'}
                    // borderRadius={'50%'}
                    display={"flex"} justifyContent={"center"} alignItems={"center"}
                >
                    {index}
                </Button>
            </Box>

            <Box
                border={answer ? `2px dashed ${color}` : '1px dashed green'}
                borderRadius={5} width={1} py={1.5} px={1}
                overflow={'auto'}
            >
                <Collapse in={showDetails || true}>
                    <Box px={2} pb={1} fontSize={16} color={'#555'} className={'label'}>
                        <Latex>
                            {label}
                        </Latex>
                    </Box>
                </Collapse>
                {
                    type === 'string' ? (
                            <Box px={2}>
                                <Latex>{data}</Latex>
                            </Box>
                        ) :
                        type === 'matrix' ? <Matrix data={data}/> :
                            type === 'array' ?
                                <Stack px={3} spacing={0.5}>
                                    {
                                        data?.map((answer, index) => (
                                            <Box>
                                                <Latex>
                                                    {answer}
                                                </Latex>
                                            </Box>
                                        ))
                                    }
                                </Stack> :
                                type === 'system' ? <System data={data}/> :
                                    type === 'latex' ? (
                                        <Box px={2}>
                                            <Latex>{data}</Latex>
                                        </Box>
                                    ) : null
                }
            </Box>
        </Box>
    );
};

export default AnswerItem;
