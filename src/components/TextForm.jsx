import React,{useState} from 'react'

export default function TextForm(props) {
  const[text,setText]=useState("");

const handleonchange = (event) => {
  setText(event.target.value);
};

const handleupcase=()=>{
  const newText=text.toUpperCase();
  setText(newText);
props.showAlert("converted to uppercase","success")
}

const handlelocase=()=>{
  const newText=text.toLowerCase();
  setText(newText);
 props. showAlert("converted to lowercase","success")
}
const handleclearcase=()=>{
  const newText="";
  setText(newText);
   props. showAlert("cleared text","success")
  
}

const toAlternatingCase=(str)=>{
 
return str
      .split("")
      .map((char,index)=>
        index % 2==0
      ?char.toUpperCase()
      :char.toLowerCase())
      .join("");
    
};

     const handleAlternatingCase=()=>{
  const newText=toAlternatingCase(text);
  setText(newText);
    props. showAlert("Converted to alternating case","success")
}

const handleCopy=()=>{
  var newtext=document.getElementById("myBox");
  newtext.select();
  navigator.clipboard.writeText(newtext.value);
    props. showAlert("Copied to clipboard","success")
}
const handleExtraSpaces=()=>{
  let newtext = text.trim().split(/\s+/);
  setText(newtext.join(" "));
    props. showAlert("Extra spaces removed","success")
};



  return (
    <>
    <div className="container text-start mb-3 " style={{color:props.mode==='dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
       <div className="mb-3">
       <label htmlFor="myBox" className="form-label">Example textarea</label>
       <textarea className="form-control mb-3" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}   value={text} onChange={handleonchange} id="myBox" rows="7"></textarea>
       <button className="btn btn-primary mx-1" type="button"  onClick={handleupcase}>Change to Uppercase</button>
      <button className="btn btn-primary mx-1" type="button"  onClick={handlelocase}>Change to lowercase</button>
      <button className="btn btn-primary mx-1" type="button"  onClick={handleclearcase}>Clear</button>
      <button className="btn btn-primary mx-1" type="button"  onClick={handleAlternatingCase}>aLtErNaTiNg cAsE</button>
      <button className="btn btn-primary mx-1" type="button"  onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" type="button"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       </div>
   </div>

   <div className="container my-3 text-start " style={{color:props.mode==='dark'?'white':'black'}}>
<h2>Your summary</h2>
<p>{text.split(" ").length}words and {text.length}characters</p>
<p>{0.008*text.split(" ").length} Minutes to read</p>
<h3>Preview</h3>
<p>{text.length>0?text:"enter something "}</p>
   </div>
    </>
  )
}
