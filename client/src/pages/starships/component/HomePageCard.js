import React, { useMemo, useEffect } from 'react'
import { Loader } from '../../../utils/Loader'
import { useUIContext } from '../context/UIContext'
import { Row, Col } from 'reactstrap'
import moment from 'moment'
import DetailsModal from './modal/DetailsModal'

const HomePageCard = () => {
    const { tempData, tempDetailsData, isLoading, showDetails, setShowDetails, fetchDetailsHandler } = useUIContext()
    let data = useMemo(() => ({ tempData }), [tempData])
    let keys = Object.keys(tempDetailsData)
    return (
        <>
            {showDetails && <DetailsModal
                showModal={showDetails}
                setShowModal={(e) => setShowDetails(e)}
                title={tempDetailsData?.name}
                body={isLoading ? <div className='d-flex justify-content-center'><Loader /></div> :
                    <div>
                        <table style={{ maxWidth: 'inherit' }}>
                            <tr>
                                <th>Fields</th>
                                <th>Value</th>
                            </tr>

                            {keys.map((key, index) => {
                                key = key.toString();
                                return <tr key={index} >
                                    <td className="h6">{key}</td>
                                    <td title={tempDetailsData?.[key]} className="text-truncate" style={{ maxWidth: 400 }}>{tempDetailsData?.[key]}</td>
                                </tr>
                            })}
                        </table>
                    </div>
                }
            />}

            <div className='p-5 m-5 mt-2 shadow p-3 mb-5 bg-white rounded'>
                {isLoading && <div className='d-flex justify-content-center'><Loader /></div>}
                <Row className='d-flex-row'>
                    {data?.tempData?.map((item, index) => {
                        return <Col key={index} sm="12" md="6" lg="4" onClick={() => {
                            fetchDetailsHandler(item?.url);
                            setShowDetails(true)
                        }}>
                            <div className="card mb-2">
                                <div className="card-body">
                                    <div>
                                        <div className='d-flex-row'>
                                            <h5 className="card-title">{item?.name}</h5>
                                            <p>cargo capacity: {item?.cargo_capacity}</p>
                                        </div>
                                        <p className="card-text pt-0 mt-0 text-truncate" title={item?.manufacturer}>
                                            mfg by: {item?.manufacturer}
                                        </p>
                                        <p className='pt-0 mt-0 text-muted' style={{ fontSize: "0.8em" }}>Created At: {moment(item?.created).format('YYYY-MM-DD hh:mm A')}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    })}
                </Row>

                <div className='pb-3'></div>
            </div>
        </>
    )
}

export default HomePageCard;