import React, { useState } from 'react'
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import { MenuItem, Select, styled } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Pagination from '@mui/material/Pagination'
import { LowBanner, TopBanner } from '../../Components/Banner/Banner'
import Card from '../../Components/Card/Card'
import data from '../../assets/data'
import './Shop.css'

const CustomSelect = styled(Select)({
    '& .MuiSelect-icon': {
        display: 'none',
    },
})

const theme = createTheme({
    components: {
        MuiPagination: {
            styleOverrides: {
                root: {
                    '& .MuiPaginationItem-root': {
                        backgroundColor: '#F9F1E7',
                        margin: '0 1rem',
                        width: '3rem',
                        height: '3rem',
                    },
                    '& .Mui-selected': {
                        backgroundColor: 'rgb(184, 142, 47)',
                        color: 'white',
                    },
                },
            },
        },
    },
})

const Shop = () => {
    const [number, setNumber] = useState(16)
    const [sort, setSort] = useState('Default')
    const [page, setPage] = useState(1)

    const sortedData = [...data].sort((a, b) => a.price - b.price)
    const displayData = sort === 'Price' ? sortedData : data

    const startIndex = (page - 1) * number
    const endIndex = startIndex + number
    const paginatedData = displayData.slice(startIndex, endIndex)

    const handleNumber = (event) => {
        setNumber(event.target.value)
        setPage(1)
    }

    const handleSort = (event) => {
        setSort(event.target.value)
        setPage(1)
    }

    const handlePage = (event, value) => {
        setPage(value)
    }

    return (
        <div className="shop-container">
            <TopBanner page={"Shop"}/>
            <div className="shop-toolbar">
                <div className="shop-toolbar-first">
                    <div>
                        <TuneOutlinedIcon />
                    </div>
                    <p>Filter</p>
                    <GridViewOutlinedIcon />
                    <ViewDayOutlinedIcon />
                    <p>Showing {startIndex + 1}-{Math.min(endIndex, data.length)} of {data.length} results</p>
                </div>
                <div className="shop-toolbar-filter">
                    <div className="filter-bar">
                        <p>Show</p>
                        <CustomSelect value={number} onChange={handleNumber} sx={{ height: 'fit-content' }}>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                        </CustomSelect>
                    </div>
                    <div className="filter-bar">
                        <p>Sort By</p>
                        <CustomSelect value={sort} className="sort-select" onChange={handleSort}>
                            <MenuItem value="Default">Default</MenuItem>
                            <MenuItem value="Price">Price</MenuItem>
                        </CustomSelect>
                    </div>
                </div>
            </div>
            <div className="shop-product-section">
                {paginatedData.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
                <ThemeProvider theme={theme}>
                    <Pagination
                        count={Math.ceil(displayData.length / number)}
                        page={page}
                        shape="rounded"
                        onChange={handlePage}
                        hidePrevButton
                        hideNextButton
                        className="shop-product-pagination"
                    />
                </ThemeProvider>
            </div>
            <LowBanner />
        </div>
    )
}

export default Shop
