// import React from 'react'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import CelebrationIcon from '@mui/icons-material/Celebration';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import { Margin } from '@mui/icons-material';

function Transactions({item}) {
  return (
    <div style={{margin:'10px'}}>
    <Card sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:'10px'}}>
            <div style={{marginRight: '20px'}}>Logo</div>
            <div>
            <h2>{item.title}</h2>
            <h5>{item.category}</h5>
            <h5>{item.date}</h5>
            <h5>{item.price}</h5>
            </div>
        </Box>
        <CardActions>
            <button>delete</button>
            <button>edit</button>
        </CardActions>
    </Card>
      
    </div>
  )
}

export default Transactions