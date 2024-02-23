import React from 'react';
import {
    Table,
    TableContainer,
    Paper,
    TableRow,
    TableCell,
} from '@mui/material';

const Matrix = ({data}) => {
    return (
        <TableContainer
            // sx={{width: 'min-content'}}
            // component={Paper}
            sx={{
                py: 1
            }}
        >
            <Table>
                {
                    data.map((row, index) =>
                        <TableRow
                            key={index}
                            sx={{
                                "&:last-child th, &:last-child td": {
                                    borderBottom: 0, borderRight: 0
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
                                            borderRight: '1px solid lightgrey',
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
