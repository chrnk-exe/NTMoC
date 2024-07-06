import {TextField} from "@mui/material";
import React from "react";


export const CustomTextField = ({value, setValue, fontSize, size=1}) => {
    const inputHandler = (e, setFunction) => {
        value = e.target.value.slice(0, 10);
        setFunction(+value);
    };
    const inputWidth = () => (value.toString().length * 15 * size + 6 * size).toString() + 'px'

    return (
        <TextField
            type={'number'} variant={'standard'} value={value === 0 ? '' : value}
            onChange={(e) => inputHandler(e, setValue)}
            error={value === 0}
            InputProps={{
                inputProps: {
                    max: 99999,
                    style: {
                        textAlign: 'center', fontSize: fontSize ? fontSize : '1.5em', p: 0
                    }
                }
            }}
            sx={{
                width: inputWidth(),
                minWidth: 20,
                '& .MuiInput-input': {
                    py: 0.35
                },
                '& .MuiInput-underline:before': { borderBottomColor: 'primary.main', borderWidth: '1px' },
                '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
            }}
        />
    )
}
