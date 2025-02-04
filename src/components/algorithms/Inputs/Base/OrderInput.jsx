import BaseInput from "../../BaseInput";
import React from 'react';

export default function OrderInput({updateArgs}) {


    return (
        <BaseInput
            updateArgs={updateArgs}
            vars={[
                {label: 'a', defValue: 3},
                {label: 'm', defValue: 11},
            ]}
        />
    )
}