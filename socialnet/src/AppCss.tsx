import {makeStyles} from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { isWhiteSpaceLike } from 'typescript';


export const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  toolbar: {
    backgroundColor: "#117B80",
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroungRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  mainContent: {},
  navbar: {
    flexGrow: 6
  },
  footer: {
    backgroundColor: "#117B80",
    marginTop: "740px",
  },
  avatarLarge: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  newPost: {
    width: "99%",
    height: 50
  },
  marginBottom: {
    marginBottom: "10em"
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    "&.active": {
      color: "orange",
      fontWeight: "bold"

    }
  },
  lastMessage: {
    marginLeft: "10em",

  },
  navLinkDialogs: {
    color: "black",
    textDecoration: "none",
    "&.active": {
      color: "grey",
      fontWeight: "bold"
    },
  },
  btnPost:{
    marginLeft:"84em"
  }
}
))