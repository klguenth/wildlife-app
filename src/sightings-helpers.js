export const findSighting = (sightings, sightingId) => {
    return sightings.findIndex(sighting => sighting.sighting_id == sightingId)
}

export const getSightingsForList = (sightings=[], sighting_id) => (
    (!sighting_id)
        ? sightings
        : sightings.find(sighting => {
            return sighting.sighting_id === parseInt(sighting_id)
        })
)