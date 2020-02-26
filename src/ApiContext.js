import React from 'react'

export default React.createContext({
    sightings: [],
    currentSightings: {},
    deleteSighting: () => {},
    editSighting: () => {},
    addSighting: () => {}
})