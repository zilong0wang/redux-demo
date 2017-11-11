let initState = 0

export default function reducer(state = initState, action) {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return state + 1
        default:
            return state
    }
}