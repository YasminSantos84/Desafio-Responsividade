import { useState } from 'react'
import './App.css'
import { Canal } from './components/Canal/Canal'
import { Comentario } from './components/Comentarios/Comentario'
import { BoxVideo } from './components/Exibicao/BoxVideo/BoxVideo'
import { Preview } from './components/Recomendacoes/Preview/Preview'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Box } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}>
          <BoxVideo/>   
          <Canal/>
          <Comentario/> 
          <Preview/>              
        </Grid>
      </Box> 
    </>
  )
}

export default App
