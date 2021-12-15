import React from 'react'
import {Spinner} from 'react-bootstrap'
import {Link, Navigate} from 'react-router-dom'

function GroupList(props) {

    const {groups} = props

    

    if(!groups.length) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
        <div>
            <p>GroupsList Component</p>
            {
                groups.map((elem) => {
                    return (
                        <div>
                            <Link to={`/group/${elem._id}`}>{elem.name}</Link>
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default GroupList
