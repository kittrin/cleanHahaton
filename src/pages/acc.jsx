import React, {useState} from 'react';
import {BottomNavigation, BottomNavigationAction, Box, Paper} from "@mui/material";
import Car from "../components/Car";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SavingsIcon from '@mui/icons-material/Savings';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Energy from "./energy";
import System from "./system";
const Acc = () => {
    const [value, setValue] = useState(0)
    const components = [
        <Car/>,
        <Energy/>,
        <System/>,
        <Car/>
    ]
    return (
        <Box>
            {components[value]}
            <Paper sx={{
                position: 'fixed',
                bottom: 0, left: 0, right: 0
            }}>
                <BottomNavigation
                    value={value}
                    onChange={(ev, newValue)=>{
                        setValue(newValue)
                        console.log(newValue)
                    }}>
                    <BottomNavigationAction icon={
                        <div
                            style={{background: 'radial-gradient(95.31% 95.31% at 32.03% 26.56%, #2A3ED5 0%, #5564DD 100%) ', padding: '15px', borderRadius: '50%'}}
                        >
                            <LocationOnOutlinedIcon fontSize='large' sx={{color: '#FFFFFF', zIndex: 10}}/>
                        </div>
                    }/>
                    <BottomNavigationAction icon={<FlashOnIcon fontSize='large' sx={{color: 'black'}}/>}/>
                    <BottomNavigationAction icon={<SavingsIcon fontSize='large' sx={{color: 'black'}}/>}/>
                    <BottomNavigationAction icon={<PersonRoundedIcon fontSize='large' sx={{color: 'black'}}/>}/>
                </BottomNavigation>
            </Paper>

        </Box>
    );
};

export default Acc;