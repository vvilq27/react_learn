import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function User() {
    const [name, setName] = React.useState('')
    const [age, setAge] = React.useState('')  

    const handleClick= (e)=>{
      const student = {name, age}
      console.log(JSON.stringify(student))

      fetch("http://localhost:8080/createUser",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
      }).then(() => {
        console.log("user created!")
      })
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Nick" variant="outlined" 
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
      <TextField label="Age" variant="outlined" 
      value={age}
      onChange={(e)=> setAge(e.target.value)}
      />
      <br/>

      <Button variant="contained"
        onClick={handleClick}>
          submit
      </Button>

    </Box>
  );
}
