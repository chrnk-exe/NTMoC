import React from 'react';
import {Box, Collapse, Stack} from '@mui/material';
import Matrix from '../steps/Matrix';
import System from '../steps/System';
import Latex from 'react-latex';


const AnswerItem = ({data, label, type, showDetails, index}) => {
    console.log(data, type);

    const color = '#00ab32'
    return (
        <Box
            width={1} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} pt={1}
            mb={index === 0 ? 1 : 0}
        >
            <Box mr={3} fontSize={26}>
                <Box
                    width={50} height={50}
                    border={index === 0 ? `1px dashed ${color}` : '1px dashed green'}
                    borderRadius={'50%'}
                    display={"flex"} justifyContent={"center"} alignItems={"center"}
                >
                    {index}
                </Box>
            </Box>

            <Box
                border={index === 0 ? `2px dashed ${color}` : '1px dashed green'}
                borderRadius={5} width={1} py={1.5} px={1}
                overflow={'auto'}
            >
                <Collapse in={showDetails}>
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
