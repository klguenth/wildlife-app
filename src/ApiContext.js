import React from 'react'

export default React.createContext({
    sightings: [],
    deleteSighting: () => {},
    editSighting: () => {},
    addSighting: () => {}
})