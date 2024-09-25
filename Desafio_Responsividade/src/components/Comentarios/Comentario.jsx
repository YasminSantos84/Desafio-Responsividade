import {Avatar, Box} from "@mui/material";
import { Grid } from "@mui/material";
 
export const Comentario = () => {
    return (
        <Box 
            sx={{ flexGrow:1, overflow:'hidden', px:3}}>
            <Grid 
                container wrap="nowrap" 
                spacing={2}>
                <Grid item>
                    <Avatar/>
                </Grid>
                <Grid item xs zeroMinWidth>
                    <Box
                        sx={{
                        height:15,
                        width:345,
                        my:4,
                        backgroundColor:'#717171'
                        }}/>
                    <Box
                        sx={{
                        height:10,
                        width:750,
                        my:4,
                        backgroundColor:'#fbf7f732'
                        }}/>
                </Grid>
            </Grid>
        </Box>
    )
}