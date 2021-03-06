import "./topbar.css";
import { useContext } from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contex/AuthContext.js";

export default function Topbar() {

  const { user } = useContext(AuthContext);
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">Social</span>
        </Link>
        
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, posts, vider"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBange">1</span>
          </div>
          <Link to="/messenger" style={{textDecoration: "none"}}>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBange">2</span>
          </div>
          </Link>

          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBange">4</span>
          </div>
        </div>
        <Link to={`/profile/${user?.username}`}>
          <img src={user?.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="photo" className="topbarImg" />
        </Link>
        
      </div>
    </div>
  );
}
