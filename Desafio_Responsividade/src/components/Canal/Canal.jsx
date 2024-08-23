import {Avatar, Box} from "@mui/material";
import "./canal.module.css"
import { Grid } from "@mui/material";
 
export const Canal = () => {
    return (
        <Box 
            className = {'caixaCanal'}
            sx={{ flexGrow:1, overflow:'hidden', px:3}}>           
            <Grid 
                container wrap="nowrap" 
                spacing={2}>
                <Grid item>
                    <Avatar>Y</Avatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                    <p >Canal Exemplo Desafio</p>
                    <p className='nSubscribes'>10 inscritos</p>
                </Grid>
            </Grid>
        </Box>
    )
}