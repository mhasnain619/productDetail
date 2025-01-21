import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardList from '../Card/CardList'
import CardDetail from '../Card/CardDetail'

const Router = () => {
    return (
        <div>

            <Routes>
                <Route path='/' element={<CardList />} />
                <Route path='/detail/:id' element={<CardDetail />} />
            </Routes>
        </div>
    )
}

export default Router
