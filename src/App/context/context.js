import React from 'react';

export const AppContext = React.createContext();
export const LayoutContext = React.createContext();

export const AppProvider = AppContext.Provider;
export const LayoutProvider = LayoutContext.Provider;
