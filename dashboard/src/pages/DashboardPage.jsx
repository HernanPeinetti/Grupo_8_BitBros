import React from 'react'

import imgProduct from '../../../public/images/products/product_1709146900130_img.png'

import ContentRowMovies from '../components/ContentRowMovies'
import LastProduct from '../components/LastProduct'
import CategoriesInDB from '../components/CategoriesInDB'

const DashboardPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800 mt-4">App Dashboard</h1>
                </div>

                <div className="row">
                    <ContentRowMovies title="Productos en la base de datos" total={21} border="primary" icon="bi bi-box" />
                    <ContentRowMovies title="Total de categorías" total={79} border="success" icon="bi bi-grid" />
                    <ContentRowMovies title="Cantidad de usuarios" total={49} border="warning" icon="fas fa-user" />
                </div>

                <div className="row">
                    <LastProduct img={imgProduct} alt="Star Wars - Mandalorian" link="/" />
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Categorías</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <CategoriesInDB title="Bicicletas" />
                                    <CategoriesInDB title="Accesorios" />
                                    <CategoriesInDB title="Indumentaria" />
                                    <CategoriesInDB title="Repuestos" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage