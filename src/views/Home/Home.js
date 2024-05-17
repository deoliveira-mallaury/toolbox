import { Box, Grid } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Home() {
    // const navigate = useNavigate();
    return (
        <div>
            <Box sx={{ flexGrow: 1, height: '10%' }}>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                    sx={{
                        p: '5%',
                    }}>
                    {['Calculatrice', 'Todo List', 'Notes', 'Roll the dice'].map((text, index) => (
                        <Grid item xs={2} sm={4} md={5} key={index}
                            sx={{
                                p: '5%',
                                m: '2vw auto',
                            }}>
                            <Item> <Link to="calculator">{text}</Link></Item>
                        </Grid>
                    ))}
                </Grid>
                <button><Link to="/">home</Link></button>
            </Box>{/*<Box component="section" sx={{*/
            }
            {/*    width: '10vw',*/
            }
            {/*    height: '10vw',*/
            }
            {/*    backgroundColor: 'salmon',*/
            }

            {/*}}>*/
            }
            {/*    Calculatrice*/
            }
            {/*</Box>*/
            }
            {/*<Box component="section" sx={{*/
            }
            {/*    width: '10vw',*/
            }
            {/*    height: '10vw',*/
            }
            {/*    backgroundColor: 'lightblue',*/
            }

            {/*}}>*/
            }
            {/*    Todo List*/
            }
            {/*</Box>*/
            }
            {/*<Box component="section" sx={{*/
            }
            {/*    width: '10vw',*/
            }
            {/*    height: '10vw',*/
            }
            {/*    backgroundColor: 'lightgreen',*/
            }

            {/*}}>*/
            }
            {/*    Notes*/
            }
            {/*</Box>*/
            }
            {/*<Box component="section" sx={{*/
            }
            {/*    width: '10vw',*/
            }
            {/*    height: '10vw',*/
            }
            {/*    backgroundColor: 'purple',*/
            }

            {/*}}>*/
            }
            {/*    Roll the dice*/
            }
            {/*</Box>*/
            }


        </div>
    );
}

