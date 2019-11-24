import React from 'react'
import Sidebar from './Sidebar'

const items = [
    { name: 'home', label: 'Home' },
    {
        name: 'billing',
        label: 'Billing',
        items: [
            { name: 'statements', label: 'Statements' },
            { name: 'reports', label: 'Reports' },
        ],
    },
    {
        name: 'settings',
        label: 'Settings',
        items: [
            { name: 'profile', label: 'Profile' },
            { name: 'insurance', label: 'Insurance' },
            {
                name: 'notifications',
                label: 'Notifications',
                items: [
                    { name: 'email', label: 'Email' },
                    {
                        name: 'desktop',
                        label: 'Desktop',
                        items: [
                            { name: 'schedule', label: 'Schedule' },
                            { name: 'frequency', label: 'Frequency' },
                        ],
                    },
                    { name: 'sms', label: 'SMS' },
                ],
            },
        ],
    },
]

function App() {
    return (
        <div>
            <Sidebar items={items} />
        </div>
    )
}

export default App