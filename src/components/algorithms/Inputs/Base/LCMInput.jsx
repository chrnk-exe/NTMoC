import BaseInput from "../../BaseInput";
import React from 'react';

export default function PhiInput({updateArgs}) {
    return (
        <BaseInput
            updateArgs={updateArgs}
            vars={[
                {label: 'a', defValue: 123},
            ]}
        />
    )
}