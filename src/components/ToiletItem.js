import React from "react"

import { Box, Typography, Rating, Card } from "@mui/material"

const ProjectToiletItem = () => {
  return (
    <Card 
      sx={{
        bgcolor: 'grey',
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'}
      }}
    >
      <Box 
        sx={{
          width: {xs: '100%', sm: 250},
          height: {xs: 'auto', sm: 250},
          pb: {xs: '90%', sm: 0},
          bgcolor: 'lightBlue',
          mr: {xs: 0, sm: 2}
        }}
      >toilet image</Box>

      <Box
        sx={{
          my: {xs: 4, md: 8},
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5">Marie Raey Bathroom Level 1</Typography>
        <Typography variant="caption">Marie raey building</Typography>
        <Rating name="simple-controlled" value={2}/>
      </Box>
      
    </Card>
  )
}

export default ProjectToiletItem