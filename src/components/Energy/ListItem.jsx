import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const styles = {
    block: {
        padding: '15px 24px',
        background: 'radial-gradient(95.31% 95.31% at 32.03% 26.56%, #2A3ED5 0%, #5564DD 100%)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '8px',
    },
    blockText: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        fontWeight: 600,
        marginBottom: '10px'
    },
    subTitle: {
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#E6E6E6'
    },
    iconBut: {}
}
const ListItem = ({title, subtitle, icon, func=()=>{}, number}) => {
    return (
        <Box style={styles.block}>
            <Box sx={styles.blockText}>{
                icon ? <Typography sx={styles.title}>{icon}{title} </Typography>
                    : <Typography sx={styles.title}>{title}</Typography>
            }
                <Typography sx={styles.subTitle}>{subtitle}</Typography>
            </Box>
            <IconButton size='large' onClick={()=>func(number)}>
                <ArrowForwardIosIcon fontSize='medium' sx={{color: '#FFFFFF'}}/>
            </IconButton>
        </Box>
    );
};

export default ListItem;