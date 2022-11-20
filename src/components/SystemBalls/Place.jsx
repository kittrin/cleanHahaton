import React from 'react';
import {Box, Button, IconButton, Typography} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import coffeeImg from '../../images/coffee.jpg'
import cafe from '../../images/cafe.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const styles = {
    titleBlock: {
        display: 'flex',
        alignItems: 'center',
        margin: '50px auto 24px 24px'
    },
    title1: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '100%'
    },
    title2: {
       fontSize: '2rem',
       fontWeight: 800,
       color: '#2A3ED5',
       lineHeight: '100%'
    },
    buyButton:{
        width: '100%',
        padding: '22px 34px',
        fontSize: '1.5rem',
        color: '#FFFFFF',
        fontWeight: 700,
        lineHeight: '100%',
        background: 'radial-gradient(95.31% 95.31% at 32.03% 26.56%, #2A3ED5 0%, #5564DD 100%) ',
        borderRadius: '8px',
        justifyContent: 'start',
        textTransform: 'none'
    },
    blockPlaces: {
        display: 'flex',
        flexDirection: 'column',
        margin: '32px auto 24px 16px'
    },
    placesTitle1:{
        fontSize: '1.5rem',
        lineHeight: '100%',
        fontWeight: 700,
        color: '#2A3ED5',
        marginBottom: '4px'
    },
    placesTitle2: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '100%'
    },
    mainBlock: {
        display: 'flex',
        flexDirection: 'column'
    },
    place: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 32px',
        borderRadius: '8px',
        marginBottom: '8px',
    },
    infoPlace: {
        info: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '80%'
        },
        title: {
            fontSize: '1.5rem',
            color: '#FFFFFF',
            fontWeight: 600,
            marginBottom: '24px'
        },
        kmAndBalls: {
            display: 'flex',
            justifyContent: 'space-between',
            color: '#FFFFFF',
            fontSize: '1rem',
            fontWeight: 600
        }
    }
}

const Place = ({func, name, count}) => {
    return (
        <Box>
            <Box sx={styles.titleBlock}>
                <IconButton  onClick={()=>func(0)}>
                    <ArrowBackIosNewIcon fontSize='medium' sx={{color: '#2A3ED5', marginRight: '22px'}}/>
                </IconButton>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Typography sx={styles.title1}>Баллы {name}</Typography>
                    <Typography sx={styles.title2}>{count} <AutoGraphIcon fontSize='medium' sx={{color: '#2A3ED5'}}/></Typography>
                </div>
            </Box>
            <Button variant="contained" sx={styles.buyButton}>
                <FlashOnIcon fontSize='medium' sx={{color: '#FFFFFF', marginRight: '13px'}}/>
                Купить кВт
            </Button>
            <Box sx={styles.blockPlaces}>
                <Typography sx={styles.placesTitle1}>Заведения</Typography>
                <Typography sx={styles.placesTitle2}>Здесь можно покупать за баллы:</Typography>
            </Box>
            <Box sx={styles.mainBlock}>
                <Box sx={{...styles.place,
                    background: `radial-gradient(81.42% 136.35% at 10.13% 41.74%, rgba(42, 62, 213, 0.8) 1.97%, rgba(127, 139, 230, 0.4) 100%), url("${coffeeImg}")`,
                    backgroundSize: 'cover'
                }}>
                    <Box sx={styles.infoPlace.info}>
                        <Typography sx={styles.infoPlace.title}>Кофейня</Typography>
                        <div style={styles.infoPlace.kmAndBalls}>
                            <Typography sx={{fontWeight: 600}}>1 км</Typography>
                            <Typography sx={{fontWeight: 600}}>10 товаров за баллы</Typography>
                        </div>
                    </Box>
                    <IconButton size='large'>
                        <ArrowForwardIosIcon sx={{color: '#FFFFFF', fontWeight: 900}} fontSize='medium'/>
                    </IconButton>
                </Box>

                <Box sx={{...styles.place,
                    background: `radial-gradient(81.42% 136.35% at 10.13% 41.74%, rgba(42, 62, 213, 0.8) 1.97%, rgba(127, 139, 230, 0.4) 100%), url("${cafe}")`,
                    backgroundSize: 'cover'
                }}>
                    <Box sx={styles.infoPlace.info}>
                        <Typography sx={styles.infoPlace.title}>Кафе</Typography>
                        <div style={styles.infoPlace.kmAndBalls}>
                            <Typography sx={{fontWeight: 600}}>3 км</Typography>
                            <Typography sx={{fontWeight: 600}}>15 товаров за баллы</Typography>
                        </div>
                    </Box>
                    <IconButton size='large' >
                        <ArrowForwardIosIcon sx={{color: '#FFFFFF', fontWeight: 900}} fontSize='medium'/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Place;