import React, {Fragment} from "react";

const Xucxac = (props) => {

    let {xucXacItem} = props

  return (
        <Fragment>
            <div className="scene">
                <div className="cube">
                    <img className="ml-3 cube__face front" style={{ width: "50px" }} src={xucXacItem.hinhAnh}/>
                    <img className="ml-3 cube__face back" style={{ width: "50px" }} src='./img/GameBauCua/bau.png'/>
                    <img className="ml-3 cube__face left" style={{ width: "50px" }} src='./img/GameBauCua/ga.png'/>
                    <img className="ml-3 cube__face right" style={{ width: "50px" }} src='./img/GameBauCua/ca.png'/>
                    <img className="ml-3 cube__face top" style={{ width: "50px" }} src='./img/GameBauCua/tom.png'/>
                    <img className="ml-3 cube__face bottom" style={{ width: "50px" }} src='./img/GameBauCua/cua.png'/>
                    
                </div>
            </div>
        </Fragment>
  );
};

export default Xucxac;
