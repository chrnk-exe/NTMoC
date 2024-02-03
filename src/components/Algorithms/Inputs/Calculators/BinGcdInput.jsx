import React, {useEffect, useState} from 'react';
import { Box, TextField } from '@mui/material';


export default function BinGcdInput({updateArgs}) {
	const [A, setA] = useState(4980);
	const [B, setB] = useState(816);

	useEffect(() => {
		updateArgs([A, B])
	}, [A, B]);

	return (
		<Box>
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
		</Box>
	);
}
