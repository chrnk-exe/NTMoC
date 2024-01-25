import React, {useState} from 'react';
import {Box, TextField, Button} from '@mui/material';
import {
    useToCCMutation,
} from '../../../store/services/api';
import {isResponse} from '../../../typeguards';
import AnswerBlock from '../../common/AnswerBlock';


export default function ToChineseCode() {
    const [A, setA] = useState(4980);
    const [getAnswer] = useToCCMutation();
    const [answer, setAnswer] = useState([]);

    const getAnswerHandler = async () => {
        const result = await getAnswer({args: [A]});
        if (isResponse(result)) setAnswer(result.data);
    };

    return (
        <Box display={'flex'} justifyContent="center" alignItems="center">
            <Box display={'flex'} flexDirection={'column'} pt="10px">
                <Box display={'flex'} justifyContent="center" alignItems="center">
                    <TextField
                        sx={{bgcolor: '#FFFFF1'}}
                        type="number"
                        label="A"
                        value={A}
                        onChange={e => setA(+e.target.value)}
                    />
                    <Button onClick={getAnswerHandler}>Get Answer!</Button>
                </Box>
                <AnswerBlock answer={answer}/>
            </Box>
        </Box>
    );
}
