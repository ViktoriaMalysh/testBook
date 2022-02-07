import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';


function App() {
  const [spacing, setSpacing] = useState(2);
  const rooms = 
  [
    {
      id:1,
      room:12,
    },
    {
      id:1,
      room:12,
    },
    {
      id:1,
      room:12,
    },
    {
      id:1,
      room:12,
    },
    {
      id:1,
      room:12,
    },
    {
      id:1,
      room:12,
    },
    {
      id:1,
      room:12,
    },
    {
      id:1,
      room:12,
    },
    {
      id:1,
      room:12,
    },
  ]

  return (
    <div className="div-block1">
      <div className='div-block2'>
        {/* {rooms.map((item) => ( */}
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
    <Grid item xs={4}>
      <Grid container justifyContent="center" spacing={spacing}>
        {rooms.map((value) => (
          <Grid key={value} item>
            

              <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
            </Grid>
   ))}
          </Grid>
        </Grid>
      </Grid>
     
      </div>
    </div>
  );
}

export default App;
