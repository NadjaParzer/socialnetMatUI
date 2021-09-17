import { connect } from "react-redux";
import React from 'react'
import { AppStateType } from '../../redux/redux-store'
import { Header } from './Header'
import { getAuthUserDataThunk, setAuthData } from "../../redux/auth-reducer";

class HeaderAPI extends React.Component<HeaderPropsType> {
  componentDidMount() {
    console.log(this.props)
    this.props.getAuthUserDataThunk()
    console.log(this.props)
  }
  
  render() {
    return <Header isAuth={this.props.isAuth} userId={this.props.userId} login={this.props.login} />
  }
}

type OwnPropsType = {

}
type MapStatePropsType = {
  isAuth: boolean,
  login: string | null,
  userId: null | number
}
type MapDispatchToPropsType = {
  getAuthUserDataThunk:() => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId 
  }
}
export type HeaderPropsType = MapStatePropsType & MapDispatchToPropsType & OwnPropsType
export const HeaderContainer = connect<MapStatePropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  getAuthUserDataThunk
})(HeaderAPI) 