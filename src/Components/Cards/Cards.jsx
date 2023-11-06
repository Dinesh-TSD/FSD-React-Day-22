import React from 'react'
import './Card.css';


const Card = (props) => {

  const { data } = props

  return (
    <>
      <div className="card">
        <div id='free'>{data.headcontent}</div>
        <div id='head'>${data.cost}/Month</div>
        <hr />
        <div id='content'><img src={data.im} alt="" />{data.futures.f1}</div>
        <div id='content'><img src={data.im} alt="" />{data.futures.f2}</div>
        <div id='content'><img src={data.im} alt="" />{data.futures.f3}</div>
        <div id='content'><img src={data.im} alt="" />{data.futures.f4}</div>
        <div id='content' style={{ color: `${data.color2}` }}><img src={data.im2} alt="" />{data.futures.f5}</div>
        <div id='content' style={{ color: `${data.color2}` }}><img src={data.im2} alt="" />{data.futures.f6}</div>
        <div id='content' style={{ color: `${data.color2}` }}><img src={data.im2} alt="" />{data.futures.f7}</div>
        <div id='content' style={{ color: `${data.color3}` }}><img src={data.im3} alt="" />{data.futures.f8}</div>

        <button >{data.buten}</button>
      </div>
    </>
  )
}

export default Card;