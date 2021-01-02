import {makeStyles} from '@material-ui/styles'

const centeredObject={
    display:'flex',
       alignItems:'center',
       justifyContent:'center'
}

export default makeStyles({
  container: {
    height: "100vh",
    ...centeredObject,
    flexDirection: "column",
  },
  cardContainer: {
    ...centeredObject,
    flexDirection: "column",
    width: 400,
    height: 350,
  },
  title:{
      fontSize:'4rem'
  },
  titleGridContainer:{
      ...centeredObject
  },
  textFieldSearch:{
      width:'90%'
  },
  searchButton:{
      marginLeft:'.5rem'
  },
  buttonsContainer:{
      marginTop:'.5rem'
  },
  icon:{
      width:'4rem',
      height:'4rem'
  }
});