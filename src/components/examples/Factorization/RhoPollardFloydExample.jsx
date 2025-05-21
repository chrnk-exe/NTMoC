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

const RhoPollardFloydExample = () => {
    return (
        <Stack fontSize={18} spacing={2}>
            <SimpleTextFormula>
                Рассмотрим пример факторизации числа m = 2747 с помощью
                ро-метода Полларда с модификацией Флойда.
            </SimpleTextFormula>

            <SimpleTextFormula>
                Возьмем f(x) = x² + 3 (mod 2747) и начальные значения x₀ = y₀ =
                5.
            </SimpleTextFormula>

            <TableContainer component={Paper} sx={{ mt: 2, mb: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>i</TableCell>
                            <TableCell>x_i</TableCell>
                            <TableCell>y_i</TableCell>
                            <TableCell>f(y_i)</TableCell>
                            <TableCell>D(m, |x_i - y_i|)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>0</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>28</TableCell>
                            <TableCell>2747</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>28</TableCell>
                            <TableCell>787</TableCell>
                            <TableCell>1297</TableCell>
                            <TableCell>1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>787</TableCell>
                            <TableCell>1048</TableCell>
                            <TableCell>2254</TableCell>
                            <TableCell>1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>1297</TableCell>
                            <TableCell>1316</TableCell>
                            <TableCell>1249</TableCell>
                            <TableCell>1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>4</TableCell>
                            <TableCell>1048</TableCell>
                            <TableCell>2455</TableCell>
                            <TableCell>110</TableCell>
                            <TableCell>67</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <SimpleTextFormula>
                На четвертом шаге мы нашли нетривиальный делитель d₄ = 67.
                Проверяем:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Проверка'}
                formula={'2747 = 67 \\cdot 41'}
            />

            <SimpleTextFormula>
                Таким образом, мы успешно разложили число 2747 на множители: 67
                и 41.
            </SimpleTextFormula>

            <Typography variant="h6" sx={{ mt: 2 }}>
                Важные замечания:
            </Typography>
            <SimpleTextFormula>
                1. В данном примере алгоритм успешно нашел нетривиальный
                делитель на четвертом шаге.
            </SimpleTextFormula>
            <SimpleTextFormula>
                2. Это демонстрирует эффективность алгоритма - он нашел делитель
                за относительно небольшое количество шагов.
            </SimpleTextFormula>
            <SimpleTextFormula>
                3. Важно отметить, что алгоритм нашел именно нетривиальный
                делитель (67), а не само число 2747.
            </SimpleTextFormula>
        </Stack>
    );
};

export default RhoPollardFloydExample;
