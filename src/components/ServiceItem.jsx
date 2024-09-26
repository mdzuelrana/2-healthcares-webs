import React from 'react';

const ServiceItem = ({ service, onDelete, onUpdate }) => {
    return (
        <li>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price.toFixed(2)}</p>
            <button onClick={() => onUpdate(service)}>Edit</button>
            <button onClick={() => onDelete(service.id)}>Delete</button>
        </li>
    );
};

export default ServiceItem;
