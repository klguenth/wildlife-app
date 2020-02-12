import React from 'react'

export default React.createContext({
    sightings: [],
    addSighting: () => {},
    deleteSighting: () => {},
})