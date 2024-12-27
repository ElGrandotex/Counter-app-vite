import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './FirstApp'
import {OtherApp} from './OtherApp'

// Renderizar la function, usamos la etiqueta del html 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <OtherApp />
    </React.StrictMode>
)
