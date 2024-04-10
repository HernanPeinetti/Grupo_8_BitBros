import React from 'react'

const ListInDB = ({ title }) => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default ListInDB;