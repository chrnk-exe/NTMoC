import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useGcdExMutation } from '../../store/services/test1api';

const ExtBinGcd = () => {
	const [A, setA] = useState<number>(4980);
	const [B, setB] = useState<number>(816);
	const [getAnswer] = useGcdExMutation();

	const getAnswerHandler = async () => {
		const result = await getAnswer({ args: [ A, B ] });
		// const result = await fetch(`http://192.168.54.10:8000/solve_task?${new URLSearchParams({alg_key: 'ext_bin_gcd', args:`${A},${B}`,format:'json'})}`).then(res => res.json());
		console.log(result);
	};

	// args=4980,816
	return (
		<Box display="flex" pt="10px">
			<Box display="flex" justifyContent="center" alignItems="center">
				<TextField
					sx={{ bgcolor: '#FFFFF1' }}
					type="number"
					label="a"
					value={A}
					onChange={e => setA(+e.target.value)}
				/>
				<TextField
					sx={{ bgcolor: '#FFFFF1' }}
					label="b"
					type="number"
					value={B}
					onChange={e => setB(+e.target.value)}
				/>
			</Box>
			<Button onClick={getAnswerHandler}>Get Answer!</Button>
		</Box>
	);
};

export default ExtBinGcd;
