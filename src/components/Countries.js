import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';


const Countries = ({data}) => {
    console.log("this is data 2:", data)
    const classes = useStyles();
    return ( 
        <div className='grid'>
            {
                data.map((country)=>{
                    return(
                        <Card className={classes.root} key={country.id}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Country"
                                height="140"
                                image={country.flag}
                                title="Country flag"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                {country.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Population: {country.population}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Region: {country.region}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Capital: {country.capital}
                            </Typography>
                            </CardContent>
                            </CardActionArea>

                        </Card>
                        // <div className='card' key={country.id}>
                        //     <img 
                        //         className='img-Grid'
                        //         src={country.flag}
                        //         alt={'flag'}
                        //     />
                        //     {<h4>Country:{country.name}</h4>}
                        //     {<p>Population: {country.population}</p>}
                        //     {<p>Region: {country.region}</p>}
                        //     {<p>Capital: {country.capital}</p>}
                        // </div>
                    )
                })
            }
        </div>
     );
}
 
export default Countries;