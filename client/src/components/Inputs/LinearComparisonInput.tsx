import React, {type FC} from 'react';
import {Box, TextField, Typography} from '@mui/material';

interface Props {
	A: number,
	B: number,
	Module: number,

	setA: (A: number) => void,
	setB: (B: number) => void,
	setModule: (Module: number) => void,

}

const LinearComparisonInput: FC<Props> = ({A,B,Module, setModule,setB, setA}) => {

	const inputHandler = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		setFunction: (newState: number) => void) => {
		let { value } = e.target;
		value = (+value).toString().slice(0, 5);
		setFunction(+value);
	};

	return (
		<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
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
				{'𝑥'}
			</Typography>
			<Typography fontSize={'1.3em'}>
				{' ≡'}
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
			<Typography fontSize={'1.5em'}>
				{'( '}
			</Typography>
			<Typography fontSize={'1.5em'} fontStyle={'italic'}>
				{'mod '}
			</Typography>
			<TextField
				type={'number'}
				variant={'standard'}
				value={Module === 0 ? '' : Module}
				onChange={(e) => inputHandler(e, setModule)}
				error={Module === 0}
				InputProps={{
					inputProps: {max: 99999, style: {textAlign: 'center', fontSize: '1.5em'}}
				}}
				sx={{

					width: (Module.toString().length * 15 + 15).toString() + 'px',
				}}
			/>
			<Typography fontSize={'1.5em'}>
				{')'}
			</Typography>
		</Box>
	);
};

export default LinearComparisonInput;