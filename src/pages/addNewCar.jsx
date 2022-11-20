import React, {useState} from 'react';
import {Box, Button, IconButton, Typography} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SelfEnter from "../components/AddCar/SelfEnter";
import SendPTS from "../components/AddCar/SendPTS";
import CameraPTS from "../components/AddCar/CameraPTS";

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
    block: {
        margin: '8px',
        background: 'radial-gradient(95.31% 95.31% at 32.03% 26.56%, #2A3ED5 0%, #5564DD 100%)',
        borderRadius: '30px',
        padding: '18px 44px',
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'start'
    },
    nameType: {
        fontWeight: 600,
        fontSize: '1rem',
        color: '#FFFFFF'

    }
}



const AddNewCar = ({func}) => {
    const [compOpen, setCompOpen] = useState(0)
    const idiotism = (num)=>{
        func(num)
    }
    const handleClick = (num)=>{
        setCompOpen(num)
    }
    const typeAdd =(text, n)=>{
        return(
            <Button variant='contained' sx={styles.block} onClick={()=>handleClick(n)}>
                <Typography sx={styles.nameType}>{text}</Typography>
            </Button>
        )
    }
    const components = [
        <Box>
            <div style={styles.blockTitle}>
                <IconButton size='large' onClick={()=>idiotism(0)}>
                    <ArrowBackIosNewIcon fontSize='medium' sx={{color:'#2A3ED5', marginRight: '23px'}}/>
                </IconButton>
                <Typography sx={styles.title}>Добавить автомобиль</Typography>
            </div>
            <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '24px'}}>
                {typeAdd('Госуслуги', 0)}
                {typeAdd('Отсканировать ПТС', 1)}
                {typeAdd('Отправка электронного ПТС',2)}
                {typeAdd('Ручной ввод', 3)}
            </Box>
        </Box>,
        <CameraPTS/>,
        <SendPTS func={(n)=>handleClick(n)}/>,
        <SelfEnter func={(n)=>handleClick(n)}/>
    ]
    return (
        <Box>
            {components[compOpen]}
        </Box>
    );
};

export default AddNewCar;