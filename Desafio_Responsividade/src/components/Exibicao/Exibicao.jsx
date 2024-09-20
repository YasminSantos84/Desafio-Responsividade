import { SvgIcon } from "@mui/material";
import * as React from 'react';
import PlayCircle from "@mui/icons-material/PlayCircle";

export default function SvgIconPlayer () {
    return(
        <SvgIcon 
            component={PlayCircle}
            sx={{fontSize:45}}/>
    )
}