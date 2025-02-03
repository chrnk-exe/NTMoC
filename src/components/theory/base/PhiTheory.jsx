import React from 'react';
import {Stack} from '@mui/material';
import OutlinedFormula from "../common/OutlinedFormula";


export default function PhiTheory() {
	return (
		<Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
			<OutlinedFormula
				description={'Найдем значение фи-функции числа $n$. По определению полагаем'}
				formula={'\\varphi (1)=1'}
			/>
			<OutlinedFormula
				description={'Факторизуем основание благодаря свойству мультипликативности'}
				formula={'p\\perp q \\Rightarrow \\varphi(pq)=\\varphi(p)\\cdot\\varphi(q)'}
			/>
			<OutlinedFormula
				description={'Вычисление для примарных (натуральная степень простого числа) модулей'}
				formula={'p \\in \\Bbb{P} \\Rightarrow \\varphi(p^n)= p^{n-1}(p-1)'}
			/>
		</Stack>
	)
}
