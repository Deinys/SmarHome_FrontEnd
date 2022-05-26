import React from "react";

import AlarmB from "/src/img/alarm-blanca.png";
import Water from "../../img/water-azul.png";
import BombilloBlanco from "../../img/bombillo-blanco.png";
import TempB from "../../img/term-blanco.png";

import { Stack } from "@mui/material";
import Card from "../components/Card.jsx";

import { Context } from "../context/appContext";
import LightChart from "../components/LightChart.jsx"

const Home = () => {
  let context = React.useContext(Context);
  let currentTab = context.store.currentTab

  return (
    <div className="container-cuerpo">
      <div className="contenedor-arriba m-2">
        <Stack flexDirection={"row"}>
          {context.store.collection.map((eachObj) => {
            return (
              <Card
                key={eachObj.name}
                id={eachObj.id}
                device={eachObj.device}
                name={eachObj.name}
                status={eachObj.status}
              />
            );
          })}
        </Stack>

        <Stack flexDirection={"row"}>
          {currentTab === "light" ? (
            <LightChart device={currentTab} />
          ) : currentTab === "sonar" ? (
            <LightChart device={currentTab} />
          ) : currentTab === "thermostat" ? (
            <LightChart device={currentTab} />
          ) : currentTab === "motion" ? (
            <LightChart device={currentTab} />
          ) : null}
        </Stack>

        <div className="row m-4 p-4">
          {/* First light control card */}
          <div className="quinta-col col bg-primary m-4 p-4 rounded-3">
            <div className="row">
              <div className="col">
                <div className="div">
                  <img src={BombilloBlanco} alt="" height="50" width="50" />
                </div>
                <div className="div">
                  <p className="text-white">Light</p>
                </div>
                <div className="div">
                  <p className="text-white">Interior Light</p>
                </div>
                <div className="div">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input border border-white border border-white"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
          {/* SEGUNDO CUADRO */}
          <div className="quinta-col col bg-primary m-4 p-4 rounded-3">
            <div className="row">
              <div className="col">
                <div className="div">
                  <img src={BombilloBlanco} alt="" height="50" width="50" />
                </div>
                <div className="div">
                  <p className="text-white">Light</p>
                </div>
                <div className="div">
                  <p className="text-white">Exterior Light</p>
                </div>
                <div className="div">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input border border-white border border-white"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
          {/* TERCER CUADRO */}
          <div className="quinta-col col bg-primary m-4 p-4 rounded-3">
            <div className="row">
              <div className="col">
                <div className="div">
                  <img src={Water} alt="" height="50" width="50" />
                </div>
                <div className="div">
                  <p className="text-white">Water Level</p>
                </div>
                <div className="div">
                  <p className="text-white">Water Tank</p>
                </div>
                <div className="div">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input border border-white border border-white"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
        <div className="row m-4 p-4">
          {/* CUERTO CUADRO */}
          <div className="quinta-col col bg-primary m-4 p-4 rounded-3">
            <div className="row">
              <div className="col">
                <div className="div">
                  <img src={TempB} alt="" height="50" width="50" />
                </div>
                <div className="div">
                  <p className="text-white">Temperature</p>
                </div>
                <div className="div">
                  <p className="text-white">Temperature</p>
                </div>
                <div className="div">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input border border-white border border-white"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
          {/* QUINTO CUADRO */}
          <div className="quinta-col col bg-primary m-4 p-4 rounded-3">
            <div className="row">
              <div className="col">
                <div className="div">
                  <img src={AlarmB} alt="" height="50" width="50" />
                </div>
                <div className="div">
                  <p className="text-white">Motion</p>
                </div>
                <div className="div">
                  <p className="text-white">Motion Sensor</p>
                </div>
                <div className="div">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input border border-white border border-white"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
