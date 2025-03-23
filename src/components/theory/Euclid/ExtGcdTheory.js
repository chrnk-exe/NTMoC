import SimpleTextFormula from "../common/SimpleTextFormula";
import {Link, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import OutlinedFormula from "../common/OutlinedFormula";

export default function ExtGcdTheory() {
    return (
        <Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>

            <OutlinedFormula
                description={'Цель — найти НОД и коэффициенты $x, y$, такие что'}
                formula={'D(a, b) = a \\cdot x + b \\cdot y'}
            />

            <OutlinedFormula
                description={'Шаг 1. Инициализация'}
                formula={
                    'r_0 = a,\\quad r_1 = b\\\\\n' +
                    's_0 = 1,\\quad s_1 = 0\\\\\n' +
                    't_0 = 0,\\quad t_1 = 1'
                }
            />

            <OutlinedFormula
                description={'Шаг 2. Рекурсия для $i \\ge 2$'}
                formula={
                    'q_i = Q_{r_{i-1}}(r_{i-2})\\\\\n' +
                    'r_i = r_{i-2} - q_i \\cdot r_{i-1}\\\\\n' +
                    's_i = s_{i-2} - q_i \\cdot s_{i-1}\\\\\n' +
                    't_i = t_{i-2} - q_i \\cdot t_{i-1}'
                }
            />

            <OutlinedFormula
                description={'Шаг 3. Условие остановки'}
                formula={'r_i = 0 \\Rightarrow D(a, b) = r_{i-1}'}
            />

            <OutlinedFormula
                description={'Шаг 4. Ответ — линейное разложение'}
                formula={'D(a, b) = a \\cdot s_{i-1} + b \\cdot t_{i-1}'}
            />

            <Typography>
                <SimpleTextFormula>
                    {'В качестве ответа берутся коэффициенты $s_{i-1}$ и $t_{i-1}$, соответствующие последнему ненулевому остатку $r_{i-1}$.'}
                </SimpleTextFormula>
            </Typography>

            <Typography>
                См. также:
                <ul style={{ marginTop: 4 }}>
                    <li><Link href='/gcd'>Классический алгоритм Евклида</Link></li>
                    <li><Link href='/ext_bin_gcd'>Расширенный бинарный алгоритм</Link></li>
                </ul>
            </Typography>

        </Stack>
    )
}

// export default function ExtGcdTheory() {
//     return (
//         <Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
//             <OutlinedFormula
//                 description={'Цель: найти НОД и коэффициенты линейной комбинации'}
//                 formula={'D(a, b) = a \\cdot x + b \\cdot y'}
//             />
//
//             <SimpleTextFormula>Алгоритм работает параллельно с тремя последовательностями: $r_i$, $x_i$, $y_i$</SimpleTextFormula>
//
//             <OutlinedFormula
//                 description={'Шаг 1. Инициализация'}
//                 formula={'r_0 = a,\\quad r_1 = b'}
//                 aftertext={'Начальные коэффициенты:'}
//             />
//             <OutlinedFormula
//                 description={'Коэффициенты при $a$:'}
//                 formula={'x_0 = 1,\\quad x_1 = 0'}
//             />
//             <OutlinedFormula
//                 description={'Коэффициенты при $b$:'}
//                 formula={'y_0 = 0,\\quad y_1 = 1'}
//             />
//
//             <OutlinedFormula
//                 description={'Шаг 2. Рекурсии для $i \\ge 0$'}
//                 formula={'q_i = Q_{r_{i+1}}(r_i)'}
//             />
//             <OutlinedFormula
//                 description={'Остатки:'}
//                 formula={'r_{i+2} = r_i - q_i \\cdot r_{i+1}'}
//             />
//             <OutlinedFormula
//                 description={'Коэффициенты:'}
//                 formula={'x_{i+2} = x_i - q_i \\cdot x_{i+1},\\quad y_{i+2} = y_i - q_i \\cdot y_{i+1}'}
//             />
//
//             <OutlinedFormula
//                 description={'Шаг 3. Условие завершения'}
//                 formula={'r_{N+1} = 0 \\Rightarrow D(a, b) = r_N'}
//                 aftertext={'Ответ: $x = x_N$, $y = y_N$'}
//             />
//
//             <OutlinedFormula
//                 description={'Проверка линейного равенства'}
//                 formula={'a \\cdot x_N + b \\cdot y_N = D(a, b)'}
//             />
//
//             <Typography>
//                 Также смотри:
//                 <ul style={{ marginTop: 4 }}>
//                     <li><Link href='/gcd'>Классический алгоритм Евклида</Link></li>
//                     <li><Link href='/ext_bin_gcd'>Расширенный бинарный алгоритм</Link></li>
//                 </ul>
//             </Typography>
//         </Stack>
//     )
// }
