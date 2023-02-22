import React from "react";
import {ProgressBar} from "react-loader-spinner"


const Loading = ()=>{
return(
    <div>
       <ProgressBar
  height="100"
  width="100"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/>
    </div>
)
};

export default Loading;