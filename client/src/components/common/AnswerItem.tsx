import React from 'react';
import {Box, Collapse} from '@mui/material';
import Matrix from '../Matrix';
import System from '../System';
import Latex from "react-latex";


const AnswerItem = ({data, label, type, showDetails}: APIResponseItem) => {
    return (
        <Box mt='15px'>
            <Collapse in={!!showDetails}>
                <Box p='5px' pb='10px'><Latex>{`$$${label}$$`}</Latex></Box>
            </Collapse>
            {
                type === 'string' ? <Latex>{`$$${data}$$`}</Latex> :
                    type === 'matrix' ? <Matrix data={data}/> :
                        type === 'array' ? <Box>{data.join(' ')}</Box> :
                            type === 'system' ? <System data={data}/> :
                                type === 'latex' ? <Latex>{data}</Latex> : null
            }
        </Box>
    );
};

export default AnswerItem;
