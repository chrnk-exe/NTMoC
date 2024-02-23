import React, {useEffect, useState} from 'react';
import {Box, Stack, TextField, Typography} from '@mui/material';
import {CustomTextField} from "../common/CustomTextField";


export default function ExtBinGcdInput({updateArgs}) {
	const [A, setA] = useState(4980);
	const [B, setB] = useState(816);

	useEffect(() => {
		updateArgs([A, B])
	}, [A, B]);

	return (
		<Stack direction={"row"} alignItems={"center"} spacing={0.5}>
			{/*<Typography fontStyle={'italic'} fontSize={'1em'} color={'gray'} >*/}
			{/*	<Latex style={{color: 'gray'}} >*/}
			{/*		$$D$$*/}
			{/*	</Latex>*/}
			{/*</Typography>*/}
			<Typography fontFamily={'Times New Roman'} fontStyle={'italic'} fontSize={'1em'} pr={0.8}>
				D
			</Typography>
			<Typography fontSize={'1em'} color={'gray'} >
				{'('}
			</Typography>
			<CustomTextField value={A} setValue={setA}/>
			<Typography fontSize={'1em'} color={'gray'} pr={0.7}>
				{','}
			</Typography>

			<CustomTextField value={B} setValue={setB}/>
			<Typography fontSize={'1em'} color={'gray'} >
				{')'}
			</Typography>
		</Stack>
	);
}
