import * as React from "react"

import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'util/theme';
import Navbar from "components/Navbar"


const FeedbackPage = () => {
  return (
    <ThemeProvider theme={theme} sx={{fontFamily: "Roboto"}}>
      <Navbar/>
      <Box
        sx={{
          width: 'auto',
          height: {xs: 100, md: 150, lg: 200}
        }}
      ></Box>
      <Container
      maxWidth="md"
      >
        feedback form
      </Container>
    </ThemeProvider>
  )
}

export default FeedbackPage

export const Head = () => <title>Feeback Page</title>
