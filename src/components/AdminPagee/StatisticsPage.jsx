import React from 'react';
import {Box, Typography} from "@mui/material";

const styles = {
    minBlock: {
        padding: '24px 32px',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        margin: '48px',
        width: '30%'
    },
    nad: {
        fontSize: '1rem',
        fontWeight: 600,
        color: '#000000'
    },
    title: {
        fontSize: '2rem',
        color: '#2A3ED5',
        fontWeight: 700
    },
    subtitle: {
        fontSize: '0.75rem',
        color: '#000000',
        fontWeight: 600
    },
    textList: {
        fontSize: '1rem',
        fontWeight: 600,
        color: '#000000'
    }
}
const cars = ['2.Tesla model 3',
    '3.Nissan Leaf',
    '4.Volkswagen ID.6',
    '5.Mercedes-Benz EQC']
const upgrade = [
    '2.Сочи',
    '3.Новороссиск',
    '4.Анапа',
    '5.Геленджик'
]
const regions = [
    '2.Краснодарский край',
    '3.Московская область',
    '4.Санкт-Петербург',
    '5.Татарстан'
]
const StatisticsPage = () => {
    const minBlock = (nadtitle, title, subtitle) => {
        return (
            <Box sx={styles.minBlock}>
                <Typography sx={styles.nad}>{nadtitle}</Typography>
                <Typography sx={styles.title}>{title}</Typography>
                <Typography sx={styles.subtitle}>{subtitle}</Typography>
            </Box>
        )
    }
    const bigBlock = (nadtitle, title, list) => {
        return (
            <Box sx={styles.minBlock}>
                <Typography sx={styles.nad}>{nadtitle}</Typography>
                <Typography sx={styles.title}>{title}</Typography>
                {list.map((e) =>
                    <Typography sx={styles.textList}>{e}</Typography>
                )}
            </Box>
        )
    }
    return (
        <Box>
            <Box sx={{display: 'flex'}}>
                {minBlock('Потребление энергии электромобилями', '100.000 кВт', 'На 30% больше по сравнению с предыдущим месяцем')}
                {minBlock('Прирост электромобилей', '25 авто', 'За прошлый месяц')}
                {minBlock('За прошлый месяц', '330%', 'По сравнению с предыдущим месяцем')}
            </Box>
            <Box sx={{display: 'flex'}}>
                {bigBlock('Рейтинг электромобилей', '1.Tesla model S', cars)}
                {bigBlock('Рейтинг городов края по эликтрификации', '1.Краснодар', upgrade)}
                {bigBlock('Рейтинг регионов России по электрификации', '1.Москва', regions)}
            </Box>
        </Box>
    );
};

export default StatisticsPage;