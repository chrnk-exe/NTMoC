import React from 'react';
import {
    Stack,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const RhoPollardFactExample = () => {
    return (
        <Stack fontSize={18} spacing={2}>
            <SimpleTextFormula>
                Рассмотрим пример факторизации числа $m = 8051$ с помощью
                ро-метода Полларда.
            </SimpleTextFormula>

            <SimpleTextFormula>
                Возьмем $f(x) = x² + 1 \mod 8051$ и начальные значения $x_0 =
                5$.
            </SimpleTextFormula>

            <TableContainer component={Paper} sx={{ mt: 2, mb: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <SimpleTextFormula>$i$</SimpleTextFormula>
                            </TableCell>
                            <TableCell>
                                <SimpleTextFormula>$x_i$</SimpleTextFormula>
                            </TableCell>
                            <TableCell>
                                <SimpleTextFormula>
                                    $D(m, |x_i - x_j|)$
                                </SimpleTextFormula>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>0</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>-</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>26</TableCell>
                            <TableCell>
                                <SimpleTextFormula>
                                    $D(8051, 26-5) = D(8051, 21) = 1$
                                </SimpleTextFormula>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>677</TableCell>
                            <TableCell>
                                <SimpleTextFormula>
                                    $D(8051, 677-5) = D(8051, 672) = 1 \\
                                    D(8051, 677-26) = D(8051, 651) = 1$
                                </SimpleTextFormula>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>7474</TableCell>
                            <TableCell>
                                <SimpleTextFormula>
                                    $D(8051, 7474-5) = D(8051, 7469) = 97 -
                                    Решение \\ D(8051, 7474-26) = D(8051, 7448)
                                    = 1 \\ D(8051, 7474-677) = D(8051, 6797) =
                                    1$
                                </SimpleTextFormula>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <SimpleTextFormula>
                На четвертом шаге мы нашли нетривиальный делитель 97. Проверяем:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Проверка'}
                formula={'8051 = 97 \\cdot 83'}
            />

            <SimpleTextFormula>
                Таким образом, мы успешно разложили число 8051 на множители: 97
                и 83.
            </SimpleTextFormula>

            <Typography variant="h6" sx={{ mt: 2 }}>
                Важное замечание
            </Typography>
            <SimpleTextFormula>
                В отличии от алгоритма с модификацией флойда, в этом алгоритме
                необходимо запоминать предыдущие значения $x_i$ и с каждым шагом
                увеличивается количество вычислений НОД, модификация Флойда же
                лишена этого недостатка
            </SimpleTextFormula>
        </Stack>
    );
};

export default RhoPollardFactExample;
