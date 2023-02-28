import React from 'react';
import { Box } from '@mui/material';
import Matrix from './Matrix';
import System from './System';

export const isMatrix = (data: Array<number> | matrix | string | Array<string>): data is matrix => Array.isArray(data[0]);
export const isSystem = (data: Array<string> | Array<number> | matrix | string): data is Array<string> => typeof data[0] === 'string';

const AnswerItem = ({data, label, type}: APIResponseItem) => {
	return (
		<Box mt='15px'>
			<Box p='5px' pb='10px'>{label}</Box>
			{
				type === 'string' ? data :
					type === 'matrix' ? <Matrix data={data}/> :
						type === 'array' ? <Box>{data.join(' ')}</Box> :
							type === 'system' ? <System data={data}/> : null
			}
		</Box>
	);
};

export default AnswerItem;
