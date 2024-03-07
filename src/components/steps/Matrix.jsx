import React from 'react';
import {
    Table,
    TableContainer,
    TableRow,
    TableCell,
} from '@mui/material';
import Latex from "react-latex";

const Matrix = ({data}) => {
    return (
        <TableContainer>
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
                                        <Latex>
                                            {`$$${item}$$`}
                                        </Latex>
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
