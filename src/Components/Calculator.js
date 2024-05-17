import { Link } from "react-router-dom";
import { Box, Grid, Input, OutlinedInput } from "../../node_modules/@mui/material/index";

const styles = {
    position: 'relative',
    display: 'flex',
    m: '5% auto',
    top: '50%',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '30px',
    boxShadow: 24,
    p: 4,
}

export default function Calculator() {
    return (
        <>
            <p>Je suis une calculatrice</p>
            <Grid sx={styles}>
                <Box sx={{
                    width: '70%',
                    m: 'auto',
                    p: 2,
                    borderRadius: '20px',
                    display: 'grid',
                    bgcolor: 'salmon',
                }} >
                    <Item sx={{ gridColumn: '1', gridRow: 'span 2' }}>span 2</Item>
                </Box>
            </Grid>
            <button><Link to="/">home</Link></button>

        </>
    );
}
