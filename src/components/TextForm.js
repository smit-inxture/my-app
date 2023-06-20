import React, {useState} from 'react'


export default function TextForm(props) {
    const handelUpClick = () => {

        let NewText = text.toUpperCase();
        setText(NewText);
        props.showAlert("UpperCase Coverted Successfuly","success");

    }
    const handelLoClick = () => {
        let NewText = text.toLowerCase();
        setText(NewText);
        props.showAlert("LowerCase Coverted Successfuly","success");

    }
    const handelOnChange = (event) => {
        
        setText(event.target.value);

    }   

    const handelResClick = () => {
        let reverse = text.split(' ').reverse().join(' ');
        setText(reverse);    
        props.showAlert("Text Reversed Successfuly","success");
    }

    const [text, setText] = useState('Enter Text Here');
  return (
    <div className='container'>
        <div className="mb-3 " style={{color: props.mode ==='light'?'black':'white'}}>
            <label htmlFor="exampleFormControlTextarea1" > <h1>{props.text}</h1> </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" style={{
                backgroundColor: props.mode ==='light'?'white':'black',color: props.mode ==='light'?'black':'white'
                }} value={text} onChange={handelOnChange} rows="11"></textarea>
            <div className="container">
              <p>{text.split(' ').length} words  {text.length} characters</p>
              <p>time requeired to Read {0.008 * text.split(' ').length}</p>
        </div>
        </div>
        
        <button className="btn btn-primary mx-10 my-10 mx-2 " onClick={handelUpClick} >Covert to UpperCase</button>
        <button className="btn btn-primary mx-10 my-10" onClick={handelLoClick} >Covert to LowerCase</button>
        <button className="btn btn-primary mx-10 my-10 mx-2 " onClick={handelResClick} >Reverse text</button>
        <div className='container my-3 ' id="aws"></div>
        

    </div>
  )
}
