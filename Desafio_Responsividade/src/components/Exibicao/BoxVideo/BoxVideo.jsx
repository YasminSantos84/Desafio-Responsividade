import "./boxVideo.module.css";
import { Box, SvgIcon } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import * as React from 'react';

export const BoxVideo = () => {
    return(

            <Box
                sx={{
                    height:400,
                    width:600,
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
                    <SvgIcon 
                        component={PlayCircleIcon}
                    />
            </Box>
    )
}