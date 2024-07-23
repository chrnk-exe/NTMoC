import Latex from "react-latex";
import {Box} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";


export default function OutlinedFormula({description, formula, aftertext, outlined}) {
    return (
        <Box lineHeight={0}>
            <Latex>{`${description}:`}</Latex>
            <Button
                sx={{
                    mx: 1.5, px: 1, color: 'unset', fontSize: 'unset',
                    '& .MuiTouchRipple-child': {
                        backgroundColor: 'primary.main',
                    },
                }}
            >
                <Box
                    display={"inline"}
                    border={outlined ? '1px gray solid' : ''} width={"min-content"}
                >
                    <Latex>{`$${formula}$`}</Latex>
                </Box>
            </Button>
            {aftertext && <Latex>{`, ${aftertext}`}</Latex>}
        </Box>
    )
}