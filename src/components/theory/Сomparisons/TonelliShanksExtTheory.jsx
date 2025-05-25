import React from 'react';
import { Stack } from '@mui/material';
import SimpleTextFormula from '../common/SimpleTextFormula';
import OutlinedFormula from '../common/OutlinedFormula';
import CentralizedMultiFormula from '../common/CentralizedMultiFormula';

const TonelliShanksExtTheory = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <SimpleTextFormula>
                Тут будет теория обобщённого алгоритма Тонелли-Шенкса
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Основная идея'}
                formula={'Тут будет основная формула для корня n-ой степени'}
            />

            <SimpleTextFormula>
                Тут будет описание обобщённого алгоритма
            </SimpleTextFormula>

            <CentralizedMultiFormula
                header={'Шаги алгоритма'}
                formulas={[
                    'Тут будет шаг 1',
                    'Тут будет шаг 2',
                    'Тут будет шаг 3',
                ]}
                alignItems={'flex-start'}
            />

            <SimpleTextFormula>
                Тут будет дополнительная информация о нахождении корня n-ой
                степени
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Сложность'}
                formula={'Тут будет сложность обобщённого алгоритма'}
            />
        </Stack>
    );
};

export default TonelliShanksExtTheory;
