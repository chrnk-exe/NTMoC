import React from 'react';
import {
	Table,
	TableContainer,
	Paper,
	TableRow,
	TableCell,
} from '@mui/material';

const Matrix = ({ data }) => {
	return (
		<TableContainer sx={{ width: 'min-content' }} component={Paper}>
			<Table>
				{data.map((row, index) => (
					<TableRow key={index}>
						{row.map((item, index) => (
							<TableCell
								sx={{
									minWidth: 40,
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
