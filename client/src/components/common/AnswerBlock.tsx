import React, {useState} from 'react';
import {Box, Switch} from '@mui/material';
import AnswerItem from "./AnswerItem";


const AnswerBlock = ({answer}: APIResponse) => {
    const [showDetails, setShowDetails] = useState<boolean>(true);

    return (
        <Box>
            <Box m={0.5}>
                <Switch onChange={e => setShowDetails(e.target.checked)} checked={showDetails} />
            </Box>

            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'flex-start'}
                alignItems={'flex-start'}>
                {answer?.map((item, index) => (
                    <AnswerItem key={index} {...item} showDetails={showDetails}/>
                ))}
            </Box>
        </Box>
    );
};

export default AnswerBlock;
