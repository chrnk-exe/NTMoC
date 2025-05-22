import React from 'react';
import { Stack } from '@mui/material';
import SimpleTextFormula from '../../theory/common/SimpleTextFormula';
import OutlinedFormula from '../../theory/common/OutlinedFormula';
import CentralizedMultiFormula from '../../theory/common/CentralizedMultiFormula';

const TonelliShanksExample = () => {
    return (
        <Stack fontSize={18} spacing={2} alignSelf="flex-start">
            <SimpleTextFormula>
                Тут будет пример использования алгоритма Тонелли-Шенкса
            </SimpleTextFormula>

            <OutlinedFormula
                description={'Исходные данные'}
                formula={'Тут будут исходные данные'}
            />

            <SimpleTextFormula>Тут будет описание решения</SimpleTextFormula>

            <CentralizedMultiFormula
                header={'Шаги решения'}
                formulas={[
                    'Тут будет шаг 1',
                    'Тут будет шаг 2',
                    'Тут будет шаг 3',
                ]}
                alignItems={'flex-start'}
            />

            <SimpleTextFormula>Тут будет результат</SimpleTextFormula>

            <OutlinedFormula
                description={'Ответ'}
                formula={'Тут будет ответ'}
            />

            <OutlinedFormula
                description={'Проверка'}
                formula={'Тут будет проверка'}
            />
        </Stack>
    );
};

export default TonelliShanksExample;
