import {Link, Stack} from "@mui/material";
import OutlinedFormula from "../common/OutlinedFormula";
import SimpleTextFormula from "../common/SimpleTextFormula";
import Typography from "@mui/material/Typography";


export default function ExtBinGcdTheory() {
    return (
        <Stack fontSize={18} alignSelf="flex-start" spacing={2}>

            <SimpleTextFormula>
                {'Пусть $a_i = a \\cdot \\alpha_i + b \\cdot \\beta_i$, $b_i = a \\cdot \\gamma_i + b \\cdot \\delta_i$'}
            </SimpleTextFormula>

            <SimpleTextFormula>
                Начальные значения:
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Инициализация'}
                formula={
                    'a_0 = a = a \\cdot 1 + b \\cdot 0\\\\\n' +
                    'b_0 = b = a \\cdot 0 + b \\cdot 1'
                }
            />

            <SimpleTextFormula>
                {'На каждом шаге $a_i, b_i$ — текущие аргументы алгоритма, т.е. $D(a, b) = D(a_i, b_i)$'}
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Если $a_i$ и $b_i$ нечётные (выполняется вычитание)'}
                formula={
                    'a_{i+1} = a_i - b_i = a(\\alpha_i - \\gamma_i) + b(\\beta_i - \\delta_i)'
                }
            />

            <OutlinedFormula
                description={'Если один из аргументов чётен (выполняется деление)'}
                formula={
                    'a_i = a \\cdot \\alpha_i + b \\cdot \\beta_i'
                }
                aftertext={
                    'Если $\\alpha_i$ и $\\beta_i$ — чётные, выражение делится на 2 напрямую.'
                }
            />

            <SimpleTextFormula>
                {'Если $\\alpha_i$ или $\\beta_i$ нечётны, добавляется одно из вспомогательных тождеств:'}
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Дополнительные равенства'}
                formula={
                    '0 = a \\cdot b + b \\cdot (-a)\\\\\n' +
                    '0 = a \\cdot (-b) + b \\cdot a'
                }
            />

            <OutlinedFormula
                description={'Финальный результат'}
                formula={
                    'D(a, b) = a \\cdot \\alpha + b \\cdot \\beta'
                }
            />

            <Typography>
                См. также:
                <ul style={{ marginTop: 4 }}>
                    <li><Link href='/ext_gcd'>Расширенный алгоритм Евклида (классический)</Link></li>
                    <li><Link href='/bin_gcd'>Бинарный алгоритм Евклида</Link></li>
                </ul>
            </Typography>

        </Stack>
    )
}
