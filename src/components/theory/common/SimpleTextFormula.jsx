import Latex from "react-latex";
import {Box} from "@mui/material";
import React from "react";

// Просто текст с некоторыми latex символами, по типу названия переменных и тд.
export default function SimpleTextFormula({children}) {
    return (
        <Box display={"inline-block"} alignItems={"center"} lineHeight={0.1}>
            <Latex>{`${children}`}</Latex>
        </Box>
    )
}
