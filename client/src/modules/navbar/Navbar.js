import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import { Image } from 'react-bootstrap'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../../rootcontext/GlobalContext'
import axios from "axios";
import { url } from '../../api'

const Navbar = () => {
    const history = useHistory()
    const { setIsAuthorized } = useGlobalContext()
    const handleLogout = async (token) => {
        await axios.post(`${url}/logout`, { authorization: `Bearer ${token}` });
        setIsAuthorized(false);
        localStorage.removeItem('token');
    }
    return (
        <Row>
            <Col sm="12" md="5" lg="5" style={{ paddingLeft: "5em" }} className="mt-n20 pl-5">
                <Image src='https://img.icons8.com/ios/2x/star-wars.png' />
            </Col>
            <Col lg="2" md="2"></Col>
            <Col sm="12" md="5" lg="5" className='d-flex-row p-4 '>
                <Button onClick={() => { history.push('/people') }} color='link'>
                    People
                </Button>{" "}
                <Button onClick={() => { history.push('/starships') }} color='link'>
                    Starships
                </Button>{" "}
                <Button onClick={() => { history.push('/planets') }} color='link'>
                    Planet
                </Button>{" "}
                <Button onClick={() => { history.push('/') }} color='secondary'>
                    <i class="fa fa-home" aria-hidden="true"></i> Home
                </Button>{" "}
                <Button onClick={() => { handleLogout(localStorage.getItem('token')); }}
                    className=' pr-3 mr-3' color='danger'>
                    Logout
                </Button>
            </Col>
        </Row>

    )
}

export default Navbar