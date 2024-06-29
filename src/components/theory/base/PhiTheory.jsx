import React from 'react';
import {Box, Stack} from '@mui/material';
import Latex from "react-latex";


export default function PhiTheory() {
	return (
		<Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
			<Box lineHeight={2}>
				<Latex>{'Найдем значение фи-функции числа $n$. По определению полагаем'}</Latex>
				<Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'} width={"min-content"} my={22}>
					<Latex>{'$\\varphi (1)=1$'}</Latex>
				</Box>
			</Box>
			<Box lineHeight={2}>
				<Latex>{'Факторизуем основание благодаря свойству мультипликативности'}</Latex>
				<Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'}>
					<Latex>{'$p\\perp q \\Rightarrow \\varphi(pq)=\\varphi(p)\\cdot\\varphi(q)$'}</Latex>
				</Box>
				<Latex>{'.'}</Latex>
			</Box>
			<Box lineHeight={2}>
				<Latex>{'Вычисление для примарных (натуральная степень простого числа) модулей'}</Latex>
				<Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'}>
					<Latex>{'$p \\in \\Bbb{P} \\Rightarrow \\varphi(p^n)= p^{n-1}(p-1)$'}</Latex>
				</Box>
				<Latex>{'.'}</Latex>
			</Box>
		</Stack>
	)
}
