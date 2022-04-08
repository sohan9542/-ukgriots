import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import ar1 from "../images/la_plane.png";
import ar2 from "../images/la_plane-arrival.png";
import calender from "../images/Vector.png";
import seat from "../images/seat.png";
import TextField from "@mui/material/TextField";
import {RiSearchLine} from "react-icons/ri"
const Search = () => {
  return (
    <div className=" bg-gray-100 pb-40">
      <div className="flex items-center justify-center">
        <div className="container">
          <div className=" h-80 bg-white mt-32 shadow-md rounded-3xl">
            <div className=" py-3 w-full flex items-center justify-center border-b gap-3">
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="Return"
              >
                <FormControlLabel
                  value="Return"
                  control={<Radio />}
                  label="Return"
                />
                <FormControlLabel
                  value="One Way"
                  control={<Radio />}
                  label="One Way"
                />
                <FormControlLabel
                  value="Multi Way"
                  control={<Radio />}
                  label="Multi Way"
                />
              </RadioGroup>
            </div>
         <div className=" flex items-center gap-2 px-6">
         <div className=" grid grid-cols-5 gap-3 pt-20 ">
              <div>
                <div className=" flex items-center gap-2 pb-2">
                  <img src={ar1} alt="" />{" "}
                  <h6 className=" font-semibold text-gray-700 text-sm">From</h6>
                </div>
                <TextField
                  id="standard-basic"
                  label="Flight from?"
                  variant="standard"
                />
              </div>
              <div>
                <div className=" flex items-center gap-2 pb-2">
                  <img src={ar2} alt="" />{" "}
                  <h6 className=" font-semibold text-gray-700 text-sm">To</h6>
                </div>
                <TextField
                  id="standard-basic"
                  label="Where to?"
                  variant="standard"
                />
              </div>
              <div>
                <div className=" flex items-center gap-2 pb-4">
                  <img src={calender} alt="" />{" "}
                  <h6 className=" font-semibold text-gray-700 text-sm">Depart</h6>
                </div>
                <TextField
                  id="standard-basic"
                  label="DD/MM/YYYY"
                  variant="standard"
                />
              </div>
        
              <div>
                <div className=" flex items-center gap-2 pb-4">
                  <img src={calender} alt="" />{" "}
                  <h6 className=" font-semibold text-gray-700 text-sm">Return</h6>
                </div>
                <TextField
                  id="standard-basic"
                  label="DD/MM/YYYY"
                  variant="standard"
                />
              </div>
              <div>
                <div className=" flex items-center gap-2">
                  <img src={seat} alt="" />{" "}
                  <h6 className=" font-semibold text-gray-700 text-sm">Cabin Class & Travelers</h6>
                </div>
                <TextField
                  id="standard-basic"
                  label="1 adult, Economy"
                  variant="standard"
                />
              </div>
            </div>
       <div className=" flex items-center justify-center  h-full">
       <button className=" bg-pr px-2 w-16 rounded-md py-3 mt-16 flex items-center justify-center">
<RiSearchLine className="w-6 h-6 text-white"/>
            </button>
       </div>
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
