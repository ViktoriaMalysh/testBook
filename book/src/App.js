import logo from "./logo.svg";
import "./App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { Provider, connect } from "react-redux";
import configureStore from "./store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, selectCount,selectRooms, init } from "./slice";

function App() {
  const [flag, setFlag] = useState(false);
  const count = useSelector(selectCount);
  const rooms = useSelector(selectRooms);
  const dispatch = useDispatch();

  useEffect(() => {
    if (flag) {
      dispatch(init());
      console.log("ghjfvfbvfvb");
      if (count > 0) {
        setTimeout(() => {
          dispatch(decrement());
          console.log("fghjk");
        }, 1000);
      }
    }
  }, [count, flag]);

  const handleChange = () => {
    dispatch(init());
    if (flag) setFlag(false);
    else if (!flag) setFlag(true);
  };

  return (
    <div className="div-block1">
      <div className="div-block2">
        {/* {rooms.map((item) => ( */}
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={4}>
            <Grid container justifyContent="center">
              {rooms.map((value) => (
              <Grid item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Room 
                      </Typography>
                      {flag ? (
                        <Typography gutterBottom variant="h5" component="div">
                          {/* <Counter/> */}
                          Count: {count === 0 ? "Time over" : count}
                        </Typography>
                      ) : (
                        <Typography></Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="small"
                      color="success"
                      onClick={handleChange}
                    >
                      Book
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

// const mapStateToProps = (state) => ({
//   // text: state.form.text,
//   room: state.form.room,
//   store: state,
// });

// export default connect(mapStateToProps)(App);

export default App;
