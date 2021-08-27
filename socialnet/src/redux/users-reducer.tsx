

type LocationType = {
    city: string,
    country: string
}
type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType 
}

export type UsersPageType = {
    users: Array <UserType>
}

type UsersActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

let initialState: UsersPageType = {

    users: [
        { id: 1, followed: true, fullName: "Nadja", status: "Search job", location: {city: 'SPb', country: 'Russia'} },
        { id: 2,  followed: true,fullName: "Maria", status: "I am  a Boss", location: {city: 'Moskva', country: 'Russia'} },
        { id: 3,  followed: true,fullName: "Pavel", status: "Search job", location: {city: 'Minsk', country: 'Belarus'} },
        { id: 4,  followed: true,fullName: "Alex", status: "Search job", location: {city: 'Vienna', country: 'Austria'} },
        { id: 5,  followed: true,fullName: "Anna", status: "Search job", location: {city: 'Berlin', country: 'Germany'} },
        { id: 6,  followed: true,fullName: "Serg", status: "Search job", location: {city: 'Wyborg', country: 'Russia'} },
        { id: 7,  followed: true,fullName: "Sofie", status: "Search job", location: {city: 'Kasan', country: 'Russia'} },
        { id: 8,  followed: true,fullName: "Denis", status: "Search job", location: {city: 'London', country: 'UK'} },
        { id: 9,  followed: true,fullName: "Leon", status: "Search job", location: {city: 'SPb', country: 'Russia'} },
        
    ]
}

export const followAC = (userID: number) => ({type: 'FOLLOW', userID}) as const
export const unfollowAC = (userID: number) => ({type: 'UNFOLLOW', userID}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users}) as const

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){ return {...u, followed: true} }
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){return { ...u, followed: false}}
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}