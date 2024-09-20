import { Avatar, Box, Grid, Stack, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import styles from "./canal.module.css"; // Importar CSS module como objeto

const ColorButtonRed = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[400]),
  backgroundColor: red[400],
  "&:hover": {
    backgroundColor: red[600],
  },
}));

export const Canal = () => {
  return (
    <Box className={styles.caixaCanal}
      sx={{ 
        flexGrow: 1, 
        overflow: "hidden", 
        px: 3 }}
      >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>Y</Avatar>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Box
            sx={{
              height:25,
              width:150,
              my:4,
              backgroundColor:'#717171'
            }}
            >
              Canal Exemplo Desafio
          </Box>
          <p className={styles.nSubscribes}>10 inscritos</p>
        </Grid>
        <Grid item>
          <Stack>
            <ColorButtonRed variant="contained">Subscribe</ColorButtonRed>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
