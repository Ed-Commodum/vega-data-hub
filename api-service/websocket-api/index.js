
// The Websocket streaming API aims to offer most of the standard API endpoints as streams
// that will send live block-by-bock updates to the user.


// Potential workflow:
// -- User sends array of payloads, each payload is a json object describing the desired stream.
// -- API service parses payloads to determine which streams to request from the streaming-API.
// -- Every new unique payload is given a unique ID.
// -- The streaming API checks to see if streams for the requested payloads are already running.
//      - If they are running then duplicate the data from that stream.
//      - Else start the corresponding stream.
// -- API sends the user all the requested streams zipped into one.


// We might want to export the whole thing as a class or two and import the service into the API service.
// If the API servers struggle then consider separating the streaming API into it's own service, at this
// stage it may even be worthwhile to write it in Go.

payloads = [
    {
        type: 'volume',
        marketId: null,
        interval: null,
        partyId: "c8sf..."
    },
    {
        type: 'volume-rolling',
        marketId: 'nm39...',
        interval: 'INTERVAL_ROLLING_2H',
        partyId: 'c8sf...'
    },
    {
        type: 'historical-volume',
        marketId: '7ad31...',
        interval: 'INTERVAL_1D',
        partyId: null,
        limit: null
    },
]

