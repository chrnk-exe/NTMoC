import React from 'react';
import { Stack, List, ListItem } from '@mui/material';
import SimpleTextFormula from '../common/SimpleTextFormula';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';

const GelfondShanksLogarithmTheory = () => {
    return (
        <Stack fontSize={18} spacing={2}>
            <SimpleTextFormula>
                Алгоритм Гельфонда-Шенкса (Baby-step Giant-step) решает задачу
                дискретного логарифмирования, то есть нахождения $x$ в уравнении{' '}
                {'$a^x \\equiv b \\mod p$'}
            </SimpleTextFormula>
            <SimpleTextFormula>
                Он использует стратегию "разделяй и властвуй", разбивая задачу
                на два этапа: "бэйби шаги" и "гигантские шаги" и ищет значение в
                виде $x = ey - z$
            </SimpleTextFormula>

            <SimpleTextFormula>Идея алгоритма:</SimpleTextFormula>
            <List>
                <ListItem>
                    <SimpleTextFormula>
                        1. Представить $x = e·y - z$, где{' '}
                        {'$e = [\\sqrt p] + 1$'}
                    </SimpleTextFormula>
                </ListItem>
                <ListItem>
                    <SimpleTextFormula>
                        2. Построить два списка: Гигантские шаги (
                        {'$(a^e)^y \\mod p$'}) и Бэйби шаги (
                        {'$b \\cdot a^z \\mod p$'})
                    </SimpleTextFormula>
                </ListItem>
                <ListItem>
                    <SimpleTextFormula>
                        3. Найти совпадение между списками{' '}
                        {'$x = e \\cdot y - z$'}
                    </SimpleTextFormula>
                </ListItem>
            </List>

            <SimpleTextFormula>
                Стратегия «разделяй и властвуй» - сложность алгоритма
                {'$O(\\sqrt p)$'} гигантских и бэйби шагов
            </SimpleTextFormula>

            <SimpleTextFormula>Шаги алгоритма:</SimpleTextFormula>
            <SimpleTextFormula>
                1. Цель - найти {'$x \\equiv ind_a b \\pmod{p-1}$'}, где
                {'$p \\in \\mathbb{P}_{\\mathbb{N}}$'}
            </SimpleTextFormula>
            <SimpleTextFormula>
                2. Представим $x = ey - z$, где {'$e = [\\sqrt p] + 1$'}
            </SimpleTextFormula>
            <CentralizedMultiFormula
                header={'3. Вычислим'}
                formulas={[
                    'c_y \\equiv (a^e)^y \\pmod p, y \\in \\overline{1, [\\sqrt p] + 1}',
                    'd_z \\equiv b \\cdot a^z  \\pmod p, z \\in \\overline{1, [\\sqrt p] + 1}',
                ]}
            />

            <SimpleTextFormula>
                4. Тогда найдутся $y$ и $z$ при которых{' '}
                {'$ c_y \\equiv d_z \\pmod p $'}, то{' '}
                {'$x = ey - z \\pmod{p-1}$'} если такая пара не нашлась, то
                логарифм $ind_ab$ не существует.
            </SimpleTextFormula>
        </Stack>
    );
};

export default GelfondShanksLogarithmTheory;
