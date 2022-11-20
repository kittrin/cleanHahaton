import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ListItem from "./ListItem";

const styles = {
    blockTitle: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '18px',
        marginLeft: '12px'
    },
    title: {
        color: '#2A3ED5',
        fontSize: '2rem',
        fontWeight: 700
    },
    blockMarks: {
        display: 'flex',
        marginRight: '24px',
        marginLeft: '24px'
    },
    mark: {
        background: '#2A3ED5',
        borderRadius: '9px',
        padding: '11px 12px',
        display: 'flex',
        alignItems: 'center',
        margin: '12px'
    },
    markText: {
        fontSize: '1rem',
        fontWeight: 600,
        color: '#FFFFFF'
    },
    body: {
        margin: '12px 24px',
        fontWeight: 600,
        color: "rgba(14,36,91,0.78)"
    }
}

const CompanyCard = ({func, compan}) => {
    return (
        <div>
            <div style={styles.blockTitle}>
                <IconButton size='large' onClick={() => func(0)}>
                    <ArrowBackIosNewIcon fontSize='medium' sx={{color: '#2A3ED5', marginRight: '23px'}}/>
                </IconButton>
                <Typography sx={styles.title}>{compan.title}</Typography>
            </div>
            <div style={styles.blockMarks}>
                <div style={styles.mark}>
                    <Typography sx={styles.markText}>4,5 </Typography><StarBorderIcon
                    sx={{color: '#FFFFFF', marginLeft: '2px'}}/>
                </div>
                <div style={styles.mark}>
                    <Typography sx={styles.markText}>110 отзывов</Typography>
                </div>
            </div>
            <Typography sx={styles.body}>{compan.description}</Typography>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <ListItem title='Список станций' subtitle='Список станций'/>
                <ListItem title='Программа лояльности' subtitle='90034 балла'/>
            </Box>
        </div>
    );
};

export default CompanyCard;