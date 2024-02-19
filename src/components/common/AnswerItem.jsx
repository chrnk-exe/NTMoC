import React from 'react';
import {Box, Collapse} from '@mui/material';
import Matrix from '../Matrix';
import System from '../System';
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
                border={'1px dashed green'} borderRadius={5} width={1} py={1.5} px={3}
                overflow={'auto'}
            >
                <Collapse in={showDetails}>
                    <Box py={'5px'} pb={1.5} fontSize={17}>{label}</Box>
                </Collapse>
                {
                    type === 'string' ? <Latex>{`$$${data}$$`}</Latex> :
                        type === 'matrix' ? <Matrix data={data}/> :
                            type === 'array' ? <Box>{data.join(' ')}</Box> :
                                type === 'system' ? <System data={data}/> :
                                    type === 'latex' ? <Latex>{data}</Latex> : null
                }
            </Box>
        </Box>
    );
};

export default AnswerItem;
