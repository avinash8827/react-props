import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink,Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>Header
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/login">Login</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/register">Register</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/get_students">Get Students</Link>
            </Nav.Item>
        </Nav>
    </div>
  )
}
