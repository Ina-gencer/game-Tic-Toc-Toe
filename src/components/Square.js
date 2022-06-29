// import React from 'react';
import React, { useEffect } from 'react';
import { gsap } from "gsap";
import './Square.css';

const Square = (props) => {

    let color = ["#F2D7D9", "#D3CEDF", "#9CB4CC"]
    useEffect(() => {
        gsap.to('.btn', {   
         duration: 2.5,
         rotation:180,
         stagger: .3,
         backgroundColor: function(i) {
            return color[i%3]
         }
        });
      });
    return (
            <button className='btn' onClick={props.onClick} > {props.value} </button>
       
    );
}

export default Square;
// let color = ["red", "blue", "green"]
//gsap.to()