import React, { useState, useEffect} from 'react';
import './App.css';
import Countries from './components/Countries';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import useStyles from './styles';


function App() {

  const [Data,setData]=useState([]);
  let [region, setRegion] = useState('Africa');  

  useEffect(()=>{
      const apiUrl = `https://restcountries.eu/rest/v2/region/${region}`;
      fetch(apiUrl)
        .then((response) => response.json())

        .then((response) => {
          setData(response)
          
          console.log('This is your data', response)
        
        })
        .catch(err=>{
                console.log(err);
        });
        console.log('hello',)
  }, [region]);

  function HandleChange(e){
    e.preventDefault();
     setRegion(e.target.value)
  }

    const classes = useStyles();

  return (
    <div className='container'>
      <div>
        <h1>Where in the world?</h1>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
          <Select
            native
            value={region}
            onChange={HandleChange}
            // inputProps={{
            //   name: 'age',
            //   id: 'filled-age-native-simple',
            // }}
          >
            <option aria-label="None" value="" />
            <option value={"Africa"}>Africa</option>
            <option value={'Americas'}>America</option>
            <option value={'Asia'}>Asia</option>
            <option value={'Europe'}>Europe</option>
            <option value={'Oceania'}>Oceania</option>
          </Select>
      </FormControl>
      </div>
      <Countries 
        data={Data}
      />
      
    </div>
  );
}

export default App;
