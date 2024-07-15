import BaseInput from "../../BaseInput";
import React from 'react';

export default function OrderInput({updateArgs}) {


    return (
        <BaseInput
            updateArgs={updateArgs}
            vars={[
                {label: 'a', defValue: 12},
                {label: 'm', defValue: 13},
            ]}
        />
    )
}