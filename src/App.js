import React from 'react'
import Sidebar from './Sidebar'

const items = [
    { name: 'home', label: 'Home' },
    { name: 'billing', label: 'Billing' },
    { name: 'settings', label: 'Settings' },
]

function App() {
    return (
        <div>
            <Sidebar items={items} />
        </div>
    )
}

export default App