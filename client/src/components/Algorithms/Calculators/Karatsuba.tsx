import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import {useKaratsubaMutation} from '../../../store/services/api';
import AnswerItem from '../../AnswerItem';
import {isResponse} from '../../../typeguards';


export default function Karatsuba() {
	const [A, setA] = useState<number>(4980);
	const [B, setB] = useState<number>(816);
	const [getAnswer] = useKaratsubaMutation();
	const [answer, setAnswer] = useState<APIResponseItem[]>([]);

	const getAnswerHandler = async () => {
		const result = await getAnswer({ args: [A, B] });
		if(isResponse<APIResponse>(result))setAnswer(result.data);
	};

	return <Box display={'flex'} justifyContent="center" alignItems="center">
		<Box display={'flex'} flexDirection={'column'} pt="10px">
			<Box display={'flex'} justifyContent="center" alignItems="center">
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
				<Button onClick={getAnswerHandler}>Get Answer!</Button>
			</Box>
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
