import React, {useState} from 'react';
import {Box, Button,  TextField, Typography} from '@mui/material';
import {useKaratsubaMutation} from '../../../store/services/api';
import {isResponse} from '../../../typeguards';
import AnswerBlock from '../../common/AnswerBlock';
import KaratsubaExample from '../../Examples/Calculators/KaratsubaExample';
// import {useLocation} from 'react-router';
// import Routes from '../../../Calculators';

export default function Karatsuba() {

	// const {pathname} = useLocation();
	// console.log(Routes.find(item => item.link === pathname));

	const [A, setA] = useState<number>(4980);
	const [B, setB] = useState<number>(816);
	const [getAnswer] = useKaratsubaMutation();
	const [answer, setAnswer] = useState<APIResponseItem[]>([]);

	const getAnswerHandler = async () => {
		const result = await getAnswer({ args: [A, B] });
		if(isResponse<APIResponse>(result))setAnswer(result.data);
	};


	const inputHandler = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		setFunction: (newState: number) => void) => {
		let { value } = e.target;
		value = (+value).toString().slice(0, 5);
		setFunction(+value);
	};

	return <Box display={'flex'} justifyContent="center" alignItems="center">
		<Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pt="10px">

			<Typography variant={'h5'} sx={{m: 1}}>
				{'Алгоритм умножения чисел Карацубы'}
			</Typography>

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
					{'×'}
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
			</Box>
			<Button variant={'contained'} onClick={getAnswerHandler} sx={{m: 1, width: '150px'}}>Решить!</Button>

			<AnswerBlock answer={answer}/>

			<KaratsubaExample/>
		</Box>
	</Box>;
}
