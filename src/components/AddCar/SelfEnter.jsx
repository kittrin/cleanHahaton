import React from 'react';
import {Alert, Box, Button, IconButton, Snackbar, TextField, Typography} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const styles = {
    blockTitle: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '24px',
        marginLeft: '12px'
    },
    title: {
        color: '#2A3ED5',
        fontSize: '1.5rem',
        fontWeight: 700
    },
    form: {
        padding: '0 50px',
        display: 'flex',
        flexDirection: 'column',
    },
    buttonSend: {
        background: 'radial-gradient(95.31% 95.31% at 32.03% 26.56%, #2A3ED5 0%, #5564DD 100%)',
        textTransform: 'none',
        padding: '18px 60px',
        fontSize: '1rem',
        fontWeight: '600',
        marginTop: '32px',
        borderRadius: '31px'
    }
}
const SelfEnter = ({func}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = ()=>{
        setOpen(true)
    }
    const handleClose = (event, reason)=>{
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }
    return (
        <Box>
            <div style={styles.blockTitle}>
                <IconButton size='large' onClick={()=>func(0)}>
                    <ArrowBackIosNewIcon fontSize='medium' sx={{color:'#2A3ED5', marginRight: '23px'}}/>
                </IconButton>
                <Typography sx={styles.title}>ПТС</Typography>
            </div>
            <Box sx={styles.form}>
                <TextField
                    id="outlined-basic"
                    label="Идентификационный номер"
                    variant="filled"
                    defaultValue='NCIC8547UGDUWEH84'
                    sx={{marginBottom: '8px'}}/>
                <TextField
                    id="outlined-basic"
                    label="Марка, модель ТС"
                    variant="filled"
                    defaultValue='TESLA MODEL S'
                    sx={{marginBottom: '8px'}}/>
                <TextField
                    id="outlined-basic"
                    label="Цвет кузова"
                    variant="filled"
                    defaultValue='Белый'
                    sx={{marginBottom: '8px'}}/>
                <TextField
                    id="outlined-basic"
                    label="Тип двигателя"
                    variant="filled"
                    defaultValue='Электрический'
                    sx={{marginBottom: '8px'}}/>
                <Button variant='contained' sx={styles.buttonSend} onClick={handleOpen}>
                    Отправить заявку
                </Button>
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontFamily: 'Roboto'}}>
                    Отправлено!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default SelfEnter;