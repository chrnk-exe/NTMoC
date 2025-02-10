import BaseInput from "../../BaseInput";
import React from 'react';

// Такой же как и в L-Функции, но я всё таки сделал отдельный файл.

export default function PrimeRootInput({updateArgs}) {
    return (
        <BaseInput
            updateArgs={updateArgs}
            vars={[
                {label: 'm', defValue: 7},
            ]}
        />
    )
}