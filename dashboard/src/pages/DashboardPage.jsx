import { useState, useEffect } from 'react'

// import imgProduct from '../../../public/images/products/product_1709146900130_img.png'

import ContentRow from '../components/ContentRow'
import CardInDB from '../components/CardInDB'
import ListInDB from '../components/ListInDB'

const DashboardPage = () => {

    const [countProduct, setCountProduct] = useState(0)
    const [countUsers, setCountUsers] = useState(0)
    const [countCategories, setCountCategories] = useState(0)
    const [categories, setCategories] = useState([])
    const [lastProduct, setLastProduct] = useState({})

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(data => {
                setCountProduct(data.meta.count)
                setCountCategories(data.meta.countByCategory.length)
                setCategories(data.meta.countByCategory)
                setLastProduct(data.meta.lastProductCreated)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/api/users')
            .then(res => res.json())
            .then(data => {
                setCountUsers(data.meta.count)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800 mt-4">App Dashboard</h1>
                </div>

                <div className="row">
                    <ContentRow title="Productos en la base de datos" border="primary" total={countProduct} icon="bi bi-box" />
                    <ContentRow title="Total de categorías" border="success" total={countCategories} icon="bi bi-grid" />
                    <ContentRow title="Cantidad de usuarios" border="warning" total={countUsers} icon="fas fa-user" />
                </div>

                <div className="row">
                    <CardInDB alt={lastProduct.name} desc={lastProduct.description} link="/" img={lastProduct.image} />
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Categorías</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {categories.map((category) => {
                                        return (<ListInDB key={category.id_category} title={category.name} />)
                                    })}
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