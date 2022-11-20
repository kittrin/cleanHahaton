import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import image from '../images/mainBackImg.png'

const styles = {
    background: {
        backgroundImage: `url("${image}")`,
        backgroundColor: '#2231AA',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover'
    },
    logo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoName: {
        color: '#FFFFFF',
        fontWeight: 900,
        fontSize: '128px',
        lineHeight: '150px',
        fontStyle: 'normal',
        marginBottom: '34px'
    },
    buttonEnter: {
        textTransform: 'none',
        backgroundColor: '#111955',
        borderRadius: '16px',
        padding: '16px 61px',
        '&:hover': {
            backgroundColor: '#111955',
            boxShadow: 'none',
        },
    }
}
const Auth = () => {
    return (
        <Box style={styles.background} sx={{padding: 0}}>
            <div style={styles.logo}>
                <Typography variant='h1' sx={styles.logoName}>
                    elvo
                </Typography>
                <Button variant='contained' sx={styles.buttonEnter}>
                    <Typography variant='subtitle1' sx={{fontWeight: 600}}>
                        Войти
                    </Typography>
                </Button>
            </div>
        </Box>
    );
};

export default Auth;