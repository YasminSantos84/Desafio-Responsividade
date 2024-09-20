import { Box } from "@mui/material";
import * as React from 'react';

export const InformacoesVideo = () => {
    return (
        <> 
        {/* <> para poder utilizar os 2 box */}
            <Box
                sx={{
                    height: 20,
                    width: 320,
                    my: 4,
                    // backgroundColor: '#DBDBDB',
                    // '&:hover': {
                    //     backgroundColor: '#949494'
                    // }
                    backgroundColor: '#DBDBDB'
                }}>
            </Box>
            <Box
                sx={{
                    height: 10,
                    width: 550,
                    my: 4,
                    backgroundColor: '#717171',
                    '&:hover': {
                        backgroundColor: '#949494'
                    }
                }}>
            </Box>
            <Box
                sx={{
                    height: 10,
                    width: 600,
                    my: 4,
                    backgroundColor: '#717171',
                    '&:hover': {
                        backgroundColor: '#949494'
                    }
                }}>
            </Box>
            <Box
                sx={{
                    height: 10,
                    width: 250,
                    my: 4,
                    backgroundColor: '#717171',
                    '&:hover': {
                        backgroundColor: '#949494'
                    }
                }}>
            </Box>                        
        </>

    )
}