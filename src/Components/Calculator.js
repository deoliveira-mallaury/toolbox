import {Link} from "react-router-dom";
import {Box, Grid} from "../../node_modules/@mui/material/index";
import PropTypes from "prop-types";
import BackspaceIcon from '@mui/icons-material/Backspace';
import {useEffect, useState} from "react";

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

function Item(props) {
    const {sx, ...other} = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                m: 1,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};
export default function Calculator() {
    const [value, setValue] = useState('');
    const handleClick = (item) => {

        // console.log(item)
        if (item === "+") {
            return console.log(value)
            // return value.sum();
        }
        setValue(value => value + item);
        // console.log(parseInt(item));
    };
    useEffect(() => {
        console.log(value);
    }, [value]);
    const handleChange = (event) => {
        handleClick()
        setValue(event.target.value);
        console.log(event.target.value);
    }
    return (
        <>
            <p>Je suis une calculatrice</p>
            <Grid sx={styles}>
                <Box sx={{
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    m: 'auto',
                    p: 2,
                    borderRadius: '20px',
                    display: 'grid',
                    bgcolor: 'salmon',
                    textAlign: 'center',
                }}>
                    <Item gridColumn="span 4"
                          sx={{
                              height: '45%',
                              mb: '20%',
                          }}>{value} </Item>
                    {[' % ', 'CE', 'C', 'del', '7', '8', '9', ' x ', '4', '5', '6', ' - ', '1', '2', '3', ' + ', '+/-', '0', '.', ' = '].map((item) => {
                        console.log(item);
                        if (item === ('del')) {
                            return <Item><BackspaceIcon/></Item>
                        }
                        // return <p>{item}</p>
                        return <Item onClick={() => handleClick(item.trim())}>{item}</Item>
                    })}
                </Box>
            </Grid>
            <button><Link to="/">home</Link></button>

        </>
    );
}
