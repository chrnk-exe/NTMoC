import React from 'react';
import {Box, Typography} from '@mui/material';


const System = ({data}) => {
	return (
		<Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
			{
				<Box className={'braces'} display={'flex'} alignItems={'center'}>
					{/*<Typography fontSize={data.length * 1.5 + 'rem'}>{'{'}</Typography>*/}
					<Box className={'curly'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
						{data.map((str, index) => <Typography key={index} variant={'body1'}>{str}</Typography>)}
					</Box>
				</Box>
			}
		</Box>
	);
};

export default System;