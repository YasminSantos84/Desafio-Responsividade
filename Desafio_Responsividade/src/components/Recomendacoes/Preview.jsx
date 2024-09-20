import { Box } from "@mui/material";
import * as React from 'react';

export const Preview = () => {
    return(
        <Box
            sx={{
                height:100,
                width: 150,
                my:4,  
                bgcolor:'#4E4E4E',
                '&:hover':{
                    bgcolor:'#4E4E4E'
                },
            }}
            alignItems="center"
            display="flex"
            justifyContent="center"
        >
        </Box>
    )
}