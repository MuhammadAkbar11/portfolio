import React from 'react';

export const PublicContext = React.createContext();
export const LayoutContext = React.createContext();
export const AnimationContext = React.createContext();

export const PublicProvider = PublicContext.Provider;
export const LayoutProvider = LayoutContext.Provider;
export const AnimationProvider = AnimationContext.Provider;
