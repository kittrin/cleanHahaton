import React, {useState} from 'react';
import {
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';
const styles = {
    logo: {
        fontSize: '4rem',
        fontWeight: 900,
        color: '#2A3ED5',
        margin: '20px 40px'
    },
    listItem: {
        fontSize: '1.5rem',
        color: '#000000',
        fontWeight: 600
    }
}

const LeftMenu = ({func}) => {
    const [state, setState] = useState(false)

    const toggleDrawer = (ev) =>{
        setState(ev)
    }
    const list = ()=> (
        <Box sx={{width: 250}}
             onClick={()=>toggleDrawer(false)}
             onKeyDown={()=>toggleDrawer(false)}
             >
            <List>
                <Typography sx={styles.logo}>
                    elvo
                </Typography>
                <ListItem>
                    <ListItemButton onClick={()=>func(0)}>
                        <ListItemIcon>
                            <StackedBarChartIcon sx={{...styles.listItem, marginRight: '5px'}}/>
                        </ListItemIcon>
                        <ListItemText sx={styles.listItem}>
                            Статистика
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={()=>func(1)}>
                        <ListItemIcon>
                            <TaskAltRoundedIcon sx={{...styles.listItem, marginRight: '5px'}}/>
                        </ListItemIcon>
                        <ListItemText sx={styles.listItem}>
                            Верификация
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={()=>func(2)}>
                        <ListItemIcon>
                            <PolicyOutlinedIcon sx={{...styles.listItem, marginRight: '5px'}}/>
                        </ListItemIcon>
                        <ListItemText sx={styles.listItem}>
                            Пробив по номеру
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <Box>
            <Button onClick={()=>toggleDrawer(true)} size='large'>
                <WidgetsIcon fontSize='large' sx={{color: '#FFFFFF', position: 'absolute', top:'20px', left: '20px'}}/>
            </Button>
            <Drawer open={state} onClose={()=>toggleDrawer(false)}>
                {list()}
            </Drawer>
        </Box>
    );
};

export default LeftMenu;