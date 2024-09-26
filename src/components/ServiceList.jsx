import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ services, onDelete, onUpdate }) => {
    return (
        <div>
            <h2>Healthcare Services</h2>
            <ul>
                {services.map((service) => (
                    <ServiceItem
                        key={service.id}
                        service={service}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ServiceList;
