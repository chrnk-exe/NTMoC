import BaseInput from "../../BaseInput";
import React from 'react';

export default function OrderNumberInput({updateArgs}) {
    return (
        <BaseInput
            updateArgs={updateArgs}
            vars={[
                {label: 'm', defValue: 7},
                {label: 'P^{\\times}_m(b)', defValue: 2},
            ]}
        />
    )
}