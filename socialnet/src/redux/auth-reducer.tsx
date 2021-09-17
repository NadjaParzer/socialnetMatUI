import { Dispatch } from "redux"
import { authAPI } from "../api/api"


export type UserAuthType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}

type UserAuthActionType = ReturnType<typeof setAuthData> 

let initialState: UserAuthType  = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state: UserAuthType = initialState, action: UserAuthActionType): UserAuthType => {
  switch (action.type) {
      case 'SET_USER_DATA':
          return {
            ...state,
            ...action.data,
            isAuth: true
          }
      default:
          return state
  }
}

export const setAuthData = (userId: number, email: string, login: string) => ({type: 'SET_USER_DATA', data: {userId, email, login} }) as const

export const getAuthUserDataThunk = () => (dispatch: Dispatch) => {
  authAPI.getMe()
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data
          dispatch(setAuthData(id, email, login))
        }
      }) 
}