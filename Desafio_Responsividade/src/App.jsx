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
      <Grid
        container
        flexGrow={1}
        overflow={"hidden"}
        px={1}>
          <Grid item xs={12} md={8} lg={6} sm={4}>
            <BoxVideo/> 
            <InformacoesVideo/> 
            <Canal/>  
            <Comentario/>  
            <Comentario/>  
            <Comentario/>  
            <Comentario/>  
            <Comentario/>  
          </Grid>
          <Grid item xs={12} md={4} lg={6} sm={8}>   
            <Preview/>
            <Preview/>
            <Preview/>
            <Preview/>
            <Preview/>
            <Preview/>
            <Preview/>
            <Preview/>
            <Preview/>
          </Grid>                   
        </Grid>
    </>
  )
}

export default App

