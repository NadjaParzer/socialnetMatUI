import { Dispatch } from "redux"
import { usersAPI } from "../api/api"


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
    isFetching: boolean,
    followingInProgress: Array<number>
}

type UsersActionType = ReturnType<typeof follow> | ReturnType<typeof unfollow> 
                       | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage>
                       | ReturnType<typeof setUsersTotalCount> | ReturnType<typeof toggleIsFetching>
                       | ReturnType<typeof toggleisFollowing>

let initialState: UsersPageType = {
    users: [],
    pageSize:10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const follow = (userID: number) => ({type: 'FOLLOW', userID}) as const
export const unfollow = (userID: number) => ({type: 'UNFOLLOW', userID}) as const
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users}) as const
export const setCurrentPage = (currentPage:number) => ({type: 'SET_CURRENT_PAGE', currentPage}) as const
export const setUsersTotalCount = (totalCount:number) => ({type: 'SET_USERS_TOTAL_COUNT', totalCount}) as const
export const toggleIsFetching = (isFetching:boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching}) as const
export const toggleisFollowing = (isFetching:boolean, userId: number) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId}) as const

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
            usersAPI.getUsers(currentPage, pageSize).then(response => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(response.items))
                dispatch(setUsersTotalCount(response.totalCount))
            })
    }
}

export const followThunk = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleisFollowing(true, userId))
                usersAPI.follow(userId)
                  .then(res => {
                    dispatch(follow(userId))
                    dispatch(toggleisFollowing(false, userId))
                  })
    }
}
export const unfollowThunk = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleisFollowing(true, userId))
                usersAPI.unfollow(userId)
                  .then(res => {
                    dispatch(unfollow(userId))
                    dispatch(toggleisFollowing(false, userId))
                  })
    }
}

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
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId),

            }
        default:
            return state
    }
}