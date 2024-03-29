// import React from 'react'

// function BmiScore(props) {
//   console.log(props);
//   //de structuring
//   const {bmiNo,bmiName}=props
    
//   return (
//     <div>
//       {/* BmiScore is {props.bmiNo}<br></br>
//       Bmi Type is {props.bmiName} */}
//       {/* //after de structuring */}
//        BmiScore is {bmiNo}<br></br>
//       Bmi Type is {bmiName}

//     </div>
//   )
// }

// export default BmiScore


import React from 'react'
//getting the values of bmiNo,bmiName,changeWeight from App.js
function BmiScore({bmiNo,bmiName,changeWeight}) {
  // console.log(changeWeight);
  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmiNo}</div>
      </div>
      <div className="fs-3 fw-bold text-primary">{bmiName}</div>
      {changeWeight.type === "positive" && (
        <div className="fs-4">"You need lose <span className="fw-bold">{changeWeight.wight} kg"</span> </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4">"You need gain <span className="fw-bold">{changeWeight.wight} kg"</span> </div>
      )}
       {changeWeight.type === "normal" && (
        <div className="fs-4">"You weight is Normal,Good for you" </div>
      )}
     
      
    </div>
  )
}

export default BmiScore


