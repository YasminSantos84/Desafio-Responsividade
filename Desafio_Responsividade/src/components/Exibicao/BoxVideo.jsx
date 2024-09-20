import { Box } from "@mui/material";
import * as React from 'react';
import SvgIconPlayer from "./Exibicao";
export const BoxVideo = () => {
    return (
        <Box
            sx={{
                height: 400,
                width: 800,
                my: 4,
                bgcolor: '#4E4E4E',
                '&:hover': {
                    bgcolor: '#949494'
                },
            }}
            alignItems="center"
            display="flex"
            justifyContent="center"
        >
            <SvgIconPlayer />
        </Box>
    )
}