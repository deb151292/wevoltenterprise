
import { useState } from "react";
export const GoogleSheetEmbed = () => {
    const src = 'https://docs.google.com/spreadsheets/d/1IUeMIVyQHVavq6h7GB1nzzIW2ajY31HM9L_rxt6KJmQ/edit?usp=sharing';
    return (
        <div className="container" >
             <iframe
                src={src}
                height="850px"
                width="100%"
                title="WeVolt Sheet"
                style={{ border: '10px' }}
            />
        </div>
    );
};





export const Auth = (props) => {
    const [password, setPassword] = useState('');
  
    const handleSubmit = () => {
      setPassword((prevPassword) => {
        props.userAuth(prevPassword);
        return prevPassword;
      });
    };
  
    const handleChange = (event) => {
      const newValue = event.target.value;
      setPassword(newValue);
    };
  
    return (
      <div className="input-group mb-3" style={{ marginTop: '100px'}}>
        <span className="input-group-text">Password</span>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          value={password}
          onChange={handleChange}
          disabled={props.disabled}
        />
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  };
    






