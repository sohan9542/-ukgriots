import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import ar1 from "../images/la_plane.png";
import ar2 from "../images/la_plane-arrival.png";
import calender from "../images/Vector.png";
import seat from "../images/seat.png";
import TextField from "@mui/material/TextField";
import { RiSearchLine } from "react-icons/ri";
import Slider from "@mui/material/Slider";
import bplan from "../images/blane.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import check from "../images/check.png";
import wc from "../images/white check.png";
import gc from "../images/gray check.png";
import fill from "../images/Fill 1.png";
const Search = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [active, setactive] = useState(1);
  return (
    <div className=" bg-gray-100 pb-10 lg:pb-40">
      <div className="flex items-center justify-center">
        <div className="container">
          {page === 1 && (
            <div className=" h-full lg:h-80 bg-white lg:mt-32 shadow-md rounded-3xl m-4 lg:m-0 p-4 lg:p-0">
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
              <div className=" grid grid-cols-1 lg:grid-cols-12 lg:pl-6">
                <div className=" lg:col-span-10 grid grid-cols-2 lg:grid-cols-5 gap-3 pt-5 lg:pt-20 ">
                  <div>
                    <div className=" flex items-center gap-2 pb-2">
                      <img src={ar1} alt="" />{" "}
                      <h6 className=" font-semibold text-gray-700 text-sm">
                        From
                      </h6>
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
                      <h6 className=" font-semibold text-gray-700 text-sm">
                        To
                      </h6>
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
                      <h6 className=" font-semibold text-gray-700 text-sm">
                        Depart
                      </h6>
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
                      <h6 className=" font-semibold text-gray-700 text-sm">
                        Return
                      </h6>
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
                      <h6 className=" font-semibold text-gray-700 text-sm">
                        Cabin Class & Travelers
                      </h6>
                    </div>
                    <TextField
                      id="standard-basic"
                      label="1 adult, Economy"
                      variant="standard"
                    />
                  </div>
                </div>
                <div className=" lg:col-span-2 flex items-center w-full justify-center  h-full">
                  <button
                    onClick={() => setPage(2)}
                    className=" bg-pr px-2 w-full lg:w-16 rounded-md py-3 mt-5 lg:mt-16 flex items-center justify-center"
                  >
                    <RiSearchLine className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          )}
          {page === 2 && (
            <div className=" h-full   mt-16 p-4 lg:p-0">
              <div className=" bg-white grid grid-cols-1 lg:grid-cols-4  divide-x-2 shadow-md rounded-3xl gap-3 py-10 pl-10 pr-5">
                <div>
                  <div className=" flex items-center gap-2 pb-2">
                    <img src={seat} alt="" />{" "}
                    <h6 className=" font-semibold text-gray-700 text-sm">
                      Cabin Class & Travelers
                    </h6>
                  </div>
                  <h6>1 passengers | Economy</h6>
                </div>
                <div className=" pl-6">
                  <div className=" flex items-center gap-2 pb-4">
                    <img src={calender} alt="" />{" "}
                    <h6 className=" font-semibold text-gray-700 text-sm">
                      Depart
                    </h6>
                  </div>
                  <h6 style={{ color: "#08B5F2" }}>Mon, 29 Mar 2022</h6>
                </div>

                <div className=" pl-6">
                  <div className=" flex items-center gap-2 pb-4">
                    <img src={calender} alt="" />{" "}
                    <h6 className=" font-semibold text-gray-700 text-sm">
                      Return
                    </h6>
                  </div>
                  <h6 style={{ color: "#08B5F2" }}>Mon, 29 Mar 2022</h6>
                </div>
                <div className=" flex items-center justify-center  h-full ">
                  <button
                    onClick={() => setPage(1)}
                    className=" bg-pr px-5 text-white font-semibold rounded-md py-3 flex items-center justify-center"
                  >
                    Search Another Tickets
                  </button>
                </div>
              </div>
              <div className=" mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className=" lg:col-span-3">
                  <div className=" w-full flex items-center justify-between">
                    <h6 className=" font-semibold">Filter</h6>{" "}
                    <h6
                      className=" cursor-pointer font-semibold"
                      style={{ color: "#F6876F" }}
                    >
                      Reset
                    </h6>
                  </div>
                  <div className=" mt-8">
                    <h6>Price</h6>
                    <div className=" w-full pt-3 px-1">
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                      />
                      <div className="  w-full flex items-center justify-between">
                        <h6 className=" font-semibold">$ {value[0]}</h6>
                        <h6 className=" font-semibold">$ {value[1]}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full lg:col-span-9">
                  <div
                    className=" flex items-center justify-center py-3 text-base text-pr font-semibold rounded-md"
                    style={{ background: "#B4D6F5" }}
                  >
                    604 Flight Found
                  </div>
                  <div className=" mt-5 bg-white border rounded-md shadow-md">
                    <div className=" rounded-md w-full bg-pr flex text-white py-2 items-center justify-center font-semibold">
                      Your Ticket Ready
                    </div>
                    <div className=" py-5 grid grid-cols-1 lg:grid-cols-2 divide-x-2 gap-2 px-5 border-b-2">
                      <div className=" grid grid-cols-3 gap-8">
                        <div className=" flex items-center justify-center flex-col">
                          <h6 className=" font-semibold text-gray-700">
                            New York
                          </h6>
                          <h6 className=" font-semibold text-gray-700">
                            (JFK)
                          </h6>
                        </div>
                        <div className=" flex items-center justify-center flex-col">
                          <h6 className=" font-semibold text-gray-700">
                            4h 15m
                          </h6>
                          <span
                            style={{ color: "#F6876F" }}
                            className=" font-light"
                          >
                            1 transit
                          </span>
                        </div>
                        <div className=" flex items-center justify-center flex-col">
                          <h6 className=" font-semibold text-gray-700">
                            Dubai
                          </h6>
                          <h6 className=" font-semibold text-gray-700">
                            (DXB)
                          </h6>
                        </div>
                      </div>
                      <div className=" grid grid-cols-3 gap-8">
                        <div className=" flex items-center justify-center flex-col">
                          <h6 className=" font-semibold text-gray-700">
                            Dubai
                          </h6>
                          <h6 className=" font-semibold text-gray-700">
                            (DXB)
                          </h6>
                        </div>
                        <div className=" flex items-center justify-center flex-col">
                          <h6 className=" font-semibold text-gray-700">
                            4h 15m
                          </h6>
                          <span
                            style={{ color: "#F6876F" }}
                            className=" font-light"
                          >
                            1 transit
                          </span>
                        </div>
                        <div className=" flex items-center justify-center flex-col">
                          <h6 className=" font-semibold text-gray-700">
                            New York
                          </h6>
                          <h6 className=" font-semibold text-gray-700">
                            (JFK)
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className=" border-t-2 grid grid-cols-1 gap-5 lg:grid-cols-2 px-5 py-5">
                      <div>
                        <h6 className=" font-semibold">
                          Total Fare:{" "}
                          <span className=" pl-3 font-bold italic text-4xl text-pr">
                            $ 250
                          </span>
                        </h6>
                      </div>
                      <button
                        onClick={() => setPage(3)}
                        className=" bg-pr w-full rounded-md text-white flex items-center justify-center"
                      >
                        Book Flight
                      </button>
                    </div>
                  </div>
                  <div className=" mt-5 bg-white border rounded-md shadow-md">
                    <div className=" px-5 py-5 w-full flex items-center justify-between">
                      <div>
                        <div className=" flex items-center gap-2">
                          <div className=" w-16 h-8 bg-pr rounded-md"></div>
                          <h6 className=" font-semibold text-gray-700">
                            Emirates
                          </h6>
                        </div>
                        <h6 className=" font-medium text-gray-700">Class:CP</h6>
                      </div>
                      <span
                        style={{ color: "#F6876F" }}
                        className=" font-medium"
                      >
                        3 seats left
                      </span>
                    </div>
                    <div className=" px-5 pb-5 w-full flex items-center justify-between">
                      <div>
                        <div className=" flex items-center gap-4">
                          <h6 className=" font-medium text-gray-900">15:45</h6>
                          <div className=" flex flex-col items-center justify-center">
                            <img src={bplan} alt="" />
                            <span
                              style={{ color: "#F6876F" }}
                              className=" font-light"
                            >
                              1 transit
                            </span>
                          </div>
                          <h6 className=" font-semibold text-gray-700">
                            Emirates
                          </h6>
                        </div>
                      </div>
                      <span className=" font-bold text-pr text-xl">$ 200</span>
                    </div>
                    <div className=" pb-5 w-full flex items-center justify-between px-5">
                      <span className=" font-semibold border-b cursor-pointer text-pr text-lg">
                        Flight Details
                      </span>
                      <div>
                        <button
                          className=" px-3 py-2 rounded-md font-medium flex items-center justify-center"
                          style={{ background: "#B1E7D3", color: "#247558" }}
                        >
                          REFUNDABLE
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => setPage(3)}
                      className=" rounded-md w-full bg-pr flex text-white py-3 items-center justify-center font-semibold"
                    >
                      Choose
                    </button>
                  </div>
                  <div className=" mt-5 bg-white border rounded-md shadow-md">
                    <div className=" px-5 py-5 w-full flex items-center justify-between">
                      <div>
                        <div className=" flex items-center gap-2">
                          <div className=" w-16 h-8 bg-red-700 rounded-md"></div>
                          <h6 className=" font-semibold text-gray-700">
                            Emirates
                          </h6>
                        </div>
                        <h6 className=" font-medium text-gray-700">Class:CP</h6>
                      </div>
                      <span
                        style={{ color: "#247558" }}
                        className=" font-medium"
                      >
                        25 seats left
                      </span>
                    </div>
                    <div className=" px-5 pb-5 w-full flex items-center justify-between">
                      <div>
                        <div className=" flex items-center gap-4">
                          <h6 className=" font-medium text-gray-900">15:45</h6>
                          <div className=" flex flex-col items-center justify-center">
                            <img src={bplan} alt="" />
                            <span
                              style={{ color: "#F6876F" }}
                              className=" font-light"
                            >
                              1 transit
                            </span>
                          </div>
                          <h6 className=" font-semibold text-gray-700">
                            Emirates
                          </h6>
                        </div>
                      </div>
                      <span className=" font-bold text-pr text-xl">$ 200</span>
                    </div>
                    <div className=" pb-5 w-full flex items-center justify-between px-5">
                      <span className=" font-semibold border-b cursor-pointer text-pr text-lg">
                        Flight Details
                      </span>
                      <div>
                        <button
                          className=" px-3 py-2 rounded-md font-medium flex items-center justify-center"
                          style={{ background: "#B1E7D3", color: "#247558" }}
                        >
                          REFUNDABLE
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => setPage(3)}
                      className=" rounded-md w-full bg-pr flex text-white py-3 items-center justify-center font-semibold"
                    >
                      Choose
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {page === 3 && (
            <div className=" h-full   mt-16 p-4 lg:p-0">
              <div className=" bg-white grid grid-cols-1 lg:grid-cols-4  divide-x-2 shadow-md rounded-3xl gap-3 py-10 pl-10 pr-5">
                <div>
                  <div className=" flex items-center gap-2 pb-2">
                    <img src={seat} alt="" />{" "}
                    <h6 className=" font-semibold text-gray-700 text-sm">
                      Cabin Class & Travelers
                    </h6>
                  </div>
                  <h6>1 passengers | Economy</h6>
                </div>
                <div className=" pl-6">
                  <div className=" flex items-center gap-2 pb-4">
                    <img src={calender} alt="" />{" "}
                    <h6 className=" font-semibold text-gray-700 text-sm">
                      Depart
                    </h6>
                  </div>
                  <h6 style={{ color: "#08B5F2" }}>Mon, 29 Mar 2022</h6>
                </div>

                <div className=" pl-6">
                  <div className=" flex items-center gap-2 pb-4">
                    <img src={calender} alt="" />{" "}
                    <h6 className=" font-semibold text-gray-700 text-sm">
                      Return
                    </h6>
                  </div>
                  <h6 style={{ color: "#08B5F2" }}>Mon, 29 Mar 2022</h6>
                </div>
                <div className=" flex items-center justify-center  h-full ">
                  <button
                    onClick={() => setPage(1)}
                    className=" bg-pr px-5 text-white font-semibold rounded-md py-3 flex items-center justify-center"
                  >
                    Search Another Tickets
                  </button>
                </div>
              </div>
              <div className=" mt-10 w-full grid gap-5 lg:gap-10 grid-cols-1 lg:grid-cols-12">
                <div className=" lg:col-span-8">
                  <h1 className=" font-bold text-gray-700 text-2xl pb-5">
                    Passenger Detail
                  </h1>
                  <div
                    className=" bg-white w-full rounded-3xl p-5"
                    style={{ border: "1px solid rgba(12, 104, 190, 0.25)" }}
                  >
                    <h1 className=" font-bold text-gray-700 text-lg pb-5">
                      Passenger Info
                    </h1>
                    <div className=" pt-5 w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
                      <div>
                        <p className=" text-sm">Title</p>
                        <FormControl fullWidth>
                          <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                          >
                            <MenuItem value={10}>Title1</MenuItem>
                            <MenuItem value={20}>Title2</MenuItem>
                            <MenuItem value={30}>Title3</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div>
                        <p className=" text-sm">Name</p>
                        <TextField
                          placeholder="John"
                          className="w-full"
                          id="outlined-required"
                        />
                      </div>
                      <div>
                        <p className=" text-sm">Surname</p>
                        <TextField
                          placeholder="Doe"
                          className="w-full"
                          id="outlined-required"
                        />
                      </div>
                      <div>
                        <p className=" text-sm">Date of Birth</p>

                        <TextField
                          id="date"
                          type="date"
                          className=" w-full"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      <div>
                        <p className=" text-sm">Passport No.</p>
                        <TextField
                          placeholder="XX-XXXXXXXXX"
                          className="w-full"
                          id="outlined-required"
                        />
                      </div>
                      <div>
                        <p className=" text-sm">Nationality</p>
                        <FormControl fullWidth>
                          <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                          >
                            <MenuItem value={10}>nationily1</MenuItem>
                            <MenuItem value={20}>nationily2</MenuItem>
                            <MenuItem value={30}>nationily3</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div>
                        <p className=" text-sm">Expiry Date</p>

                        <TextField
                          id="date"
                          type="date"
                          className=" w-full"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                    </div>
                    <h1 className=" font-bold text-gray-700 text-lg pt-12 pb-5">
                      Contact Detail
                    </h1>
                    <div className="  w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                      <div>
                        <p className=" text-sm">Email</p>
                        <TextField
                          placeholder="example@email.com"
                          className="w-full"
                          id="outlined-required"
                        />
                      </div>
                      <div>
                        <p className=" text-sm">Mobile Phone</p>
                        <TextField
                          placeholder="Enter Your Phone Number"
                          className="w-full"
                          id="outlined-required"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" lg:col-span-4">
                  <h1 className=" font-bold text-gray-700 text-2xl pb-5">
                    Payment Detail
                  </h1>
                  <div
                    className=" bg-white p-4 rounded-md w-full"
                    style={{ border: "1px solid rgba(12, 104, 190, 0.25)" }}
                  >
                    <div className=" w-full border rounded-md p-3">
                      <div className=" flex items-center justify-between">
                        <p className=" font-medium text-gray-600 text-sm">
                          Base Fare
                        </p>
                        <p className=" font-semibold text-gray-800">$ 250</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          Fee & Surcharges
                        </p>
                        <p className=" font-semibold text-gray-800">$ 30</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          Booking Fee
                        </p>
                        <p className=" font-semibold text-gray-800">0</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          cGST
                        </p>
                        <p className=" font-semibold text-gray-800">0</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          sGST
                        </p>
                        <p className=" font-semibold text-gray-800">0</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          IGST
                        </p>
                        <p className=" font-semibold text-gray-800">0</p>
                      </div>
                    </div>
                    <div className=" w-ful mt-3 border-t p-3">
                      <div className=" flex items-center justify-between">
                        <p className=" font-medium text-gray-600 text-sm">
                          Total Fare
                        </p>
                        <p className=" font-semibold text-gray-800">$280</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          Add Ons
                        </p>
                        <p className=" font-semibold text-gray-800">0</p>
                      </div>
                    </div>
                    <div className=" w-ful mt-3 border-t p-3">
                      <div className=" flex items-center justify-between">
                        <p className=" font-medium text-gray-600 text-sm">
                          Price You Pay
                        </p>
                        <p className=" font-bold text-2xl text-pr italic">
                          $280
                        </p>
                      </div>
                      <div className=" pt-2 flex items-center gap-2">
                        <img
                          src={check}
                          className=" w-6 h-6 cursor-pointer"
                          alt=""
                        />
                        <p className=" text-sm text-gray-600">
                          I have reviewed and agreed on the fares and commisions
                          offered this booking
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setPage(4)}
                    className=" w-full rounded-md mt-4 py-3 bg-pr text-white flex items-center justify-center"
                  >
                    CONTINUE
                  </button>
                </div>
              </div>
            </div>
          )}
          {page === 4 && (
            <div className=" h-full   mt-16 p-4 lg:p-0">
              <div className=" bg-white grid grid-cols-1 lg:grid-cols-4  divide-x-2 shadow-md rounded-3xl gap-3 py-10 pl-10 pr-5">
                <div>
                  <div className=" flex items-center gap-2 pb-2">
                    <img src={seat} alt="" />{" "}
                    <h6 className=" font-semibold text-gray-700 text-sm">
                      Cabin Class & Travelers
                    </h6>
                  </div>
                  <h6>1 passengers | Economy</h6>
                </div>
                <div className=" pl-6">
                  <div className=" flex items-center gap-2 pb-4">
                    <img src={calender} alt="" />{" "}
                    <h6 className=" font-semibold text-gray-700 text-sm">
                      Depart
                    </h6>
                  </div>
                  <h6 style={{ color: "#08B5F2" }}>Mon, 29 Mar 2022</h6>
                </div>

                <div className=" pl-6">
                  <div className=" flex items-center gap-2 pb-4">
                    <img src={calender} alt="" />{" "}
                    <h6 className=" font-semibold text-gray-700 text-sm">
                      Return
                    </h6>
                  </div>
                  <h6 style={{ color: "#08B5F2" }}>Mon, 29 Mar 2022</h6>
                </div>
                <div className=" flex items-center justify-center  h-full ">
                  <button
                    onClick={() => setPage(1)}
                    className=" bg-pr px-5 text-white font-semibold rounded-md py-3 flex items-center justify-center"
                  >
                    Search Another Tickets
                  </button>
                </div>
              </div>
              <div className=" mt-10 w-full grid gap-5 lg:gap-10 grid-cols-1 lg:grid-cols-12">
                <div className=" lg:col-span-8 ">
                  <div className=" w-full p-5 bg-white">
                  <div className="grid grid-cols-1 lg:grid-cols-3  rounded-md ">
                    {active === 1 ? (
                      <button className=" py-3 bg-pr text-white flex pl-4 gap-2 rounded-md items-center ">
                        <img src={wc} className=" w-4 h-4" alt="" />
                        Wallet
                      </button>
                    ) : (
                      <button
                        onClick={() => setactive(1)}
                        className=" py-3 border text-gray-500 bg-gray-100 text-sm flex pl-4 gap-2  items-center "
                      >
                        <img src={gc} className=" w-4 h-4" alt="" />
                        Wallet
                      </button>
                    )}
                    {active === 2 ? (
                      <button className=" py-3 bg-pr text-white text-sm flex pl-4 gap-2 rounded-md items-center ">
                        <img src={wc} className=" w-4 h-4" alt="" />
                        Debit Card
                      </button>
                    ) : (
                      <button
                        onClick={() => setactive(2)}
                        className=" py-3 border bg-gray-100 text-gray-500 text-sm flex pl-4 gap-2 items-center "
                      >
                        <img src={gc} className=" w-4 h-4" alt="" />
                        Debit Card
                      </button>
                    )}
                    {active === 3 ? (
                      <button className=" py-3 bg-pr text-white text-sm flex pl-4 gap-2 rounded-md items-center ">
                        <img src={wc} className=" w-4 h-4" alt="" />
                        Credit Card
                      </button>
                    ) : (
                      <button
                        onClick={() => setactive(3)}
                        className=" py-3 border bg-gray-100 text-gray-500 text-sm flex pl-4 gap-2 items-center "
                      >
                        <img src={gc} className=" w-4 h-4" alt="" />
                        Credit Card
                      </button>
                    )}
                  </div>
                  <div className=" flex items-center justify-between pt-4">
<div>
  <p className=" text-base text-gray-500">Your Wallet Balance</p>
  <h1 className=" text-3xl font-bold text-pr italic">$ 2105</h1>
</div>
<div>
  <img src={fill} alt="" />
</div>
                  </div>
                  </div>
                </div>
                <div className=" lg:col-span-4">
                  <h1 className=" font-bold text-gray-700 text-2xl pb-5">
                    Payment Detail
                  </h1>
                  <div
                    className=" bg-white p-4 rounded-md w-full"
                    style={{ border: "1px solid rgba(12, 104, 190, 0.25)" }}
                  >
                    <div className=" w-full border rounded-md p-3">
                      <div className=" flex items-center justify-between">
                        <p className=" font-medium text-gray-600 text-sm">
                          Base Fare
                        </p>
                        <p className=" font-semibold text-gray-800">$ 250</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          Fee & Surcharges
                        </p>
                        <p className=" font-semibold text-gray-800">$ 30</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          Booking Fee
                        </p>
                        <p className=" font-semibold text-gray-800">0</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          cGST
                        </p>
                        <p className=" font-semibold text-gray-800">0</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          sGST
                        </p>
                        <p className=" font-semibold text-gray-800">0</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          IGST
                        </p>
                        <p className=" font-semibold text-gray-800">0</p>
                      </div>
                    </div>
                    <div className=" w-ful mt-3 border-t p-3">
                      <div className=" flex items-center justify-between">
                        <p className=" font-medium text-gray-600 text-sm">
                          Total Fare
                        </p>
                        <p className=" font-semibold text-gray-800">$280</p>
                      </div>
                      <div className=" flex items-center justify-between pt-2">
                        <p className=" font-medium text-gray-600 text-sm">
                          Add Ons
                        </p>
                        <p className=" font-semibold text-gray-800">0</p>
                      </div>
                    </div>
                    <div className=" w-ful mt-3 border-t p-3">
                      <div className=" flex items-center justify-between">
                        <p className=" font-medium text-gray-600 text-sm">
                          Price You Pay
                        </p>
                        <p className=" font-bold text-2xl text-pr italic">
                          $280
                        </p>
                      </div>
                      <div className=" pt-2 flex items-center gap-2">
                        <img
                          src={check}
                          className=" w-6 h-6 cursor-pointer"
                          alt=""
                        />
                        <p className=" text-sm text-gray-600">
                          I have reviewed and agreed on the fares and commisions
                          offered this booking
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setPage(4)}
                    className=" w-full rounded-md mt-4 py-3 bg-pr text-white flex items-center justify-center"
                  >
                    PROCEED PAY FLIGHT
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
