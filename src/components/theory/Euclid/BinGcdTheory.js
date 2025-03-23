import SimpleTextFormula from "../common/SimpleTextFormula";
import {Link, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import OutlinedFormula from "../common/OutlinedFormula";


export default function BinGcdTheory() {
    return (
        <Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>

            <OutlinedFormula
                description={'Цель: найти $D(a, b)$ с использованием только вычитаний и делений на 2'}
                formula={'D(a, b) = \\max\\{d \\in \\mathbb{N} : d \\mid a,\\ d \\mid b\\}'}
            />

            <OutlinedFormula
                description={'Шаг 1. Выделяем общую степень двойки'}
                formula={'a = 2^k \\cdot a,\\quad b = 2^k \\cdot b'}
                    aftertext={'если $a$ и $b$ чётные'}
                    />

                    <OutlinedFormula
                    description={'Шаг 2. Пока $a \\ne b$, применяем'}
                formula={'\\begin{cases}\nD(a/2, b), & a \\text{ чётное} \\\\\nD(a, b/2), & b \\text{ чётное} \\\\\nD((a - b)/2, b), & a > b \\\\\nD((b - a)/2, a), & b > a\n\\end{cases}'}
            />

            <OutlinedFormula
                description={'Шаг 3. Завершение'}
                formula={'a = b \\Rightarrow D(a, b) = 2^k \\cdot a'}
            />

            <OutlinedFormula
                description={'Ключевое свойство'}
                formula={'D(a, b) = D(|a - b|, \\min(a, b)) \\text{ при нечётных } a, b'}
            />

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

// export default function BinGcdTheory() {
//     return (
//         <Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>
//             <OutlinedFormula
//                 description={'Бинарный алгоритм Евклида — это модификация классического, в которой используются вычитания и деление на два.'}
//             />
//
//             <SimpleTextFormula>
//                 Алгоритм опирается на следующие свойства НОД:
//             </SimpleTextFormula>
//
//             <OutlinedFormula
//                 description={'Если оба числа чётные, можно вынести общую степень двойки:'}
//                 formula={'D(a, b) = 2 \\cdot D(a / 2, b / 2)'}
//             />
//
//             <OutlinedFormula
//                 description={'Если одно из чисел чётное, второе нечётное:'}
//                 formula={'D(a, b) = D(a / 2, b) \\quad \\text{или} \\quad D(a, b / 2)'}
//             />
//
//             <OutlinedFormula
//                 description={'Если оба числа нечётные:'}
//                 formula={'D(a, b) = D(|a - b| / 2, \\min(a, b))'}
//             />
//
//             <SimpleTextFormula>
//                 Процесс продолжается до тех пор, пока числа не станут равны. Итоговое значение — это $D(a, b)$, при необходимости домноженное на степень двойки.
//             </SimpleTextFormula>
//
//             <OutlinedFormula
//                 description={'Если изначально $a$ и $b$ были чётными, степень двойки выносится за скобку:'}
//                 formula={'D(a, b) = 2^k \\cdot D(a, b)'}
//                 aftertext={'где $a$ и $b$ — нечётные части чисел после $k$ делений на два.'}
//             />
//
//             <Typography>
//                 Алгоритм эффективен в среде с ограниченными ресурсами, так как использует только простейшие побитовые операции. Подходит для аппаратной реализации.
//             </Typography>
//
//             <Typography>
//                 Связанные алгоритмы:
//                 <ul style={{ marginTop: 4 }}>
//                     <li>
//                         <Link href='/gcd'>Классический алгоритм Евклида</Link> — основан на делении с остатком.
//                     </li>
//                     <li>
//                         <Link href='/ext_bin_gcd'>Расширенный бинарный алгоритм</Link> — вычисляет НОД и коэффициенты линейной комбинации.
//                     </li>
//                 </ul>
//             </Typography>
//
//             <SimpleTextFormula>
//                 Бинарный алгоритм Евклида, как и классический, применяется в криптографии, при вычислении НОД и построении обратных элементов.
//             </SimpleTextFormula>
//         </Stack>
//     )
// }
