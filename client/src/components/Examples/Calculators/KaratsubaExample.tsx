import React from 'react';
import {Box, Table, TableCell, TableRow, Typography, TableBody} from '@mui/material';
import Latex from 'react-latex';

const TableHeaderItems = [
	'a', 'b', 'n', 'A1', 'B1', 'A', 'A0', 'B0', 'B', 'tA', 'tB', 'C', 'Ответ'
];

const TableDataItems = [
	4980, '0816', 2, 49, '08', 392, 80, 16, 1280, 129, 24, 3096, 4063680
];

const KaratsubaExample = () => {
	return (
		<Box
			display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}
			sx={{width: 1, mb: 15}}>
			<Typography variant={'h6'}>
                Пример:
			</Typography>
			<Typography variant={'body2'}>
                Перемножим числа a = 4980 и b = 816 методом Карацубы.
			</Typography>
			<Typography variant={'body2'}>
                Для начала стоит пояснить суть работы алгоритма и обозначения, используемые в нём.
			</Typography>
			<Typography variant={'body2'}>
                Основной формулой (теоремой, на которой строится алгоритм) является приведённое ниже выражение
			</Typography>
			<Typography sx={{alignSelf: 'center', m: 1}} variant={'body1'}>
				<Latex>{'$a \\cdot b = q^{2n} \\cdot A + q^n \\cdot (C - A - B) + B$'}</Latex>
			</Typography>
			<Typography variant={'body2'}>
				<Latex>{'$a, b$'}</Latex> - входные данные, то есть числа, которые надо перемножить, в нашем случае
                это 4980 и 816;
			</Typography>
			<Typography variant={'body2'}>
				<Latex>{'$q$'}</Latex> - основание системы счисления, в которой происходят все вычисления, так как
                мы считаем в десятеричной СС, то <Latex>{'$q = 10$'}</Latex>
			</Typography>
			<Typography variant={'body2'}>
				<Latex>{'$2n$'}</Latex> - длина числа. Если длина числа - нечётная, то мы добавляем незначащие нули,
                то есть 816 это 0816,
			</Typography>
			<Typography variant={'body2'}>
                а n - длина половины числа, то есть в нашем примере <Latex>{'$n = 2$'}</Latex>
			</Typography>
			<Typography variant={'body2'}>
				<Latex>{'$A, B, C$'}</Latex> - три ветви рекурсии, они вычисляются как:
			</Typography>
			<Latex>{'$A = A_1 \\cdot B_1 \\newline B = A_0 \\cdot B_0 \\newline C = (A_1 + A_0)(B_1 + B_0)$'}</Latex>
			<Typography variant={'body2'}>
				<Latex>{'$A_0, B_0$'}</Latex> - младшие половины чисел, а <Latex>{'$A_1, B_1$'}</Latex> - старшие,
                то есть <Latex>{'$A_1 = 49, A_0 = 80, B_1 = 08, B_0 = 16$'}</Latex>
			</Typography>
			<Typography variant={'body2'}>
				<Latex>{'$t_A, t_B$'}</Latex> - удобные обозначения для <Latex>{'$A_1 + A_0, B_1 + B_0$'}</Latex>
			</Typography>
			<Box>
                Для удобства вычислений стоит построить небольшую табличку
				<Table sx={{bgcolor: '#FFFFF1'}}>
					<TableBody>
						<TableRow>{
							TableHeaderItems.map((item, index) => <TableCell key={index}>{item}</TableCell>)
						}</TableRow>
						<TableRow>{
							TableDataItems.map((item, index) => <TableCell key={index}>{item}</TableCell>)
						}</TableRow>
					</TableBody>
				</Table>
			</Box>
			<Box sx={{alignSelf: 'center', my: 1}}>
				<Latex>{'$4063680 = 10^4 \\cdot 392 + 10^2 \\cdot (3096 - 392 - 1280) + 1280$'}</Latex>
			</Box>
		</Box>
	);
};

export default KaratsubaExample;