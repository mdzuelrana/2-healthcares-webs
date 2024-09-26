import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import './App.css';

const App = () => {
    const [services, setServices] = useState([]); // State to store services
    const [serviceToEdit, setServiceToEdit] = useState(null); // State for the service currently being edited

    const addService = (newService) => {
        setServices([...services, { ...newService, id: Date.now() }]); // Add a new service
    };

    const updateService = (updatedService) => {
        setServices(services.map((service) => (service.id === updatedService.id ? updatedService : service))); // Update existing service
        setServiceToEdit(null); // Clear the service being edited
    };

    const deleteService = (id) => {
        setServices(services.filter((service) => service.id !== id)); // Delete service by id
    };

    return (
        <div className="App">
            <h1>Healthcare Services Management</h1>
            <ServiceForm onSubmit={serviceToEdit ? updateService : addService} serviceToEdit={serviceToEdit} />
            <ServiceList services={services} onDelete={deleteService} onUpdate={setServiceToEdit} />
        </div>
    );
};

export default App;
