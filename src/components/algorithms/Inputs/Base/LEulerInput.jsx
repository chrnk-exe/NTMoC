import BaseInput from "../../BaseInput";
import React from 'react';

export default function LEulerInput({updateArgs}) {
    return (
        <BaseInput
            updateArgs={updateArgs}
            vars={[
                {label: 'm', defValue: 7},
            ]}
        />
    )
}