import {Link, Stack} from "@mui/material";
import OutlinedFormula from "../common/OutlinedFormula";
import SimpleTextFormula from "../common/SimpleTextFormula";
import Typography from "@mui/material/Typography";

export default function GcdTheory() {
    return (
        <Stack fontSize={18} alignSelf={"flex-start"} spacing={2}>

            <OutlinedFormula
                description={'Цель: найти наибольший общий делитель (НОД) двух чисел $a$ и $b$'}
                formula={'D(a, b) = \\max\\{d \\in \\mathbb{N} : d \\mid a,\\ d \\mid b\\}'}
            />

            <OutlinedFormula
                description={'Шаг 1. Пока $a \\ne b$, заменяем пару $(a, b)$'}
                formula={'(a, b) \\to (a - b, b) \\text{ если } a > b'}
            />

            <OutlinedFormula
                description={'или'}
                formula={'(a, b) \\to (a, b - a) \\text{ если } b > a'}
            />

            <OutlinedFormula
                description={'Шаг 2. Условие завершения'}
                formula={'a = b \\Rightarrow D(a, b) = a'}
            />

            <OutlinedFormula
                description={'Ключевое свойство'}
                formula={'D(a, b) = D(|a - b|, \\min(a, b))'}
            />

            <Typography>
                Связанные алгоритмы:
                <ul style={{ marginTop: 4 }}>
                    <li><Link href='/ext_gcd'>Расширенный алгоритм Евклида</Link></li>
                    <li><Link href='/bin_gcd'>Бинарный алгоритм Евклида</Link></li>
                </ul>
            </Typography>

        </Stack>
    )
}
