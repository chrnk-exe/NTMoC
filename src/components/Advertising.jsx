import Box from "@mui/material/Box";
import React from "react";
import {Stack} from "@mui/material";

export default function Advertising() {

    const get_random_choices = (max, count) => {
        let choices = Array.from({length: max}, (_, i) => i + 1);
        let output = [];

        for (let _ = 0; _ < count; _++) {
            let index = Math.floor(Math.random() * choices.length);
            output.push(choices[index]);
            choices.splice(index, 1);
        }
        return output
    }

    return (
        <Box pt={2} bgcolor={'white'} height={1}>
            {/*<Box pl={1} ml={2}>*/}
            {/*    {*/}
            {/*        [...Array(40)].map(x =>*/}
            {/*            <Box fontSize={16} fontWeight={600} color={'gray'}>*/}
            {/*                Реклама &nbsp;&nbsp;&nbsp;Реклама*/}
            {/*            </Box>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</Box>*/}
            <Stack spacing={2} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                {get_random_choices(12, 3).map(
                    (file, index) =>
                        <Box
                            key={index}
                            component={'img'}
                            src={`ads/${file}.png`}
                            width={180}
                            height={"auto"}
                        />
                )}
            </Stack>
        </Box>
    )
}