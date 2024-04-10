import React from 'react'

import imgProduct from '../../../public/images/products/product_1709146900130_img.png'

import ContentRowMovies from '../components/ContentRowMovies'
import LastMovieInDB from '../components/LastMovieInDB'
import GenresInDb from '../components/GenresInDb'

const DashboardPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800 mt-4">App Dashboard</h1>
                </div>

                <div className="row">
                    <ContentRowMovies title="Products in Data Base" total={21} border="primary" icon="bi bi-box" />
                    <ContentRowMovies title="Total Categories" total={79} border="success" icon="bi bi-grid" />
                    <ContentRowMovies title="Users quantity" total={49} border="warning" icon="fas fa-user" />
                </div>

                <div className="row">
                    <LastMovieInDB img={imgProduct} alt="Star Wars - Mandalorian" link="/" />
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <GenresInDb title="Acción" />
                                    <GenresInDb title="Animación" />
                                    <GenresInDb title="Aventura" />
                                    <GenresInDb title="Ciencia Ficción" />
                                    <GenresInDb title="Comedia" />
                                    <GenresInDb title="Documental" />
                                    <GenresInDb title="Drama" />
                                    <GenresInDb title="Fantasia" />
                                    <GenresInDb title="Infantiles" />
                                    <GenresInDb title="Musical" />
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