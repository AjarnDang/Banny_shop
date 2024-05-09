import React, { useContext } from 'react'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

import { ColorModeContext, tokens } from "../theme";
import { IconButton, useTheme } from "@mui/material";

function Navbar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <>
            <nav id="navbar_top" class="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: colors.grey[900] }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} width="50px" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link
                                    to={`/`}
                                    className='nav-link'
                                    style={{
                                        color: colors.grey[300],
                                    }}
                                >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to={`/Feature`}
                                    className='nav-link '
                                    style={{
                                        color: colors.grey[300],
                                    }}>
                                    Features</Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to={`/Products`}
                                    className='nav-link '
                                    style={{
                                        color: colors.grey[300],
                                    }}
                                >Discover</Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to={`/NewsAr`}
                                    className='nav-link '
                                    style={{
                                        color: colors.grey[300],
                                    }}>
                                    News & Article</Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to={`/Contact`}
                                    className='nav-link '
                                    style={{
                                        color: colors.grey[300],
                                    }}>
                                    Contact us</Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to={`/About`}
                                    className='nav-link '
                                    style={{
                                        color: colors.grey[300],
                                    }}>
                                    About</Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <form class="d-flex align-items-center">
                            <Link
                                to={`/Login`}
                                className='btn btn-outline-primary mx-2'
                            >Sign in</Link>
                            <Link
                                to={`/Register`}
                                className='btn btn-primary'
                            >Register</Link>
                            <span
                                style={{
                                    marginLeft: '15px',
                                    marginRight: '5px',
                                    color: colors.grey[300],
                                }}>|</span>
                            <IconButton
                                onClick={colorMode.toggleColorMode}
                            >
                                {theme.palette.mode === "light" ? (
                                    <i
                                        class="fa-solid fa-sun fa-lg"
                                        style={{
                                            color: colors.grey[300],
                                        }}
                                    ></i>
                                ) : (
                                    <i
                                        class="fa-solid fa-moon fa-lg"
                                        style={{
                                            color: colors.grey[300],
                                        }}></i>
                                )}
                            </IconButton>
                            <IconButton>
                                <Link
                                    to={`/Login`}
                                    className='btn btn-transparent px-1'
                                >
                                    <i
                                        class="fa-solid fa-user fa-lg"
                                        style={{
                                            color: colors.grey[300],
                                        }}
                                    ></i>
                                </Link>
                            </IconButton>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar