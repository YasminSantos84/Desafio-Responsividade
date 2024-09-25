import { Box, Grid } from "@mui/material";
import * as React from 'react';

export const Preview = () => {
    return(
        <Grid
            container
            flexGrow={1}
            overflow={"auto"}
            gap={0.5}
            alignItems={"auto"}>
            <Grid item xs={12} sm={6} md={8}>
                <Box
                    sx={{
                        height:100,
                        width: 150,
                        my:4,  
                        backgroundColor:'#4E4E4E',
                        '&:hover':{
                            backgroundColor:'#434343ad'
                        },
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <Box
                    sx={{
                        height:10,
                        width: 180,
                        backgroundColor: '#a9a8a8',
                        '&:hover':{
                            backgroundColor:'#e4e3e332'
                        },                        
                    }}
                />
            </Grid>
        </Grid>


    )
}