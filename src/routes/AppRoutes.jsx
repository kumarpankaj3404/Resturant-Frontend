
import React from 'react';
import { Routes } from 'react-router-dom';
import HomeRoute from './HomeRoute';

export default function AppRoutes() {
  return (
    <Routes>
      {HomeRoute()}
    </Routes>
  );
}
