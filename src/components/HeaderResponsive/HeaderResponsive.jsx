import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from "../Button/Button"
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo4.png";
import LanguageSwitcher from '../LanguageSwitcher';
import "../../styles/navlink.css";
import "./style.css";

function ResponsiveAppBar() {

  const { t } = useTranslation()

  const pages = [t("homeHeader"), t("aboutHeader"), t("servicesHeader")];


  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* CELL */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="logo" className='imgLogo' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }>
                  {t("homeHeader")}
                </NavLink>

              </MenuItem>
              
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/about" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }>
                  {t("aboutHeader")}
                </NavLink>
              </MenuItem>
              
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/services" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }>
                  {t("servicesHeader")}
                </NavLink>
              </MenuItem> */}
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/skills" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }>
                  {t("skillsHeader")}
                </NavLink>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/portfolio" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }>
                  {t("portfolioHeader")}
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>


          {/* PC / NOTE */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="logo" className='imgLogo' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <NavLink to="/" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              {t("homeHeader")}
            </NavLink>
            <NavLink to="/about" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              {t("aboutHeader")}
            </NavLink>
            {/* <NavLink to="/services" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              {t("servicesHeader")}
            </NavLink> */}
                       
            <NavLink to="/portfolio" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              {t("portfolioHeader")}
            </NavLink>


            <Button title={t("contactHeader")} variant={"normal"} />

            <LanguageSwitcher />
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;