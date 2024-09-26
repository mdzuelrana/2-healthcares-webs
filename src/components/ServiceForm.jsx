import React, { useState } from 'react';

const ServiceForm = ({ onSubmit, serviceToEdit }) => {
    const [name, setName] = useState(serviceToEdit ? serviceToEdit.name : '');
    const [description, setDescription] = useState(serviceToEdit ? serviceToEdit.description : '');
    const [price, setPrice] = useState(serviceToEdit ? serviceToEdit.price : '');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if all fields are filled
        if (!name || !description || !price) {
            setError('Please fill in all fields before submitting.');
            return;
        }

        setError(''); // Clear any previous errors
        onSubmit({ name, description, price: parseFloat(price) }); // Submit the new or updated service
        resetForm(); // Clear the form
    };

    const resetForm = () => {
        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit} className="service-form">
            <h2>{serviceToEdit ? 'Edit Service' : 'Add New Service'}</h2>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Service Name" 
                required 
            />
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description" 
                required 
            />
            <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                placeholder="Price" 
                required 
            />
            <button type="submit">{serviceToEdit ? 'Update' : 'Add'} Service</button>
            {error && <p className="error-message">{error}</p>} {/* Show error message */}
        </form>
    );
};

export default ServiceForm;
