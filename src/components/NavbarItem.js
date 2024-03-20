import React from "react"

import { Typography, Box } from "@mui/material"


const ProjectNavbarItem = ({children}) => {
  return (

      <Typography variant="body1" component="div" 
          sx={{
            display: "block",
            mx: 1,
            px: 1,
          }}
        >
          {children}
          </Typography>
  )
}

export default ProjectNavbarItem