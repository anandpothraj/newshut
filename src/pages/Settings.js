import React, { useContext, useEffect } from 'react';
import { Theme } from '../Context';
import { useNavigate } from 'react-router-dom';

const Setting = () => {

  const navigate = useNavigate();
  const {customTheme, setCustomTheme, css, setOnline } = useContext(Theme);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const primaryColors = [
    "#f4717f",
    "#21c392",
    "#f3954f",
    "#8845f4",
    "#b1ff05",
  ];

  const logout = () => {
    if (window.confirm("Are you sure you want LOGOUT?")) {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("mode");
      localStorage.removeItem("customTheme");
      localStorage.removeItem("view");
      setOnline(false);
      navigate('/getstarted');
    }
  }

  useEffect(() => {
    if(userInfo === null){
      navigate("/getstarted");
    }
  })

  return (
    <div className='settings'>
      <h6 className='settingHeading' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Settings</h6>
      <hr style={(customTheme !== "#ffffff")?{backgroundColor:customTheme,height:"3px"}:{backgroundColor:css,height:"3px"}}/>
      <div className="selectTheme">
        <p>PLEASE SELECT A THEME</p>
        <div className="primaryTheme" style={(customTheme !== "#ffffff")?{border:`1px solid ${customTheme}`}:{border:`1px solid ${css}`}}>
          {primaryColors.map((color, index) => (
              <div style={{backgroundColor:color}} className="color" key={index} onClick={()=>{setCustomTheme(color);localStorage.setItem('customTheme',color)}}/>
          ))}
        </div>
      </div>
      <div className="customPicker">
        <p className='customPickerText'>SELECT CUSTOM THEME COLOR</p>
        <div className="customPickerInfo" style={(customTheme !== "#ffffff")?{border:`1px solid ${customTheme}`}:{border:`1px solid ${css}`}}>
          <input className='customColorPicker' type="color" value={customTheme} onChange={(e)=>{setCustomTheme(e.target.value);localStorage.setItem('customTheme',customTheme)}}/><span className='customSpan'>{customTheme}</span>
        </div>
      </div>
      <button className='logoutBtn' onClick={logout}>logout</button>
    </div>
  )
}

export default Setting;


