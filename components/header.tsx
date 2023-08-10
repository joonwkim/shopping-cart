'use client'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { NextRequest } from 'next/server';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'

interface Props {

}

const Header = () => {

  const { data: session } = useSession()
  const isLogin = false;

  const onClick = (e:any) => {
    e.preventDefault()
    signIn()
  }

  return (
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="https://todos-nu-one.vercel.app/todos">
          {'AmiAiLab '}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="https://todos-nu-one.vercel.app">Todos</Nav.Link>
            <Nav.Link href="/protected/test1">Shoping</Nav.Link>
            {/* <Nav.Link href="/protected/test2">Protected Test2</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href="/me">Me</Nav.Link> */}
          </Nav>

          {session && session.user ? (
            <Nav className="ms-auto">
              {session.user.image ? (<Nav.Link href="/" >
                <Image id="userpicture" style={{ borderRadius: '50%' }}
                  unoptimized
                  src={session.user.image}
                  alt=''
                  width="30"
                  height="30"
                />
              </Nav.Link>) :
                (<Nav.Link href="/" > {session.user.name}</Nav.Link>)
              }

              <Nav.Link href="/"  onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}>  <FaSignOutAlt /> Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
            <Nav.Link href="/auth/login" onClick={(e)=>onClick(e)}><FaSignInAlt />Login</Nav.Link>
            <Nav.Link href="/auth/register"> <FaUser />Register</Nav.Link>
          </Nav>
          )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header