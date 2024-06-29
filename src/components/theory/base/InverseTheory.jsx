import React from 'react';
import {Box, Stack} from '@mui/material';
import Latex from "react-latex";


export default function InverseTheory() {
	return (
		<Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
			<Box display={"inline-block"} alignItems={"center"}>
				<Latex>{'Найдем число обратное к числу $a$ по модулю $m$.'}</Latex>
			</Box>
			<Box lineHeight={2}>
				<Latex>{'Обратный элемент в кольце остатков находится из уравнения'}</Latex>
				<Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'} width={"min-content"} my={22}>
					<Latex>{'$1=ax-m\\cdot Q_m(ax)$'}</Latex>
				</Box>
				<Latex>{', где $x$ и $Q_m(ax)$ - неизвестные.'}</Latex>
			</Box>
			<Box lineHeight={2}>
				<Latex>{'Уравнение разрешимо тогда и только тогда, когда'}</Latex>
				<Box display={"inline"} mx={1.5} px={1} py={0.5} border={'1px gray solid'}>
					<Latex>{'$D(a,m)=1$'}</Latex>
				</Box>
				<Latex>{'.'}</Latex>
			</Box>
		</Stack>
	)
}
