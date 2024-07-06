import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import Latex from "react-latex";
import {CustomTextField} from "./Inputs/common/CustomTextField";


export default function ExtendableBaseInput({updateArgs, vars}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (vars && vars.length > 0) {
            setData(vars.map(variable => variable.defValue))
        }
    }, []);

    useEffect(() => {
        updateArgs([data])
    }, [data]);

    const editLine = (index, new_value) => {
        let temp_data = [...data]

        temp_data[index] = new_value
        setData(temp_data)
    }

    const customSetFunc = (index) => (value) => {
        editLine(index, value)
    }

    return (
        <Stack direction={"row"} spacing={0.7} alignItems={"center"}>
            {
                vars?.map((variable, index) => (
                    <Box display={"flex"} alignItems={"center"} key={index}>
                        {
                            index !== 0 && (
                                <Typography fontSize={'1em'} color={'gray'} pr={1.5}>
                                    {','}
                                </Typography>
                            )
                        }
                        <Typography fontSize={'0.95em'} pl={0.2} pr={0.4} color={'gray'}>
                            <Latex>
                                {`$${variable.label} = $`}
                            </Latex>
                        </Typography>

                        <CustomTextField value={data[index] ? data[index] : ''} setValue={customSetFunc(index)}/>
                    </Box>
                ))
            }
        </Stack>
    );
}
