import BaseInput from "../../BaseInput";
import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import Latex from "react-latex";
import {CustomTextField} from "../common/CustomTextField";


export default function OrderInput({updateArgs}) {
    const [value, setValue] = useState(3);
    const [module, setModule] = useState(11);

    useEffect(() => {
        updateArgs([value, module])
    }, [value, module]);

    return (
        <Stack direction={"row"} spacing={0.7} alignItems={"center"}>
            <Box display={"flex"} alignItems={"center"}>
                <Typography fontSize={'0.95em'} pl={0.2} pr={0.4} color={'gray'} >
                    <Latex>
                        {`$m=$`}
                    </Latex>
                </Typography>
                <CustomTextField value={module} setValue={setModule}/>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
                <Typography fontSize={'1em'} color={'gray'} pr={1.5}>
                    {','}
                </Typography>

                <Typography fontSize={'0.95em'} pl={0.2} pr={0.4} color={'gray'} >
                    <Latex>
                        {`$P^{\\times}_m ($`}
                    </Latex>
                </Typography>
                <CustomTextField value={value} setValue={setValue}/>
                <Typography fontSize={'0.95em'} pl={0.2} pr={0.4} color={'gray'} >
                    <Latex>
                        {`$)$`}
                    </Latex>
                </Typography>
            </Box>
        </Stack>
    );
}
