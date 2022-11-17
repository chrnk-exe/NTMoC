import React from 'react';
import {
	Table,
	TableContainer,
	Paper,
	TableRow,
	TableCell,
} from '@mui/material';

const Matrix = ({ data }: { data: matrix }) => {
	return (
		<TableContainer sx={{ width: 'min-content' }} component={Paper}>
			<Table>
				{data.map((row, index) => (
					<TableRow key={index}>
						{row.map((item, index) => (
							<TableCell
								sx={{
									padding: '5px',
									borderRight: '1px solid lightgrey',
								}}
								key={index}>
								{item}
							</TableCell>
						))}
					</TableRow>
				))}
			</Table>
		</TableContainer>
	);
};

export default Matrix;
