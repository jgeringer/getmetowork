export const API = {
    CTA_BUS: {
        KEY: '5kQ32nKLH7YSWPBxsw4kX7q7h',
        URL: 'https://can-cors.herokuapp.com/http://www.ctabustracker.com/bustime/api/v2/getpredictions'
    },
    PACE_BUS: {
        KEY: '',
        URL: ''
    },
    CTA_TRAIN: {
        KEY: '',
        URL: ''
    }
}

export const DIRECTIONS = [
    "Northbound",
    "Southbound",
    "Eastbound",
    "Westbound"
]

export const IRVING = {
  ROUTE: 80,
  DIRECTION: {
    WESTBOUND: 14550
  }
}

export const HARLEM = {
  ROUTE: 90,
  DIRECTION: {
    NORTHBOUND: 15700,
    SOUTHBOUND: 11785
  }
}

// Pace: 307 | Southbound : BODY - {routeID: 33, directionID: 3, stopID: 8791, useArrivalTimes: true}
export const PACE = {
  ROUTE: 307,
  DIRECTION: {
    NORTHBOUND: 3,
    SOUTHBOUND: 2
  }
}
