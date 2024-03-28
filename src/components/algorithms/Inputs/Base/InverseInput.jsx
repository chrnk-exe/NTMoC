import BaseInput from "../../BaseInput";
import React from 'react';

export default function InverseInput({updateArgs}) {
    return (
        <BaseInput
            updateArgs={updateArgs}
            vars={[
                {label: 'a', defValue: 123},
                {label: 'm', defValue: 123},
            ]}
        />
    )
}