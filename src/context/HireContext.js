import React, { createContext, useContext, useState } from 'react';

const HireContext = createContext();

export const useHire = () => {
    const context = useContext(HireContext);
    if (!context) {
        throw new Error('useHire must be used within a HireProvider');
    }
    return context;
};

export const HireProvider = ({ children }) => {
    const [selectedPackage, setSelectedPackage] = useState(null);

    return (
        <HireContext.Provider value={{ selectedPackage, setSelectedPackage }}>
            {children}
        </HireContext.Provider>
    );
};
