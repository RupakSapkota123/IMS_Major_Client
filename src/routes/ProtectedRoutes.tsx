/* eslint-disable react/jsx-wrap-multilines */
import { AnimatePresence } from 'framer-motion';
import Categories from 'Pages/Categories/Categories';
import AddCategories from 'Pages/Categories/AddCategories';
import Dashboard from 'Pages/Dashboard/Dashboard';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Layout from 'layout/Layout';
import CategoryContainer from 'Pages/Categories/CategoryContainer';
import Items from 'layout/Items';
import QuickCreate from 'Components/main/Navbar/QuickCreate/QuickCreate';
import AddProducts from 'Pages/Products/AddProducts';
import CreateProducts from 'Pages/Products/CreateProducts';
import Products from 'Pages/Products/Components/productDetails/Products';
import UpdateCategories from 'Pages/Categories/UpdateCategories';
import CategoryForm from 'Pages/Categories/CategoryForm';
import RequireAuth from './RequireAuth';
import ProductsForm from 'Pages/Products/ProductsForm';
import ProductContainer from 'Pages/Products/ProductContainer';
import Update from 'Pages/Products/Update';

const PublicRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial>
        <Routes key={location.pathname} location={location}>
          <Route element={<RequireAuth />}>
            {/* <Route element={<CategoryContainer />} path="/category">
              <Route element={<Categories />} path="details" />
            </Route> */}
            <Route element={<ProductContainer />} path="/product">
              <Route element={<ProductsForm />} path="add/:id" />
            </Route>
            <Route element={<CreateProducts />} path="/create" />
            <Route element={<CategoryContainer />} path="/category">
              <Route element={<CategoryForm />} path="add" />
              <Route element={<UpdateCategories />} path="edit/:id" />
            </Route>
            {/* <Route element={<ItemWrapper />} path="/category/details" /> */}
            <Route element={<Categories />} path="/details" />
            <Route element={<Update />} path="/up" />
            <Route element={<Products />} path="/products" />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default PublicRoutes;
















