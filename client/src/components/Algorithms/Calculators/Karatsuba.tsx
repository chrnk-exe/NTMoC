import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import {useKaratsubaMutation} from '../../../store/services/api';
import {isResponse} from '../../../typeguards';
import AnswerBlock from '../../common/AnswerBlock';


export default function Karatsuba() {
	const [A, setA] = useState<number>(4980);
	const [B, setB] = useState<number>(816);
	const [getAnswer] = useKaratsubaMutation();
	const [answer, setAnswer] = useState<APIResponseItem[]>([]);

	const getAnswerHandler = async () => {
		const result = await getAnswer({ args: [A, B] });
		if(isResponse<APIResponse>(result))setAnswer(result.data);
	};

	console.log(answer);

	const inputHandler = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		setFunction: (newState: number) => void) => {
		let { value } = e.target;
		value = (+value).toString().slice(0, 5);
		setFunction(+value);
	};

	return <Box display={'flex'} justifyContent="center" alignItems="center">
		<Box display={'flex'} flexDirection={'column'} pt="10px">
			<Box display={'flex'} justifyContent="center" alignItems="center">
				<TextField
					type={'number'}
					variant={'standard'}
					value={A === 0 ? '' : A}
					onChange={(e) => inputHandler(e, setA)}
					error={A === 0}
					InputProps={{
						inputProps: {max: 99999, style: {textAlign: 'center', fontSize: '1.5em'}}
					}}
					sx={{

						width: (A.toString().length * 15 + 15).toString() + 'px',
					}}
				/>
				<Typography fontSize={'1.5em'} sx={{mx: 1}}>
					{'+'}
				</Typography>
				<TextField
					type={'number'}
					variant={'standard'}
					value={B === 0 ? '' : B}
					onChange={(e) => inputHandler(e, setB)}
					error={B === 0}
					InputProps={{
						inputProps: {max: 99999, style: {textAlign: 'center', fontSize: '1.5em'}}
					}}
					sx={{

						width: (B.toString().length * 15 + 15).toString() + 'px',
					}}
				/>
				<Button onClick={getAnswerHandler}>Get Answer!</Button>
			</Box>
			<AnswerBlock answer={answer}/>
		</Box>
	</Box>;
}
