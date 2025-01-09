import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../service/api';


const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const res = await API.get('/auth/users');
            setUsers(res.data);
        } catch (err) {
            setError(err.response?.data?.message || 'Error fetching users.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
            {error && <p className="error">{error}</p>}
            <h3>Registered Users:</h3>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        {user.username} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
