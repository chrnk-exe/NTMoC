import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import AnswerItem from '../../AnswerItem';
import {useLinearComparisonMutation} from '../../../store/services/api';
import {isResponse} from '../../../typeguards';
import LinearComparisonInput from '../../Inputs/LinearComparisonInput';


export default function LinearComparison() {
	const [A, setA] = useState<number>(896);
	const [B, setB] = useState<number>(649);
	const [M, setM] = useState(1475);
	const [getAnswer] = useLinearComparisonMutation();
	const [answer, setAnswer] = useState<APIResponseItem[]>([]);

	const getAnswerHandler = async () => {
		const result = await getAnswer({ args: [A, B, M] });
		if(isResponse<APIResponse>(result))setAnswer(result.data);
	};

	return <Box display={'flex'} justifyContent="center" alignItems="center">
		<Box display={'flex'} flexDirection={'column'} pt="10px">
			<Box display={'flex'} justifyContent="center" alignItems="center">
				<LinearComparisonInput A={A} B={B} Module={M} setA={setA} setB={setB} setModule={setM}/>
			</Box>
			<Button onClick={getAnswerHandler}>Get Answer!</Button>
			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'flex-start'}
				alignItems={'flex-start'}>
				{answer.map((item, index) => (
					<AnswerItem key={index} {...item} />
				))}
			</Box>
		</Box>
	</Box>;
}
