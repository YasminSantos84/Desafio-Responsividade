import {Avatar, Box, colors} from "@mui/material";
import "./canal.module.css"
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button"
import { red } from "@mui/material/colors";
import {styled} from "@mui/material/styles";
 
const ColorButtonRed = styled(Button)(({theme}) => ({
    color: theme.pallete.getContrastText(red[400]),
    backgroundColor:red[400],
    '&:hover':{
        backgroundColor: red[600],
    },
}));

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
                <Grid item>
                    <Stack>
                        <ColorButtonRed  variant="contained">Subscribe</ColorButtonRed >
                    </Stack>                    
                </Grid>
            </Grid>
        </Box>
    )
}