import React from 'react';
import { Box } from '@mui/material';
import ExtBinGcd from './Calculators/ExtBinGcd';

const MainPage = () => {
	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<ExtBinGcd />
		</Box>
	);
};

export default MainPage;
