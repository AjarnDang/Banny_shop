import React from 'react';
import { useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { tokens } from "../theme";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '} {new Date().getFullYear()} {'. '}
            <Link className='text-secondary' href="https://www.linkedin.com/in/thornthan-jomtharak-b10403279/i.com/">
                Thornthan J.
            </Link>
        </Typography>
    );
}

function Footer() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <footer className='pt-5 border-top'>
                <div className='container'>
                    <div className='d-flex justify-content-between flex-wrap'>
                        <div className='mb-3'>
                            <h5 style={{ color: colors.grey[300], }}>
                                CONTENT
                            </h5>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Discover
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Poppular Content
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                New Trand
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Categories
                            </Link>
                        </div>
                        <div className='mb-3'>
                            <h5 style={{ color: colors.grey[300], }}>
                                INFOMATION
                            </h5>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Pricing
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Sell Content
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Jobs
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Our Guideline
                            </Link>
                        </div>
                        <div className='mb-3'>
                            <h5 style={{ color: colors.grey[300], }}>
                                ABOUT US
                            </h5>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                About us
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Privacy Policy
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                User Agreement
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Cookies Policy
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Contact us
                            </Link>
                        </div>
                        <div className='mb-3'>
                            <h5 style={{ color: colors.grey[300], }}>
                                MEDIA & ARTICLES
                            </h5>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                News
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Articles
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Blogs
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Annoucements
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                FAQs
                            </Link>
                            <Link to={`/`}
                                className='nav-link'
                                style={{ color: colors.grey[300], }} >
                                Manual
                            </Link>
                        </div>
                        <div className='mb-3'>
                            <h5 style={{ color: colors.grey[300], marginBottom: "10px" }}>
                                SOCIALS
                            </h5>
                            <a href='' className='nav-link d-inline'>
                                <i class="fa-brands fa-square-facebook fa-2xl"
                                    style={{
                                        color: colors.grey[300],
                                    }}>
                                </i>
                            </a>
                            <a href='' className='nav-link d-inline'>
                                <i class="fa-brands fa-square-x-twitter fa-2xl"
                                    style={{
                                        color: colors.grey[300],
                                        marginLeft: "10px",
                                    }}>
                                </i>
                            </a>
                            <a href='' className='nav-link d-inline'>
                                <i class="fa-brands fa-square-pinterest fa-2xl"
                                    style={{
                                        color: colors.grey[300],
                                        marginLeft: "10px",
                                    }}>
                                </i>
                            </a>
                            <a href='' className='nav-link d-inline'>
                                <i class="fa-brands fa-square-instagram fa-2xl"
                                    style={{
                                        color: colors.grey[300],
                                        marginLeft: "10px",
                                    }}>
                                </i>
                            </a>
                            <a href='' className='nav-link d-inline'>
                                <i class="fa-brands fa-square-youtube fa-2xl"
                                    style={{
                                        color: colors.grey[300],
                                        marginLeft: "10px",
                                    }}>
                                </i>
                            </a>
                            <a href='' className='nav-link d-inline'>
                                <i class="fa-brands fa-linkedin fa-2xl"
                                    style={{
                                        color: colors.grey[300],
                                        marginLeft: "10px",
                                    }}>
                                </i>
                            </a>

                            <p style={{ color: colors.grey[700], }} className='mt-5 mb-3'>
                                Get exclusive assets sent straight to your inbox
                            </p>
                            <button className='btn btn-primary px-5'>Sign up</button>
                        </div>
                    </div>
                    <hr style={{ color: colors.grey[300], }} />
                    <div className='copy-right d-flex justify-content-between flex-wrap my-4'>
                        <Copyright />
                        <DropdownButton variant='outline-primary' title="English">
                            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">ไทย</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer