import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    export default class Example extends React.Component {
        
        render() {
          return (
            <div>
              <Navbar color="faded" light>
                <NavbarBrand href="/homeview">Top 5 video</NavbarBrand>
                <Nav navbar>
                    <NavItem >
                      <NavLink href="/homeview">Homepage</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/blog">Blog</NavLink>
                    </NavItem>
                </Nav>
              </Navbar>
            </div>
          );
        }
      }