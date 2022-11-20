import React from 'react';
import {Alert, Box, Button, IconButton, Snackbar, Typography} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AttachFileIcon from '@mui/icons-material/AttachFile';
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
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 50px'
    },
    button: {
        background: '#FFFFFF',
        width: '90%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        borderRadius: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: 0,
        fontSize: '1rem',
        fontWeight: 600,
        fontFamily: 'Roboto',
        color: '#000000'
    },
    icon: {
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2A3ED5',
        borderRadius: '50%',
        marginRight: '12px'
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
const SendPts = ({func}) => {
    const idiotism = (num)=>{
        func(num)
    }
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
                <IconButton size='large' onClick={()=>idiotism(0)}>
                    <ArrowBackIosNewIcon fontSize='medium' sx={{color:'#2A3ED5', marginRight: '23px'}}/>
                </IconButton>
                <Typography sx={styles.title}>Добавить автомобиль</Typography>
            </div>
            <Box sx={styles.body}>
                <IconButton color="default" aria-label="upload picture" component="label" sx={styles.button}>
                    <div style={styles.icon}>
                        <AttachFileIcon sx={{color: '#FFFFFF', transform: 'rotate(20deg)'}}/>
                    </div>
                    ПТС на паджерик.PDF
                    <input hidden accept="image/*" type="file" />
                </IconButton>
                <Button variant='contained' sx={styles.buttonSend} onClick={handleOpen}>
                    Отправить заявку
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontFamily: 'Roboto'}}>
                        Отправлено!
                    </Alert>
                </Snackbar>
            </Box>
        </Box>
    );
};

export default SendPts;