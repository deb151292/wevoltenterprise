import Home from "./Home";
import { Auth } from "./OtherPage";
import { GoogleSheetEmbed } from "./OtherPage";
import React,{useState} from 'react';




export default function RoutePages(props){
    return (
      <div className= "container my-3">
          {props.page === 'home' && <Home name = "We Volt Enterprise" />}
          {props.page === 'business' && <AuthRoute handlepage= {props.handlepage} showalert = {props.showalert} />}
        </div>
    );
    }


    export function AuthRoute(props) {
      const [passvalid, setpassvalid] = useState(false);
      const [isblankpass, setisblankpass] = useState('');

    
      const userAuth = (password) => {
        setpassvalid(password === 'wevoltadmin');
        setisblankpass((prevIsBlankPass) => {
          const isBlank = password === '';

          if (isBlank) {
            props.showalert("danger", "Please enter password");
          } else if (prevIsBlankPass !== '' && password !== 'wevoltadmin') {
            props.showalert("danger", "You Are Unauthorize ");
          } else if (password === 'wevoltadmin') {
            props.showalert("success", "Welcome to We Volt");
          }
          return password;
        });
      };
     
      return (
        <>
            <Auth userAuth={userAuth} handlepage={props.handlepage} disabled = {passvalid}/>
            { passvalid &&
            <button
              className={"btn btn-warning"}
              onClick={() => {
                props.handlepage("home");
              }}
            >
              SignOut
            </button>
            }
          <div className="container my-3">
            {passvalid && <GoogleSheetEmbed />}
          </div>
        </>
      );
    }
