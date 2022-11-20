import React, {useState} from 'react';
import LeftMenu from "../components/AdminPagee/LeftMenu";
import background from '../images/backgroundDesktop.png'
import {Box} from "@mui/material";
import Vericification from "../components/AdminPagee/Vericification";
import StatisticsPage from "../components/AdminPagee/StatisticsPage";
const styles = {
    main: {
        background: `url(${background}), #2A3ED5`,
        backgroundAttachment: 'fixed',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
}

const components = [
    <StatisticsPage/>,
    <Vericification/>,
    <Vericification/>
]
const Admin = () => {
    const [numComponent, setNumComponent] = useState(0)
    const changeNum = (number)=>{
        setNumComponent(number)
    }
    return (
        <Box sx={styles.main}>
            <LeftMenu func={(n)=>changeNum(n)}/>
            {components[numComponent]}

        </Box>
    );
};

export default Admin;