import React, {useState} from 'react';
import {Box, Switch, FormGroup, FormControlLabel} from '@mui/material';
import AnswerItem from './AnswerItem';

const AnswerBlock = ({answer}) => {
    const [showDetails, setShowDetails] = useState(true);

    if (answer) return (
        <Box width={1}>
            {
                answer.length !== 0 &&
                <Box m={0.5} pb={2}>
                    <FormGroup>
                        <FormControlLabel
                            label='Показать детали'
                            control={
                                <Switch
                                    checked={showDetails}
                                    onChange={e => setShowDetails(e.target.checked)}
                                />
                            }
                        />
                    </FormGroup>
                </Box>
            }

            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                {
                    answer.map((item, index) =>
                        <AnswerItem key={index} index={index} {...item} showDetails={showDetails}/>
                    )
                }
            </Box>
        </Box>
    )
    else return <Box>Calculate...</Box>
};

export default AnswerBlock;
