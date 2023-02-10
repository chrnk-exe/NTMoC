import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import {
	useBinGcdMutation,
} from '../../store/services/api';
import AnswerItem from '../AnswerItem';
import {isResponse} from '../../typeguards';


const BinGcd = () => {
	const [A, setA] = useState<number>(4980);
	const [B, setB] = useState<number>(816);
	const [getAnswer] = useBinGcdMutation();
	const [answer, setAnswer] = useState<APIResponseItem[]>([]);

	const getAnswerHandler = async () => {
		const result = await getAnswer({ args: [A, B] });
		if(isResponse<APIResponse>(result))setAnswer(result.data);
	};

	// args=4980,816
	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<Box display="flex" flexDirection="column" pt="10px">
				<Box display="flex" justifyContent="center" alignItems="center">
					<TextField
						sx={{ bgcolor: '#FFFFF1' }}
						type="number"
						label="A"
						value={A}
						onChange={e => setA(+e.target.value)}
					/>
					<TextField
						sx={{ bgcolor: '#FFFFF1' }}
						label="B"
						type="number"
						value={B}
						onChange={e => setB(+e.target.value)}
					/>
					<Button onClick={getAnswerHandler}>Get Answer!</Button>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="flex-start"
					alignItems="flex-start">
					{answer.map((item, index) => (
						<AnswerItem key={index} {...item} />
					))}
				</Box>
			</Box>
		</Box>

	);
};

export default BinGcd;
