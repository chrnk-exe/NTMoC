import Latex from "react-latex";
import {Box} from "@mui/material";
import React from "react";

// Формула, где слева - пояснение, справа обведённая - формула
export default function OutlinedFormula({description, formula, aftertext, outlined}){
    return (
        <Box lineHeight={2}>
            <Latex>{`${description}:`}</Latex>
            <Box display={"inline"} mx={1.5} px={1} py={0.5} border={outlined ? '1px gray solid' : ''} width={"min-content"} my={22}>
                <Latex>{`$${formula}$`}</Latex>
            </Box>
            {aftertext && <Latex>{`,${aftertext}`}</Latex>}
        </Box>
    )
}