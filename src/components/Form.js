import { useState } from "react";
//passing the datas from Form.js to App.js through callback function getData
function Form({getData}) {
  //getting the weight value from form user entered
  const [weight, setWeight] = useState("");
  //getting the height value from form user entered
  const [height, setHeight] = useState("");
  //alert message setting 
  const [alert, setAlert] = useState(false);
  const onSubmit = (e) => {
    //do not allow to  refresh on the form
    e.preventDefault();
    //checking the validation isNaN -is Not a Number
    if (isNaN(weight) || isNaN(height)) {
      console.log("Not a valid input");
      // this if condition for wrong datas entered by user 
      setAlert(true);
    } else {
      //here passing the parameter datas are arrived in App.js onFormSub = (w, h) =>
      getData(weight, height);
      // this else condition works for correct datas where entered
      setAlert(false);
      //for clearing text fields  data when pressed get bmi button
      setHeight("");
      setWeight("");
      // console.log(height);
      // console.log(weight);
    }
  };
//this is the method for conditional rendering
  // let alertMessage;
  // if (alert) {
  //   alertMessage = (
  //     <div className="alert alert-danger" role="alert">
  //       plz enter valid datas
  //     </div>
  //   );
  // } else {
  //   alertMessage = "";
  // }
  return (
    
      <div className="col-sm-4 shadow rounded px-5">
        <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
        {/* moving to onSubmit function  */}
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Weight(kg) :</label>
                {/*  value={weight} means the state value and
                 onChange={(e) => setWeight(e.target.value)} is the changing value or state updating value*/}
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Hight(m) :</label>
                 {/*  value={height} means the state value and
                 onChange={(e) => setHeight(e.target.value)} is the changing value or state updating value*/}
               <input
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="Get BMI"
          />
        </form>
        {/* {alert ? (
          <div className="alert alert-danger" role="alert">
            plz enter valid datas
          </div>
        ) : (
          ""
        )} */}

        {/* alert message */}
        {alert&&<div className="alert alert-danger" role="alert">
            plz enter valid datas
          </div>}
      </div>
  
  );
}

export default Form;
