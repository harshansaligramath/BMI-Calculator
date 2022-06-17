import "./App.css";
import Form from "./components/Form";
import BmiScore from "./components/BmiScore";
import BmiList from "./components/BmiList";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  //you need to loss or increse weight section
  const [changeWeight, setChangeWeight] = useState({ wight: "", type: "" });
  // for getting and printing bmi
  const [bmi, setBmi] = useState("00");
  // for getting and printing over weight section
  // and passing into bmi score
  const [bmiType, setBmiType] = useState("Not Calculated");
  // initial object for setting bmiRange
  const [bmiRange, setBmiRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });

  const onFormSub = (w, h) => {
    // function calling for calculating Bmi
    let b = calBmi(w, h);
    // setting/updating the calculated Bmi value into setBmi
    setBmi(b);
    // function calling for which category on Bmi
    // let bType = weightType(b);
    //or

    setBmiType(weightType(b));
    // setting/updating the conditioned bmi to setBmiType
    // setBmiType(bType);
    console.log(w, h);
    //function calling for calWeight
    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    // setting/updating the calculated range value
    setBmiRange(range);
    //fn calling for change weight
    setChangeWeight(weightChange(b, w, range));
    setShow(true);
  };
  //calculating Bmi
  // toFixed(2) used for two points after decimal value
  const calBmi = (w, h) => (w / (h * h)).toFixed(2);
  //calculating function for bmiRange
  const calWeight = (b, h) => (b * h * h).toFixed(2);
  //increase or decrease weight fn
  const weightChange = (b, w, range) => {
    let changeObj;
    if (b > 24.9) {
      changeObj = {
        wight: (w - range.normal.high).toFixed(2),
        type: "positive",
      };
      return changeObj;
    } else if (b < 18.5) {
      changeObj = {
        wight: (range.normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeObj;
    } else {
      changeObj = { wight: 0, type: "normal" };
      return changeObj;
    }
  };
  // checking for which category Bmi
  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Under weight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity class II";
    } else if (bmi > 39.9) {
      return "Obesity class III";
    }
  };
  //main return from app.js
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          {/* getting dats from Form.js through callback functions  */}
          <Form getData={onFormSub} />
        </div>
        {show && (
          <div className="row justify-content-center mt-5 mx-2">
            <div className="col-12 col-sm-6 mb-5">
              {/* passing the values of bmi,bmiType,and changeWeight via by props  to BmiScore.js*/}
              <BmiScore
                bmiNo={bmi}
                bmiName={bmiType}
                changeWeight={changeWeight}
              />
            </div>
          </div>
        )}
        {show && (
          <div className="row justify-content-center mt-5 mx-2">
            <div className="col-12 col-sm-6 mb-5">
              {/* passing props to Bmi List */}
              <BmiList range={bmiRange} bmi={bmi} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
