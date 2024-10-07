import React, { useState } from 'react';
import { activateSim, deactivateSim, getSimDetails } from '../services/simService';
import "./simCardManager.css"

const SimCardManager = () => {
    const [simNumber, setSimNumber] = useState('');
    const [simDetails, setSimDetails] = useState(null);
    const [error, setError] = useState('');

    const handleActivate = async () => {
        try {
            await activateSim(simNumber);
            alert('SIM Activated!');
            setError('');
        } catch (err) {
            setError(err.response?.data?.error || 'Error activating SIM');
        }
    };

    const handleDeactivate = async () => {
        try {
            await deactivateSim(simNumber);
            alert('SIM Deactivated!');
            setError('');
        } catch (err) {
            setError(err.response?.data?.error || 'Error deactivating SIM');
        }
    };

    const handleGetDetails = async () => {
        try {
            const response = await getSimDetails(simNumber);
            setSimDetails(response.data);
            setError('');
        } catch (err) {
            setError(err.response?.data?.error || 'Error fetching SIM details');
        }
    };

    return (
        <div className='form'>
            <h1>SIM Card Management</h1>
            <input 
                value={simNumber} 
                onChange={(e) => setSimNumber(e.target.value)} 
                placeholder="Enter SIM Number" 
            /> <div className='btn'>
            <button onClick={handleActivate}>Activate SIM</button>
            <button onClick={handleDeactivate}>Deactivate SIM</button>
            <button onClick={handleGetDetails}>Get SIM Details</button></div>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            {simDetails && (
                <div>
                    <h3>SIM Details:</h3>
                    <p>SIM Number: {simDetails.sim_number}</p>
                    <p>Phone Number: {simDetails.phone_number}</p>
                    <p>Status: {simDetails.status}</p>
                    <p>Activation Date: {new Date(simDetails.activation_date).toLocaleString()}</p>
                </div>
            )}
        </div>
    );
};

export default SimCardManager;
