import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import ListItem from "../components/Energy/ListItem";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CompanyEnergy from "../components/Energy/CompanyEnergy";

const styles = {
    titleBody: {
        margin: '50px auto 24px auto',
        fontSize: '2rem',
        fontWeight: 700,
        color: '#2A3ED5',
    }
}

const Energy = () => {
    const [open, setOpen] = useState(0)
    const handleClick = (number) => {
        setOpen(number)
    }
    const components = [
        <div>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography sx={styles.titleBody}>Зарядные станции</Typography>
            </Box>
            <ListItem
                title='Ваши любимые'
                subtitle='2 станции'
                icon={<FavoriteBorderOutlinedIcon fontSize='medium' sx={{color: '#FFFFFF', marginRight: '8px'}}/>}
                func={(num) => handleClick(num)}
                number={1}
            />
            <ListItem
                title='Ближайшие'
                subtitle='3 станции'
                icon={<NearMeOutlinedIcon fontSize='medium' sx={{color: '#FFFFFF', marginRight: '8px'}}/>}
                func={(num) => handleClick(num)}
                number={2}
            />
            <ListItem
                title="Лучшие цены"
                subtitle='4 станции'
                icon={<CurrencyRubleOutlinedIcon fontSize='medium' sx={{color: '#FFFFFF', marginRight: '8px'}}/>}
                func={(num) => handleClick(num)}
                number={3}
            />
            <ListItem
                title='Компании'
                subtitle='10 компаний'
                icon={<WorkOutlineOutlinedIcon fontSize='medium' sx={{color: '#FFFFFF', marginRight: '8px'}}/>}
                func={(num) => handleClick(num)}
                number={4}
            />
        </div>,
        <CompanyEnergy func={(num) => handleClick(num)}/>,
        <CompanyEnergy func={(num) => handleClick(num)}/>,
        <CompanyEnergy func={(num) => handleClick(num)}/>,
        <CompanyEnergy func={(num) => handleClick(num)}/>,

    ]
    return (
        components[open]
    );
};

export default Energy;