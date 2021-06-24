import React, {useEffect, useState} from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function ScrollTopBtn() {
    let style = { display: "block",
        position: "fixed",
        bottom: "20px",
        right: "3%",
        zIndex: "99",
        border: "none",
        borderRadius: "10%",
        outline: "none",
        backgroundColor: "#2e2e2e",
        color: "white",
        cursor: "pointer",
        padding: "15px",
        fontSize: "1em",
        opacity: "70%", }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    
      const [offset, setOffset] = useState(0);

      useEffect(() => {
        window.onscroll = () => {
          setOffset(window.pageYOffset)
        }
      }, []);
    
      // console.log(offset);

      if (offset < 150) style = {opacity: 0}

    return (
    <>
      <button onClick={topFunction} style={style}> <FontAwesomeIcon icon={faArrowUp} /> </button>
    </>
  );
}




export default ScrollTopBtn