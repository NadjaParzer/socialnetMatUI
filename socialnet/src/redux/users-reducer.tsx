

type LocationType = {
    city: string,
    country: string
}
export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    location: LocationType,
    photos: {
        small: string,
        large: string
    }
}

export type UsersPageType = {
    users: Array <UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

type UsersActionType = ReturnType<typeof follow> | ReturnType<typeof unfollow> 
                       | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage>
                       | ReturnType<typeof setUsersTotalCount> | ReturnType<typeof toggleIsFetching>

let initialState: UsersPageType = {
    users: [],
    pageSize:10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
    // users: [
    //     { id: 1, followed: true, fullName: "Nadja", status: "Search job", location: {city: 'SPb', country: 'Russia'} },
    //     { id: 2,  followed: false,fullName: "Maria", status: "I am  a Boss", location: {city: 'Moskva', country: 'Russia'} },
    //     { id: 3,  followed: false,fullName: "Pavel", status: "Search job", location: {city: 'Minsk', country: 'Belarus'} },
    //     { id: 4,  followed: false,fullName: "Alex", status: "Search job", location: {city: 'Vienna', country: 'Austria'} },
    //     { id: 5,  followed: true,fullName: "Anna", status: "Search job", location: {city: 'Berlin', country: 'Germany'} },
    //     { id: 6,  followed: true,fullName: "Serg", status: "Search job", location: {city: 'Wyborg', country: 'Russia'} },
    //     { id: 7,  followed: false,fullName: "Sofie", status: "Search job", location: {city: 'Kasan', country: 'Russia'} },
    //     { id: 8,  followed: false,fullName: "Denis", status: "Search job", location: {city: 'London', country: 'UK'} },
    //     { id: 9,  followed: true,fullName: "Leon", status: "Search job", location: {city: 'SPb', country: 'Russia'} },
    // ]
}

export const follow = (userID: number) => ({type: 'FOLLOW', userID}) as const
export const unfollow = (userID: number) => ({type: 'UNFOLLOW', userID}) as const
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users}) as const
export const setCurrentPage = (currentPage:number) => ({type: 'SET_CURRENT_PAGE', currentPage}) as const
export const setUsersTotalCount = (totalCount:number) => ({type: 'SET_USERS_TOTAL_COUNT', totalCount}) as const
export const toggleIsFetching = (isFetching:boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching}) as const

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){ 
                        return {...u, followed: true} 
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){return { ...u, followed: false}}
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_USERS_TOTAL_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}