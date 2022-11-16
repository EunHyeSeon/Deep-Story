import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

import "./card.scss";

function Card({ postId, imageSource, title, text, url }) {

  const navigate = useNavigate();

  console.log("포스트아이디");
  console.log(postId);
  console.log(imageSource);


  const onClickImg = () => {
    navigate("/Detail",{
      state: {
        postId : postId
      }
    },{ replace: false})
  };


  return (
    // <div className="card text-center bg-dark animate__animated animate__fadeInUp">
    //   <div className="overflow">
    //     <img src={imageSource} alt="a wallpaper" className="card-img-top" onClick={onClickImg}/>
    //   </div>
    //   <div className="card-body text-light">
    //     <h4 className="card-title"onClick={onClickImg} >{title} </h4>

        
    //   </div>
    // </div>
    <div class="grid-container">
  <div class="grid-col">
    <img src={imageSource} alt=""/>
    <div class="body-content">
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#" onClick={onClickImg} class="round-btn"><i class="fa fa-long-arrow-right"></i></a>
    </div>
  </div>
   {/* <div class="grid-col">
    <img src={imageSource} alt=""/>
    <div class="body-content">
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#" onClick={onClickImg} class="round-btn"><i class="fa fa-long-arrow-right"></i></a>
    </div>
  </div> 
    <div class="grid-col">
    <img src={imageSource} alt=""/>
    <div class="body-content">
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#" onClick={onClickImg} class="round-btn"><i class="fa fa-long-arrow-right"></i></a>
    </div>
  </div> */}
</div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;