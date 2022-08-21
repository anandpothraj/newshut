import React, { useContext, useEffect } from 'react';
import { Theme } from '../Context';
import { useNavigate } from 'react-router-dom';

const Setting = () => {

  const navigate = useNavigate();
  const {customTheme, setCustomTheme, css, userInfo } = useContext(Theme);

  const primaryColors = [
    "#f4717f",
    "#21c392",
    "#f3954f",
    "#8845f4",
    "#b1ff05",
  ];

  useEffect(() => {
    if(!userInfo){
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
    </div>
  )
}

export default Setting;


