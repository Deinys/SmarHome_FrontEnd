import React from "react";
import AlarmB from "/src/img/alarm-blanca.png";
import AlarmA from "/src/img/alarm-azul.png";
import Temperature from "../../img/term-azul.png";
import Water from "../../img/water-azul.png";
import BombilloAzul from "../../img/bombillo-azul.png"
import BombilloBlanco from "../../img/bombillo-blanco.png"


const Contenido = () => {
    return (
        <div className="principal p-5">
            <div className="container">
                <p className="text-white fs-1">Lights</p>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className=" interior-light col-4 m-4  rounded-3">
                            <p className="text-white fs-4">Interior</p>
                            <img src={BombilloAzul} alt="" height="80" width="80" />
                        </div>
                        <div className=" exterior-light col-4 m-4  rounded-3 " >
                            <p className="text-white fs-4">Exterior</p>
                            <img src={BombilloBlanco} alt="" height="80" width="80" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="text-white fs-1">Sensors</p>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="color-water col-4 m-4 rounded-3">
                            <p className="text-white fs-4">Tank level</p>
                            <img src={Water} alt="" height="80" width="80" />
                        </div>
                        <div className="color-temp col-4 m-4 rounded-3" >
                            <p className="text-white fs-4">Temperatura</p>
                            <img src={Temperature} alt="" height="80" width="80" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <p className="text-white fs-1">Motion Alarm</p>
                    <div className="row justify-content-center">
                        <div className="interior-alarm col-4 m-4 rounded-3">
                            <p className="text-white fs-4">Interior Motion Alarm</p>
                            <img src={AlarmA} alt="" height="80" width="80" />
                        </div>
                        <div className="exterior-alarm col-4 m-4 rounded-3" >
                            <p className="text-white fs-4">Exterior Motion Alarm</p>
                            <img src={AlarmB} alt="" height="80" width="80" />
                        </div>
                    </div>
            </div>
        </div >
    );
};

export default Contenido;