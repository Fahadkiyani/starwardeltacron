import React from 'react'
import { Card, CardBody, CardTitle, } from 'reactstrap';

export const CustomCard = ({ body, dontShowBorder }) => {
    return (
        <div>
            <div>
                <Card style={{ border: dontShowBorder ? "none" : '1px solid #dedede' }}>
                    <CardBody>
                        {body}
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
