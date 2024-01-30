import React, {useEffect, useState} from 'react';
import { Box, TextField } from '@mui/material';


export default function DixonInput({updateArgs}) {
	const [A, setA] = useState(4980);

	useEffect(() => {
		updateArgs([A])
	}, [A]);

	return (
		<Box display={'flex'} justifyContent="center" alignItems="center">
			<TextField
				sx={{ bgcolor: '#FFFFF1' }}
				type="number"
				label="A"
				value={A}
				onChange={e => setA(+e.target.value)}
			/>
		</Box>
	);
}
