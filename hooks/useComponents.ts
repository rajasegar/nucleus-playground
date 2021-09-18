import React, { useContext } from 'react';
import { ComponentsContext } from '../contexts/ComponentsContext'

export const useComponents = () => useContext(ComponentsContext)
