import React, {useEffect, useState} from 'react';
import {Stack, Typography} from '@mui/material';
import {CustomTextField} from "../common/CustomTextField";
import Latex from "react-latex";
import {useSearchParams} from "react-router-dom";
import {useParams} from "react-router";


export default function Gcd({updateArgs}) {
	const [A, setA] = useState(0);
	const [B, setB] = useState(0);

	const {type} = useParams();
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		updateArgs([A, B])
	}, [A, B]);

	useEffect(() => {
		const args = searchParams.get('args')?.split(',');
		if (args?.length > 1) {
			setA(args[0]);
			setB(args[1]);
		}
	}, [searchParams]);

	return (
		<Stack direction={"row"} alignItems={"center"} spacing={0.5}>
			<Typography fontSize={'1em'} color={'gray'} pr={0.5}>
				<Latex style={{color: 'gray'}} >
					$D$
				</Latex>
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
