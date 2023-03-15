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

	const inputHandler = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		setFunction: (newState: number) => void) => {
		let { value } = e.target;
		value = (+value).toString().slice(0, 5);
		setFunction(+value);
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
				value={FreeVar === 0 ? '' : FreeVar}
				onChange={(e) => inputHandler(e, setFreeVar)}
				error={FreeVar === 0}
				InputProps={{
					inputProps: {max: 99999, style: {textAlign: 'center', fontSize: '1.5em'}}
				}}
				sx={{

					width: (FreeVar.toString().length * 15 + 15).toString() + 'px',
				}}
			/>
			{'≡'}
			<TextField
				type={'number'}
				variant={'standard'}
				value={degreeBasis === 0 ? '' : degreeBasis}
				onChange={(e) => inputHandler(e, setDegreeBases)}
				error={degreeBasis === 0}
				InputProps={{
					inputProps: {max: 99999, style: {textAlign: 'center', fontSize: '1.5em'}}
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
					{' 𝑥'}
				</Typography>
			</Box>
			<Typography fontSize={'1em'}>
				{'( '}
			</Typography>
			<Typography fontSize={'1em'} fontStyle={'italic'}>
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
			<Typography fontSize={'1em'}>
				{')'}
			</Typography>
		</Box>
	);
};

export default DiscreteLogarithmInput;