import { grey } from '@mui/material/colors'
import { Container } from '@mui/material'
import SearchForm from '../ui/SearchForm'
import Paper from '@mui/material/Paper'
import React from 'react'

export type HeaderProps = {
  onSearchTextChanged: (text: string) => void
}

const Header = (props: HeaderProps) => {
  const { onSearchTextChanged } = props

  return (
    <Paper
      square
      elevation={5}
      sx={{
        py: 2,
        bgcolor: grey[900],
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container maxWidth='xl'>
        <SearchForm onSumbit={onSearchTextChanged} />
      </Container>
    </Paper>
  )
}

export default Header
