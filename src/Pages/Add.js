import React, { useState } from 'react';
import Modal from '../components/Modal';
import AddProduct from './AddProducts';
import AddBrand from './AddBrand';
import AddCatalog from './AddCatalog';
import AddCategory from './AddCategory';

const Add = (props) => {
    return (
        <>
            <div className=" flex mt-3 justify-center">
                <div>
                    <Modal
                        openBtn="Add Product"
                        modalHeaderTitle="HEADER TITLE"
                        component={
                            <AddProduct
                                createProduct={props.createProduct}
                                categories={props.categories}
                                brands={props.brands}
                            />
                        }
                    />
                </div>
                <div>
                    <Modal
                        openBtn="Add Brand"
                        modalHeaderTitle="Добавить Бренд"
                        component={
                            <AddBrand
                                createBrand={props.createBrand}
                                categories={props.categories}
                            />
                        }
                    />
                </div>
                <div>
                    <Modal
                        openBtn="Add Catalog"
                        modalHeaderTitle="Добавить Каталог"
                        component={
                            <AddCatalog
                                createCatalogs={props.createCatalogs}
                                categories={props.categories}
                            />
                        }
                    />
                </div>
                <div>
                    <Modal
                        openBtn="Add Category"
                        modalHeaderTitle="Добавить Категоре"
                        component={
                            <AddCategory
                                createCategory={props.createCategory}
                                catalogs={props.catalogs}
                            />
                        }
                    />
                </div>
            </div>

        </>
    )
}

export default Add;