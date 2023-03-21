import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import {
	useP1PollardMutation,
} from '../../../store/services/api';
import {isResponse} from '../../../typeguards';
import AnswerBlock from "../../common/AnswerBlock";


export default function P1Pollard() {
	const [A, setA] = useState<number>(4980);
	const [getAnswer] = useP1PollardMutation();
	const [answer, setAnswer] = useState<APIResponseItem[]>([]);

	const getAnswerHandler = async () => {
		const result = await getAnswer({ args: [A] });
		if(isResponse<APIResponse>(result))setAnswer(result.data);
	};

	return (
		<Box display={'flex'} justifyContent="center" alignItems="center">
			<Box display={'flex'} flexDirection={'column'} pt="10px">
				<Box display={'flex'} justifyContent="center" alignItems="center">
					<TextField
						sx={{ bgcolor: '#FFFFF1' }}
						type="number"
						label="A"
						value={A}
						onChange={e => setA(+e.target.value)}
					/>
					<Button onClick={getAnswerHandler}>Get Answer!</Button>
				</Box>
				<AnswerBlock {...answer}/>
			</Box>
		</Box>
	);
}
