import React from 'react';

export const PublicContext = React.createContext();
export const LayoutContext = React.createContext();

export const PublicProvider = PublicContext.Provider;
export const LayoutProvider = LayoutContext.Provider;
