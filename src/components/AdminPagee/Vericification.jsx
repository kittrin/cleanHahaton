import React, {useState} from 'react';
import {Box, Button, List, ListItem, ListItemButton, Typography} from "@mui/material";
import imgListPts1 from '../../images/pts1.png'
import imgListPts2 from '../../images/pts2.png'
import dpsPhotoMain1 from '../../images/dpsMain1.png'
import dpsPhotoMain2 from '../../images/dpsMain2.png'
const carList = {
    0: {
        name: 'MITSUBISHI PAJERO 3.0 LWB',
        date: '21.10.2022'
    },
    1: {
        name: 'TESLA MODEL Y',
        date: '01.11.2022'
    },
    2: {
        name: 'TESLA MODEL S',
        date: '13.11.2022'
    }
}

const styles = {
    blockList: {
        width: '40%',
        height: '80%',
        background: '#FFFFFF',
        borderRadius: '16px'
    },
    blockDps: {
        width: 'calc(45% - 48px)',
        height: 'calc(80% - 48px)',
        background: '#FFFFFF',
        borderRadius: '16px',
        padding: '24px',
        display: 'flex',
        flexDirection:  'column',
        justifyContent: 'space-between'
    },
    main: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '95%',
    },
    itemButton: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.75rem',
        borderTop: '1px solid #CCCCCC',
        borderBottom: '1px solid #CCCCCC',

    },
    nameCarList: {
        fontSize: '1rem',
        fontWeight: '700',
        padding: '12px 0 8px 24px',
    },
    textItem: {
        fontSize: '0.75rem',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
    },
    dpsPhoto: {
        display: 'flex'
    },
    infoCar: {
        name: {
            fontSize: '1.5rem',
            fontWeight: '500'
        },
        number: {
            fontSize: '1rem',
            fontWeight: 500,
            color: '#999999'
        },
        type: {
            fontSize: '1rem',
            fontWeight: 600
        },

    },
    buttonChoice: {
        borderRadius: '16px',
        padding: '0.75rem 1rem',
        textTransform: 'none',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#FFFFFF',
        background: 'radial-gradient(95.31% 95.31% at 32.03% 26.56%, #2A3ED5 0%, #5564DD 100%)',
        marginRight: '16px'
    }
}
const Vericification = () => {
    const [s, setS] = useState('')
    const [list, setList] = useState(carList)
    const handleClick = (k) => {
        setList(list => {
            const copy = {...list}
            delete copy[`${k}`]
            console.log(copy)
            return copy
        })
    }
    return (
        <Box sx={styles.main}>
            <Box sx={styles.blockList}>
                <Typography sx={styles.nameCarList}>Заявки на верификацию</Typography>
                <List>
                    {Object.keys(list).map((key)=>
                        <ListItem sx={{padding: 0}}>
                            <ListItemButton sx={styles.itemButton} onClick={()=>setS(key)}>
                                <Typography sx={styles.textItem}>
                                    <Box sx={{marginRight: '12px'}}>
                                        <img src={imgListPts1} alt='no'/>
                                        <img src={imgListPts2} alt='no'/>
                                    </Box>
                                    {list[key].name}
                                </Typography>
                                <Typography sx={styles.textItem}>
                                    {list[key].date}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    )
                    }
                </List>
            </Box>

            <Box sx={styles.blockDps}>
                {s in list?
                    <Box style={{height: '60%', display: 'flex'}}>
                        <img src={dpsPhotoMain1} style={{height: '100%'}} alt='no'/>
                        <img src={dpsPhotoMain2} style={{height: '100%'}} alt='norm'/>
                    </Box>
                    :
                    <div/>
                }
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography sx={styles.infoCar.name}>{s in list? <span>{list[`${s}`].name}</span> : <span style={{color: 'green'}}>None</span>}</Typography>
                    {s in list? <Typography sx={styles.infoCar.number}>A000AA123</Typography> : <div/>}
                    {s in list? <Typography sx={styles.infoCar.type}>Тип двигателя:<span style={{color: '#EE3535', marginLeft: '4px'}}>Бензиновый </span></Typography>
                        : <div/>}
                    {s in list ? <Box sx={{display: 'flex', marginTop: '24px'}}>
                            <Button
                                variant='contained'
                                sx={styles.buttonChoice}
                                onClick={() => handleClick(s)}>
                                Одобрить заявку
                            </Button>
                            <Button
                                variant='contained'
                                sx={styles.buttonChoice}
                                onClick={() => handleClick(s)}
                            >
                                Отклонить заявку
                            </Button>
                        </Box>
                        : <div/>
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default Vericification;