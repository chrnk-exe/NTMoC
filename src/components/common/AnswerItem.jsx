import React from 'react';
import {Box, Collapse} from '@mui/material';
import Matrix from '../steps/Matrix';
import System from '../steps/System';
import Latex from 'react-latex';


const AnswerItem = ({data, label, type, showDetails, index}) => {
    console.log(data, type);

    return (
        <Box width={1} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} pt={1}>
            <Box mr={3} fontSize={26}>
                <Box
                    width={50} height={50} border={'1px dashed green'} borderRadius={'50%'}
                    display={"flex"} justifyContent={"center"} alignItems={"center"}
                >
                    {index}
                </Box>
            </Box>
            <Box
                border={'1px dashed green'} borderRadius={5} width={1} py={1.5} px={1}
                overflow={'auto'}
            >
                <Collapse in={showDetails}>
                    <Box py={'5px'} px={2} pb={1.5} fontSize={16} color={'#555'}>{label}</Box>
                </Collapse>
                {
                    type === 'string' ? (
                            <Box px={2}>
                                <Latex>{`$$${data}$$`}</Latex>
                            </Box>
                        ) :
                        type === 'matrix' ? <Matrix data={data}/> :
                            type === 'array' ? <Box px={3}>{data.join(' ')}</Box> :
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
