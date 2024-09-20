import { useState } from 'react'
import './App.css'
import { Canal } from './components/Canal/Canal'
import { Comentario } from './components/Comentarios/Comentario'
import { BoxVideo } from './components/Exibicao/BoxVideo'
import { Preview } from './components/Recomendacoes/Preview'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { InformacoesVideo } from './components/Exibicao/InfoPlayer'

function App() {
  //const [count, setCount] = useState(0)
  // const theme = useTheme;
  // const isMobile = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {/* </><Box sx={{ flexGrow: 1, p: 2, 
        // gridTemplateColumns: isMobile ? "1fr" : "1.5fr 2fr 1.5fr 1.5fr ",
      //}}> */}
      <Grid
        container         
        lg={8}
        md={12}
        sm={12}
        sx={12}>
          <Grid item>
            <BoxVideo/> 
            <InformacoesVideo/> 
          </Grid>
          <Grid item>
            <Canal/>  
          </Grid>
          <Grid item>
            <Comentario/>  
          </Grid>                      
        </Grid>
        <Grid 
          container gap={2}>   
          <Grid item>
            <Preview/>  
          </Grid>         
        </Grid>         
      {/* </Box>  */}
      {/* <Grid container>
        <Grid item 
        gap={1}
        lg={3}
        md={6}
        sm={12}
        sx={12}
        >
          titulo
        </Grid>
        <Grid item>resumo</Grid>
      </Grid> */}

    </>
  )
}

export default App

