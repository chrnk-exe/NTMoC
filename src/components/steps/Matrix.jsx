import React from 'react';
import {
    Table,
    TableContainer,
    TableRow,
    TableCell,
} from '@mui/material';

const Matrix = ({data}) => {
    return (
        <TableContainer
            sx={{
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '2px',
                },
                '&::-webkit-scrollbar': {
                    width: '5px',
                    height: '5px',
                },
                // pb: 1
            }}

        >
            <Table>
                {
                    data.map((row, index) =>
                        <TableRow
                            key={index}
                            sx={{
                                "&:last-child td": {
                                    borderBottom: 0,
                                },
                                // '.MuiTableCell-root': {
                                //     "&:last-child th, &:last-child td": {
                                //         borderRight: 0
                                //     },
                                //
                                // }
                            }}
                        >
                            {
                                row.map((item, index) =>
                                    <TableCell
                                        sx={{
                                            minWidth: 40, p: 1,
                                            borderRight: index === row.length - 1 ? '' : '1px solid lightgrey',
                                            fontSize: 16,
                                        }}
                                        key={index} align={"center"}
                                    >
                                        {item}
                                    </TableCell>
                                )
                            }
                        </TableRow>
                    )
                }
            </Table>
        </TableContainer>
    );
};

export default Matrix;
