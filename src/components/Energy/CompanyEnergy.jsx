import React, {useState} from 'react';
import ListItem from "./ListItem";
import {IconButton, Typography} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CompanyCard from "./CompanyCard";

const companyList = [
    'НЭСК',
    'Electro.cars',
]
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
        fontSize: '2rem',
        fontWeight: 700
    }
}
const comp = {
    nsek: {
        title: 'НЭСК',
        description: 'АО «НЭСК-электросети» является одной из лидирующих сетевых компаний на территории Краснодарского края по объему оказываемых услуг по передаче электрической энергии. Двадцать пять филиалов Общества обеспечивают электроэнергией миллион потребителей.'
    },
    electro: {
        title: 'Electro.cars',
        description: 'ESG подход призывает компании к учёту, мониторингу и сокращению выбросов CO₂, а electro.cars позволяет автоматически рассчитывать данные показатели для всех своих партнёров и клиентов. Если хотите узнать больше, то рекомендуем к прочтению этот материал.'
    }
}
const CompanyEnergy = ({func}) => {
    const [openCompany, setOpenCompany] = useState(0)
    const handleClick = (num) =>{
        setOpenCompany(num)
    }
    const components = [
        <div>
            <div style={styles.blockTitle}>
                <IconButton size='large' onClick={()=>func(0)}>
                    <ArrowBackIosNewIcon fontSize='medium' sx={{color:'#2A3ED5', marginRight: '23px'}}/>
                </IconButton>
                <Typography sx={styles.title}>Компании</Typography>
            </div>
            {companyList.map((el,ins)=>
                <ListItem title={el} subtitle='2 станции' func={(n)=>handleClick(n)} number={ins+1}/>
            )}
        </div>,
        <CompanyCard func={(num)=>handleClick(num)} compan={comp.nsek}/>,
        <CompanyCard func={(num)=>handleClick(num)} compan={comp.electro}/>
    ]
    return (
        components[openCompany]
    );
};

export default CompanyEnergy;