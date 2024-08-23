import {Avatar, Box} from "@mui/material";
import "./comentario.module.css";
import { Grid } from "@mui/material";
 
export const Comentario = () => {
    return (
        <Box 
            className = {'caixaUser'}
            sx={{ flexGrow:1, overflow:'hidden', px:3}}>
            <Grid 
                container wrap="nowrap" 
                spacing={2}>
                <Grid item>
                    <Avatar/>
                </Grid>
                <Grid item xs zeroMinWidth>
                    <p className="nomeUser">Canal Comentarista 1</p>
                    <p className='comentario'>Comentario 1</p> 
                </Grid>
            </Grid>
        </Box>
    )
}