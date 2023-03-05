import React from 'react';
import { Box } from '@mui/material';
import ExtBinGcd from './Algorithms/Calculators/ExtBinGcd';

const MainPage = () => {
	return (
		<Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
			width: 1,
			height: 1
		}}>
			<Box>
				Тут крутые калькуляторы!
			</Box>
		</Box>
	);
};

export default MainPage;
