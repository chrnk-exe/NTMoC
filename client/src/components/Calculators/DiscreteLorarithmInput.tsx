import React, {type FC} from 'react';
import {TextField, Box, Typography} from '@mui/material';

interface Props {
    FreeVar: number,
    setFreeVar: (A: number) => void,
    Module: number,
    setModule: (B: number) => void,
    degreeBasis: number,
    setDegreeBases: (G: number) => void
}
const DiscreteLogarithmInput: FC<Props> = (
	{FreeVar, setFreeVar, Module, setModule, degreeBasis, setDegreeBases}) => {
	console.log('degreeBasis: ', degreeBasis);
	const inputHandler = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		setFunction: (newState: number) => void,
		state: number) => {
		let { value } = e.target;
		console.log(value);
		value = (+value).toString();
		console.log(value);
		console.log(+value);

		setFunction(value.length <= 5 ? +value : +state);
		return 0;
	};

	return (
		<Box sx={{
			position: 'relative',
			border: '1px solid lightgrey',
			p: 2,
			borderRadius: 2,
			fontSize: '1.6em'
		}}
		display={'flex'} alignItems={'center'}>
			<TextField
				type={'number'}
				variant={'standard'}
				value={FreeVar}
				onChange={(e) => inputHandler(e, setFreeVar, FreeVar)}
				InputProps={{
					inputProps: {max: 100000, style: {textAlign: 'center', fontSize: '1.5em'}}
				}}
				sx={{

					width: (FreeVar.toString().length * 15 + 15).toString() + 'px',
				}}
			/>
			{'='}
			<TextField
				type={'number'}
				variant={'standard'}
				value={degreeBasis}
				onChange={(e) => inputHandler(e, setDegreeBases, degreeBasis)}
				InputProps={{
					inputProps: {max: 100000, style: {textAlign: 'center', fontSize: '1.5em'}}
				}}
				sx={{

					width: (degreeBasis.toString().length * 15 + 15).toString() + 'px',
				}}
			/>
			<Box sx={{
				position: 'relative',
				mr: 1
			}}>
				<Typography sx={{
					fontSize: '1em',
					position: 'absolute' as const,
					right: -8,
					top: -39,
				}}>
					{' x'}
				</Typography>
			</Box>
			<Typography fontSize={'1em'}>
				{'(mod '}
			</Typography>
			<TextField
				type={'number'}
				variant={'standard'}
				value={Module}
				onChange={(e) => inputHandler(e, setModule, Module)}
				InputProps={{
					inputProps: {max: 100000, style: {textAlign: 'center', fontSize: '1.5em'}}
				}}
				sx={{

					width: (Module.toString().length * 15 + 15).toString() + 'px',
				}}
			/>
			<Typography fontSize={'1em'}>
				{')'}
			</Typography>
		</Box>
	);
};

export default DiscreteLogarithmInput;