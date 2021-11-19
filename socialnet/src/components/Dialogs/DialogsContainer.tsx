import React from "react";
import { DialogsPageType, sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

//type DialogsType = {
  //  dialogs?: Array<DialogType>,
   // newMessageText?: string,
   // messages?: Array<MessageType>,
   // dispatch?:Dispatch
//}

type MapStatePropsType = {
  dialogsPage: DialogsPageType,
  isAuth: boolean
}

type MapDispatchToPropsType = {
  onNewMessageChange: (text:string)=> void
  onSendMessageClick:() => void
}
export type DialogsPagePropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsType => {
  return {
    onNewMessageChange: (text) => {dispatch(updateNewMessageTextActionCreator(text))},
    onSendMessageClick: () => {dispatch(sendMessageActionCreator())}
  }
}
export const DialogsContainer = withAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(Dialogs))