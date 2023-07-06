import { Stack,Box,Button } from '@mui/material'
import { Delete } from '@mui/icons-material'
import React from 'react'

const Plans = ({value,id,handleDelete}) => {
  return (
    <Stack direction='row' spacing={3}>
      <Box sx={{boxShadow:'4', width:'77%',color:'white'}} p={1}>
          {value}
      </Box>
      <Button variant='contained' color='error' size='sm' onClick={()=>{handleDelete(id)}}><Delete /></Button>
    </Stack>
  )
}

export default Plans