import Box from "@mui/material/Box";
import React from "react";
import {Divider} from "@mui/material";

export default function Copyright({border, color}) {
    const CustomDivider = ({mb}) => (
        <Box mb={mb !== undefined ? mb : 2} width={1} borderTop={'2px dashed green'} />
    )

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
            <Box
                width={1} display={"flex"} justifyContent={"center"}
                alignItems={"center"} flexDirection={"column"}
                color={color ? color : '#333'}
            >
                {
                    border === 'dotted' ? (
                        <CustomDivider/>
                    ) : border === 'solid' ? (
                        <Divider flexItem sx={{mb: 2}}/>
                    ) : null
                }
                <Box>
                    © Copyright 2025 CryptoMath. All rights reserved
                </Box>
            </Box>
        </Box>
    )
}