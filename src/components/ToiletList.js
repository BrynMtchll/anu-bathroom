import React from "react"

import { Box, Stack } from "@mui/material"

import ToiletItem from "components/ToiletItem"

const ProjectToiletList = () => {
  return (
    <Stack
      direction={'column'}
      spacing={{xs: 1, md: 2}}

      sx={{
        width: "100%",
      }}
    >
      <ToiletItem/>
      <ToiletItem/>
      <ToiletItem/>
      <ToiletItem/>
      <ToiletItem/>
    </Stack>
  )
}

export default ProjectToiletList