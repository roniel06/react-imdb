import React,{useState} from "react";
import { Container, Typography, Card, Grid, TextField, Button } from "@material-ui/core";
import style from "./style";
import {Movieicon} from '../../icons'

export default ({history}) => {
  const [searchText, setSearchtext] = useState('')
  const classes = style();


  const handleSearchTextChange =  event=>{
    setSearchtext(event.target.value);
  }

  const handleCleanText = ()=>{
    setSearchtext("");
  }

  const handleWebSearch = event =>{
    history.push(`/results?movieName=${searchText}`)
  }

  return (
    <Container className={classes.container}>
      <Card  className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Typography className={classes.title}>Home</Typography>
        </Grid>
        <Grid>
          <Movieicon className={classes.icon}/>
        </Grid>
       
        <TextField
        className={classes.textFieldSearch}
        value={searchText}
        placeholder="Buscar"
        onChange={handleSearchTextChange}
        />
         <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleCleanText} >Limpiar</Button>
          <Button variant="contained" color="primary" onClick={handleWebSearch}> Buscar</Button>
        </Grid>
      </Card>
    </Container>
  );
};
