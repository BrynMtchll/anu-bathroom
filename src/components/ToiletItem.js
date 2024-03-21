import React from "react"

import { Box, Typography, Rating } from "@mui/material"

const ProjectToiletItem = () => {

  return (
    <Box 
      sx={{
        borderBottom: '1px solid black',

        p: {xs: 2, sm: 3, md: 5},
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'}
      }}
    >
      <Box 
        sx={{
          width: {xs: '100%', sm: 250},
          height: {xs: 'auto', sm: 250},
          pb: {xs: '90%', sm: 0},
          bgcolor: 'primary.main',
          mr: {xs: 0, sm: 2}
        }}
      >toilet image</Box>

      <Box
        sx={{
          my: {xs: 2, md: 2},
          gap: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography sx={{display: 'block'}} variant="h5">Marie Raey Bathroom Level 1</Typography>
          <Typography sx={{display: 'block'}} variant="caption">Marie raey building</Typography>
        </Box>
        <Box>
          <Rating name="simple-controlled" value={0}/>

        </Box>
      </Box>
      
    </Box>
  )
}

export default ProjectToiletItem