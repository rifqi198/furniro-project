// import * as Icon from "akar-icons"
import { Breadcrumbs } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import "./Banner.css"
import { Link } from 'react-router-dom';

export const LowBanner = () => {
    return(
        <div className='banner-container'>
            <div className='banner-item'>
                <EmojiEventsOutlinedIcon sx={{ fontSize: 60 }} className='banner-icon'/>
                <h4 className='banner-bold'>High Quality</h4>
                <p className='banner-thin'>Crafted from top materials</p>
            </div>
            <div className='banner-item'>
                <VerifiedOutlinedIcon sx={{ fontSize: 60 }} className='banner-icon'/>
                <h4 className='banner-bold'>Warranty Protection</h4>
                <p className='banner-thin'>Over 2 years</p>
            </div>
            <div className='banner-item'>
                <LocalShippingOutlinedIcon sx={{ fontSize: 60 }} className='banner-icon'/>
                <h4 className='banner-bold'>Free Shipping</h4>
                <p className='banner-thin'>Order over Rp 1500K</p>
            </div>
            <div className='banner-item'>
                <SupportAgentOutlinedIcon sx={{ fontSize: 60 }} className='banner-icon'/>
                <h4 className='banner-bold'>24 / 7 Support</h4>
                <p className='banner-thin'>Dedicated support</p>
            </div>
        </div>
    )
}

export const TopBanner = ({page}) =>{
    return(
        <div className="shop-top-banner">
            <div className="shop-top-banner-text">
                <img src='./logo.png' alt='logo' className='banner-logo'/>
                <h1>{page}</h1>
                <Breadcrumbs separator={<NavigateNextOutlinedIcon fontSize='large'/>} className='banner-breadcrumb-container'>
                        <Link to={'/'} className='breadcrumb-text'>Home</Link>
                        <p className='breadcrumb-text'>{page}</p>
                </Breadcrumbs>
            </div>
        </div>
    )
}