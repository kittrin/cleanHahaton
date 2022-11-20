import React, {useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import imgCar from "../images/tesla.png"
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import AddIcon from '@mui/icons-material/Add';
import JoinRightIcon from '@mui/icons-material/JoinRight';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

import AddNewCar from "../pages/addNewCar";

const styles = {
    background: {
        background: 'radial-gradient(94.23% 94.23% at 19.62% 17.08%, #2A3ED5 0%, #192580 100%)',
        borderRadius: '16px',
        padding: '16px 24px',
        position: 'relative'
    },
    car: {
        position: 'absolute',
        width: '70%',
        top: '32px',
        left: '30%',
    },
    model: {},
    modelName: {
        fontSize: '2rem',
        color: '#FFFFFF',
        fontWeight: 600,
        fontFamily: 'Poppins'
    },
    numberCar: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontWeight: 600,
        paddingLeft: '8px',
    },
    energyBlock: {
        marginTop: '32px',
        display: 'flex',
        alignItems: 'center',
    },
    charge: {
        fontSize: '2.5rem',
        fontWeight: 600,
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
    },
    km: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#FFFFFF',
        fontWeight: 600,
        marginTop: '88px',
        marginBottom: '48px'
    },
    blockKm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '40%',
        fontFamily: 'Roboto'
    },
    goodDay: {
        fontWeight: 600,
        fontSize: '1.5rem'
    },
    namePerson: {
        fontWeight: 900,
        color: '#2A3ED5',
        fontSize: '2rem'
    },
    addCar: {
        width: "100%",
        padding: '14px 17px',
        textTransform: 'none',
        background: 'radial-gradient(95.31% 95.31% at 32.03% 26.56%, #2A3ED5 0%, #5564DD 100%)',
        borderRadius: '25px',
        textAlign: 'left',
        justifyContent: 'start',
        fontWeight: 600
    },
    card: {
        block: {
            display: 'flex',
            flexDirection: 'column',
            background: 'radial-gradient(95.31% 95.31% at 32.03% 26.56%, #2A3ED5 0%, #5564DD 100%)',
            padding: '12px 24px',
            borderRadius: '8px',
            marginTop: '16px'
        },
        subBlock: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        text: {
            color: '#FFFFFF',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center'
        }
    }
}
const Car = () => {
    const [openComp, setOpenComp] = useState(0)
    const handleClick = (n)=>{
        setOpenComp(n)
    }
    const components =[
        <Box>
            <div style={{
                marginLeft: '24px',
                marginBottom: '24px',
                marginTop: '50px'
            }}>
                <Typography variant="body1" sx={styles.goodDay}>Добрый день,</Typography>
                <Typography variant="h4" sx={styles.namePerson}>Михаил</Typography>
            </div>

            <Box style={styles.background}>
                <div style={styles.model}>
                    <Typography variant='h4' sx={styles.modelName}>Tesla model S</Typography>
                    <Typography variant="body1" sx={styles.numberCar}>А000АА123</Typography>
                </div>
                <div style={styles.energyBlock}>
                    <Typography variant='h4' sx={styles.charge}>
                        <BatteryChargingFullIcon sx={{fontSize: '40px'}}/>
                    </Typography>
                    <Typography variant='h4' sx={styles.charge}>
                        100%
                    </Typography>
                </div>
                <div style={styles.km}>
                    <div style={styles.blockKm}>
                        <Typography variant="h4" sx={{...styles.modelName, lineHeight: '100%'}}>~320 км</Typography>
                        <Typography variant="subtitle2">осталось до 0%</Typography>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '38%',
                        fontFamily: 'Roboto'
                    }}>
                        <Typography variant="h4" sx={{...styles.modelName, lineHeight: '100%'}}>140 км</Typography>
                        <Typography variant="subtitle2">пробег с прошлой зарядки</Typography>
                    </div>
                </div>
                <img src={imgCar} alt='/' style={styles.car}/>
            </Box>
            <Box sx={{padding: '0 12px', marginTop: '8px'}}>
                <Button variant='contained' sx={styles.addCar} onClick={()=>setOpenComp(1)}>
                    <AddIcon style={{marginRight: '12px'}}/>
                    Добавить автомобиль
                </Button>
            </Box>
            <Box sx={styles.card.block}>
                <Typography sx={{...styles.card.text, fontSize: '1rem'}}>Способы оплаты:</Typography>
                <Box sx={styles.card.subBlock}>
                    <Typography sx={{...styles.card.text, fontSize: '0.75rem'}}><JoinRightIcon fontSize='small'
                                                                                               sx={{marginRight: '8px'}}/>Mastercard
                        .6354</Typography>
                    <Typography sx={{...styles.card.text, fontSize: '0.75rem'}}><DoneOutlineOutlinedIcon
                        fontSize='small'/></Typography>
                </Box>
            </Box>
        </Box>,
        <AddNewCar func={(n)=>handleClick(n)}/>
    ]
    return (
        components[openComp]
    );
};

export default Car;