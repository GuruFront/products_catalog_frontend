import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

type Props = {
  onSumbit: (e: string) => void
}

const SearchForm = (props: Props) => {
  const [value, setValue] = useState<string>('')

  const { onSumbit } = props

  const handleResetValue = () => {
    setValue('')
    onSumbit('')
  }

  return (
    <Paper
      component='form'
      elevation={0}
      sx={{ px: '2px', display: 'flex', alignItems: 'center', mb: 2 }}
    >
      <InputBase
        onChange={(e) => setValue(e.target.value)}
        sx={{ ml: 1, flex: 1, height: 44 }}
        placeholder='Search'
        value={value}
      />
      {value.length > 0 ? (
        <>
          <IconButton
            type='button'
            sx={{ p: '10px' }}
            aria-label='search'
            onClick={() => onSumbit(value)}
          >
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
          <IconButton
            color='primary'
            sx={{ p: '10px' }}
            aria-label='directions'
            onClick={handleResetValue}
          >
            <CloseRoundedIcon />
          </IconButton>
        </>
      ) : null}
    </Paper>
  )
}

export default SearchForm
