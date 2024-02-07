import React from "react";
import yellow from "../../assets/yellow.png";
import salah from "../../assets/salah.png";
import sterling from "../../assets/sterling.png";
import united from "../../assets/united.png";
import kloop from "../../assets/kloop.png";
import yellow2 from "../../assets/yellow2.png";
import liverpool1 from "../../assets/liverpool1.png";
import teams from "../../assets/teams.png";
import city from "../../assets/city.png";

function Content() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 md:mx-16">
        <div className="mb-4 text-center">
          <img
            src={yellow}
            alt="News Image"
            className="mb-4 img-fluid rounded max-h-[250px] w-full"
          />
          <div className="text-center">
            <p className="font-bold text-left">
              DANIEL PODENCE WOLVERHAMPTON WANDERES CELEBRATE HIS GOAL MAKE
              PREMIER LEAGUE
            </p>
          </div>
        </div>

        <div className="mb-4 text-center">
          <img
            src={salah}
            alt="News Image"
            className="mb-4 img-fluid rounded max-h-[250px] w-full"
          />
          <div className="text-center">
            <p className="font-bold text-left">
              MOHAMMED SALAH OF LIVERPOOL LOOKS DEJECTED DURING THE PREMEIR
              LEAGUE
            </p>
          </div>
        </div>

        <div className="mb-4 text-center">
          <img
            src={sterling}
            alt="News Image"
            className="mb-4 img-fluid rounded max-h-[250px] w-full"
          />
          <div className="text-center">
            <p className="font-bold text-left">STERLING HATRICK FOR CHELSEA</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 md:mx-16">
        <div className="mb-4 text-center">
          <img
            src={united}
            alt="News Image"
            className="mb-4 img-fluid rounded max-h-[250px] w-full"
          />
          <div className="text-center">
            <p className="font-bold text-left">
              DANIEL PODENCE WOLVERHAMPTON WANDERES CELEBRATE HIS GOAL MAKE
              PREMIER LEAGUE
            </p>
          </div>
        </div>

        <div className="mb-4 text-center">
          <img
            src={kloop}
            alt="News Image"
            className="mb-4 img-fluid rounded max-h-[250px] w-full"
          />
          <div className="text-center">
            <p className="font-bold text-left">
              MOHAMMED SALAH OF LIVERPOOL LOOKS DEJECTED DURING THE PREMEIR
              LEAGUE
            </p>
          </div>
        </div>

        <div className="mb-4 text-center">
          <img
            src={yellow2}
            alt="News Image"
            className="mb-4 img-fluid rounded max-h-[250px] w-full"
          />
          <div className="text-center">
            <p className="font-bold text-left">STERLING HATRICK FOR CHELSEA</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 md:mx-16">
        <div className="mb-4 text-center">
          <img
            src={liverpool1}
            alt="News Image"
            className="mb-4 img-fluid rounded max-h-[250px] w-full"
          />
          <div className="text-center">
            <p className="font-bold text-left">
              DANIEL PODENCE WOLVERHAMPTON WANDERES CELEBRATE HIS GOAL MAKE
              PREMIER LEAGUE
            </p>
          </div>
        </div>

        <div className="mb-4 text-center">
          <img
            src={teams}
            alt="News Image"
            className="mb-4 img-fluid rounded max-h-[250px] w-full"
          />
          <div className="text-center">
            <p className="font-bold text-left">
              MOHAMMED SALAH OF LIVERPOOL LOOKS DEJECTED DURING THE PREMEIR
              LEAGUE
            </p>
          </div>
        </div>

        <div className="mb-4 text-center">
          <img
            src={city}
            alt="News Image"
            className="mb-4 img-fluid rounded max-h-[250px] w-full"
          />
          <div className="text-center">
            <p className="font-bold text-left">STERLING HATRICK FOR CHELSEA</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
