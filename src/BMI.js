import { useState } from "react"

//BMI
function Bodyweight(){

//Height

const [height,setheight]=useState()

function handleheight(event){
    setheight(event.target.value)
}
// Weight
const [weight,setweight]=useState()

function handleweight(event){
    setweight(event.target.value)
}
//submit
const [error, setError] = useState('')
const[bval,setbval]=useState()
function submit(){
    if (!height || !weight) {
        setError("Please enter both height and weight.");
        return;
      }
    var bheight = height/100
    var bmi = weight/(bheight*bheight)
    var res = bmi.toFixed(1)
     setbval(res)
     fresult(res)
     setError('')
}

//Result

const[result,setresult] = useState()

function fresult(bval){
    if(bval<18.5){
        setresult("You are Underweight")
    }
    else if(bval>18.5&&bval<25){
        setresult("You are Normal Weight")
    }
    else if(bval>25&& bval<30){
        setresult("You are Overweight")
    }
    else if(bval>30){
        setresult("You are obese")
    }
}
function reload(){
    setheight("")
    setweight("")
    setbval("")
    setresult("")
    setError('')


}


    return(
        <div className="container">
            <div>
            <h2 className="head">BMI CALCULATOR</h2>
            </div>
            
            <label className="lab">Your Height(in CM)</label><br></br>
            <input value={height} onChange={handleheight} placeholder="Enter your height"></input>
            <br></br>
            <br></br>
            <label className="lab">Your Weight(in KG)</label><br></br>
            <input value={weight} onChange={handleweight} placeholder="Enter your weight"></input>
            <br></br>
            <br></br>
            <div className="block">
            <button onClick={submit} className="btn1">Submit</button>
            <br></br>
            <br></br>
            <button onClick={reload} className="btn2"> Reload</button>

            </div>
            
            
            <h2>Your BMI is:{bval} </h2>
            <p>{result}</p>
            <p>{error}</p>
            
        </div>
    )

}
export default Bodyweight