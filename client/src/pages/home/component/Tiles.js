import React from 'react'
import { CustomCard } from './CustomCard'
import { Row, Col } from "reactstrap"
import { useHistory } from 'react-router-dom'
import { Image } from "react-bootstrap"
export const Tiles = () => {
    const history = useHistory()
    return (
        <div>
            <Row className='p-5 mt-3'>
                <Col sm="12" md="4" lg="4" className="hover-pointer pe-auto" onClick={() => history.push('/people')}>
                    <CustomCard body={<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><h3 className=" text-center" onClick={() => history.push('/people')}>People</h3>
                        <div>
                            <Image className='card_image' fluid rounded src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?w=740&t=st=1647722002~exp=1647722602~hmac=01b5f50a981c6446255f5d8407cf82c5e75fbe3c70bbcfe4f0e560c200861517" />
                        </div></div>} />
                </Col>
                {/* https://cdn.dribbble.com/users/357241/screenshots/3261834/media/045bce3c8465fb25ac64a304046a1140.png?compress=1&resize=800x600&vertical=top */}
                <Col sm="12" md="4" lg="4" className="hover-pointer pe-auto" onClick={() => history.push('/starships')}>
                    <CustomCard body={<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><h3 className="text-center">Starships</h3>
                        <div>
                            <Image className='card_image' fluid rounded src="https://cdn.dribbble.com/users/357241/screenshots/3261834/media/045bce3c8465fb25ac64a304046a1140.png?compress=1&resize=800x600&vertical=top" /> </div></div>} />
                </Col>
                <Col sm="12" md="4" lg="4" className="hover-pointer pe-auto" onClick={() => history.push('/planets')}>
                    <CustomCard body={<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><h3 className="text-center ">Planets</h3>
                        <div>
                            <Image className='card_image' fluid rounded src="https://img.freepik.com/free-vector/futuristic-space-station-interior-with-human-robotic-crew-people-robots-monitoring-galaxy-interstellar-spaceship-bridge-science-fiction-intergalactic-travel-concept_74855-10068.jpg?t=st=1647724626~exp=1647725226~hmac=14718a57028e95b13d5f4021d9bbb68a26f4fd4907c43a6a2b67227c6b296ed4&w=740"
                            />
                        </div></div>} />
                </Col>
            </Row>
        </div>
    )
}
