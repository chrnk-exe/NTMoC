import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import Latex from "react-latex";
import OutlinedFormula from "../common/OutlinedFormula";
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';
import Link from '@mui/material/Link'


export default function PrimeRootTheory() {
	return (
		<Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
			<OutlinedFormula
				description={'Первообразный корень — это число, которое при возведении в различные степени по модулю простого числа даёт все возможные значения.'}
			/>
			<OutlinedFormula
				description={'Иными словами, если $g$ — первообразный корень по модулю $p$, то $g$ порождает мультипликативную группу вычетов по модулю $p$, которая имеет порядок $p−1$.'}
			/>
            <CentralizedMultiFormula
                header={'Множество первообразных корней задаётся как:'}
                formulas={[
                    'PR(\\Z_m) = \\{ a \\in \\overline{1, m-1} | a \\bot m , P^{\\times}_m(a)=\\phi(m)  \\}'
                ]}
                aftertext={'где $P^{\\times}_m(a)$ - показатель числа $a$'}
            />

            <OutlinedFormula
                description={`Для нахождения первообразного корня стоит воспользоваться его определением, по которому его показатель равен $\\phi(m)$, тем самым нужно найти число, отвечающее заданному показателю.`}
            />
            <OutlinedFormula
                description={`Для нахождения первообразного корня стоит воспользоваться его определением, по которому его показатель равен $\\phi(m)$, тем самым нужно найти число, отвечающее заданному показателю.`}
            />
            <Typography>
                Это уже реализовано в <Link href='/order'> порядке числа </Link> или <Link href='/smart_order'>умном порядке числа </Link>. Данный калькулятор находит все первообразные корни.
            </Typography>
		</Stack>
	)
}
