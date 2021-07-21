import React from 'react'
import ServiceContext from './context'
import * as api from 'services/api'

const ServiceProvider = ({ children }) => {
  const services = {
    api
  }

  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  )
}

export default ServiceProvider
