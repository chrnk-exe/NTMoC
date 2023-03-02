import React from 'react';
import { Box } from '@mui/material';
import Matrix from './Matrix';
import System from './System';


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
