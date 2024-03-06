import {TextField} from "@mui/material";
import React from "react";


export const CustomTextField = ({value, setValue, fontSize, dopRange=1, size=1}) => {
    const inputHandler = (e, setFunction) => {
        let {value} = e.target;
        value = (+value).toString().slice(0, 5);
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
                '& .MuiInput-input': {
                    py: 0.35
                },
                '& .MuiInput-underline:before': { borderBottomColor: 'primary.main', borderWidth: '1px' },
                '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
            }}
        />
    )
}
