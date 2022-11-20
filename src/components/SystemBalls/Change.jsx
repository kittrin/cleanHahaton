import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const styles = {
    blockTitle: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '24px',
        marginTop: '50px',
        marginBottom: '30px'
    },
    title1:{
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '100%'
    },
    title2:{
        fontSize: '1.5rem',
        color: '#2A3ED5',
        fontWeight: 900,
        lineHeight: '100%'
    },
    blockOfPlaces:{
        display: 'flex',
        flexDirection: 'column'
    },
    place: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'radial-gradient(95.31% 95.31% at 32.03% 26.56%, #2A3ED5 0%, #5564DD 100%)',
        padding: '23px 26px',
        borderRadius: '8px',
        marginBottom: '8px'
    },
    infoPlace: {
        display: 'flex',
        flexDirection: 'column'
    },
    namePlace:{
        fontSize: '1.25rem',
        color: '#FFFFFF',
        fontWeight: 600,
        lineHeight: '100%'
    },
    ballsPlace: {
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: '100%',
        color: '#FFFFFF'
    },
    iconButton: {
        color: '#FFFFFF'
    }
}

const Change = ({func}) => {
    return (
        <Box>
            <Box sx={styles.blockTitle}>
                <Typography sx={styles.title1}>Получайте баллы за зарядку</Typography>
                <Typography sx={styles.title2}>Программы лояльности</Typography>
            </Box>
            <Box sx={styles.blockOfPlaces}>
                <Box sx={styles.place}>
                    <div style={styles.infoPlace}>
                        <Typography sx={styles.namePlace}>НЭСК</Typography>
                        <Typography sx={styles.ballsPlace}>90034 балла</Typography>
                    </div>
                    <IconButton size='large' onClick={()=>func(1)}>
                        <NavigateNextIcon sx={styles.iconButton} fontSize='large'/>
                    </IconButton>
                </Box>
                <Box sx={styles.place}>
                    <div style={styles.infoPlace}>
                        <Typography sx={styles.namePlace}>Electro.cars</Typography>
                        <Typography sx={styles.ballsPlace}>100 баллов</Typography>
                    </div>
                    <IconButton size='large' onClick={()=>func(2)}>
                        <NavigateNextIcon sx={styles.iconButton} fontSize='large'/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Change;