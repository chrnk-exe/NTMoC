import React from 'react';
import { Box } from '@mui/material';
import Matrix from './Matrix';

export const isMatrix = (data: Array<number> | matrix): data is matrix => Array.isArray(data[0]);

const AnswerItem = ({data, label }: APIResponseItem) => {
	return (
		<Box mt='15px'>
			<Box p='5px' pb='10px'>{label}</Box>
			{
				typeof data === 'string' && data
			}
			{
				typeof data !== 'string' && isMatrix(data)
					? <Matrix data={data} />
					: typeof data !== 'string' && <Box>{data.join(' ')}</Box>
			}
		</Box>
	);
};

export default AnswerItem;
