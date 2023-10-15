import './Gallery.css';
import crown from './Assets/crown (1).jpg'
import oneimg from './Assets/faceQuestionmark.jpg'
import ReactConfetti from 'react-confetti';
import { Fade } from "react-awesome-reveal"
import { useState } from 'react';
import './new.css'


function Gallary() {
  const [row1col, setRow1Col] = useState([{ quot: "next you", flag: false }, { quot: "next you", flag: false }, { quot: "next you", flag: false }]);
  const [row2col, setRow2Col] = useState([{ quot: "next you", flag: false }, { quot: "next you", flag: false }, { quot: "next you", flag: false }]);


  const onhoverHandle = async (e, i) => {
    const { id } = e.target;
    const changableRow = [...row1col];
    changableRow[i][id] = true;
    setRow1Col(changableRow);

  }
  const onNoHover = async (e, i) => {
    const { id } = e.target;
    const changableRow = [...row1col];
    changableRow[i][id] = false;
    setRow1Col(changableRow);

  }
  const onhoverHandle2 = async (e, i) => {
    const { id } = e.target;
    const changableRow = [...row2col];
    changableRow[i][id] = true;
    setRow2Col(changableRow);

  }
  const onNoHover2 = async (e, i) => {
    const { id } = e.target;
    const changableRow = [...row2col];
    changableRow[i][id] = false;
    setRow2Col(changableRow);

  }

  return (
    <>


      <div className="card1Section" id='GallaryTop'>
       
    <div className="row1 mt-5 animate__fadeInBottomRight">
          {row1col.map((column, i) => {
            return <div className="card1" key={i}>
              {/* <Fade delay={10}> */}
                <div className="card1Head">
                <img className="img1" id="flag" onMouseOver={(e) => { onhoverHandle(e, i) }} onMouseOut={(e) => { onNoHover(e, i) }} src={oneimg} alt="card1img" />
                <img src={crown} alt="card1img" className="img2" />
                {column.flag ? <label className='dis'>you are the next winner</label> : ""}
              </div>
              {/* </Fade> */}
              <div className="card1body">
                <h4>Big Win</h4>
                {/* <p className='right-10'>Rohith</p> */}
                <p>Everyone is a Winner.</p>
              </div>
            </div>
          })}
        </div>

        <div className="row1 ">
          {row2col.map((column, i) => {
            return <div className="card1 " key={i}>

{/* <Fade delay={50}>  */}
<div className="card1Head">
                <img className="img1" id="flag" onMouseOver={(e) => { onhoverHandle2(e, i) }} onMouseOut={(e) => { onNoHover2(e, i) }} src={oneimg} alt="card1img" />
                <img src={crown} alt="card1img" className="img2" />
                {column.flag ? <label className='dis '>you are the next winner</label> : ""}
              </div>
              {/* </Fade> */}
              <div className="card1body">
                <h4 className=''>Big Win</h4>
                <p className=''>Everyone is a Winner.</p>
              </div>
            </div>


          })}
        </div>
    </div>
        
        
   
      


    </>
  );
}

export default Gallary;
