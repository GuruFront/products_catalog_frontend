import React from 'react'
import {createRoot} from 'react-dom/client'
import Pages from './pages'
import CssBaseline from "@mui/material/CssBaseline";

const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <CssBaseline/>
        <Pages/>
    </React.StrictMode>,
)
