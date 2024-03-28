import Box from "@mui/material/Box";
import React from "react";
import {Divider} from "@mui/material";

export default function Copyright({simple, color}) {
    const CustomDivider = ({mb}) => (
        <Box mb={mb !== undefined ? mb : 2} width={1} borderTop={'2px dashed green'} />
    )

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
            <Box
                width={1} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}
                color={color ? color : '#333'}
            >
                {
                    simple ? (
                        <CustomDivider/>
                    ) : (
                        <Divider flexItem sx={{mb: 2}}/>
                    )
                }
                © Copyright 2024 CryptoMath. All rights reserved
            </Box>
        </Box>
    )
}