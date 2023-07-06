import './App.css';
import { Stack, Typography, Box, TextField, Button, IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { Input } from '@mui/joy';
import { useState } from 'react';
import Plans from './Plans';

const App = () => {
  const [value, setValue] = useState('');
  const [plan, setPlan] = useState([]);
  const handleClick = ()=>{

    if(value!="")
    {
        setPlan([...plan,value]);
        setValue('')
    }
  }
  const handleDelete = (id)=>{
    const oldItems = [...plan]
    const items = oldItems.filter((elem,i)=>{
      return i!==id
    })
    setPlan(items)
  }
  return (
    <Box sx={{ width: '600px', margin: 'auto', marginTop: '10px', boxShadow: '4' }}>
      <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }} variant='h3' color='white' gutterBottom>Today's Plan</Typography>
      <Stack direction='row' mt={2} p={4} spacing={2}>
        <Input placeholder="Type in here…" variant="soft" sx={{ width: '90%' }} value={value} onChange={(e) => setValue(e.target.value)} />
        <Button variant='contained' color='success' size='sm' onClick={handleClick}><DoneIcon /> </Button>
      </Stack>
      <Stack direction='column' mt={4} pl={4} spacing={3}>
          {plan.map((value,key)=>(
              <Plans value={value} key={key} id={key} handleDelete={handleDelete}/>
          ))}
      </Stack>
    </Box>
  )
}

export default App;
