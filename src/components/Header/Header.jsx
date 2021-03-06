import React, {useState, useEffect} from 'react'
import {Navbar, Nav, NavDropdown, Form, Button} from 'react-bootstrap'
import reduxLogo from '../../img/redux-logo.svg'
import reactLogo from '../../img/react-logo.svg'
import bootstrapLogo from '../../img/bootstrap-logo.svg'
import {NavLink} from "react-router-dom";
import Thumbnail from "../common/Thumbnail/thumbnail";
import {StyledRightAside, LogoBlock} from './styles';

const Header = (props) => {
    let [currentTheme, setCurrentTheme] = useState("dark")
    let [currentVariant, setCurrentVariant] = useState("dark")

    const setDarkTheme = () => {
        props.setDarkTheme();
        setCurrentTheme("dark");
        setCurrentVariant("dark");
    }
    const setLightTheme = () => {
        props.setLightTheme();
        setCurrentTheme("light");
        setCurrentVariant("light");
    }
    const setBlueTheme = () => {
        props.setBlueTheme();
        setCurrentTheme("primary");
        setCurrentVariant("light");
    }
    useEffect(() => {
        setCurrentTheme(currentTheme)
        setCurrentVariant(currentVariant)
    }, [currentTheme, currentVariant])
    return (
        <Navbar bg={currentTheme} variant={currentVariant} expand="md" className="mb-3">
            <Navbar.Brand href="#home">React Developers Network</Navbar.Brand>
            <LogoBlock>
                <img alt="logo" src={reactLogo} className="ml-1"/>
                <img alt="logo" src={reduxLogo} className="ml-1"/>
                <img alt="logo" src={bootstrapLogo} className="ml-1"/>
            </LogoBlock>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Theme" className="ml-5" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={setLightTheme}>Light&nbsp;<i
                            className="fas fa-palette"/></NavDropdown.Item>
                        <NavDropdown.Item onClick={setDarkTheme}>Dark&nbsp;<i
                            className="fas fa-palette"/></NavDropdown.Item>
                        <NavDropdown.Item onClick={setBlueTheme}>Blue&nbsp;<i
                            className="fas fa-palette"/></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    {props.isAuth ?
                        <StyledRightAside styles={props.styles}>
                            <Thumbnail/>
                            <span>{props.authorizedUserName}</span>
                            <Button variant="success" onClick={props.logOut}>Log Out</Button>
                        </StyledRightAside> :
                        <div>
                            <NavLink to='/login' activeClassName="activeLink"><Button variant="success">Log in</Button></NavLink>
                        </div>
                    }
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;