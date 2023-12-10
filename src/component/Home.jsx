import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Toll from './Toll';
import { CalculateToll } from "../component/CalculateToll";

const Home = () => {
    const [address, setAddress] = useState({
        to: "",
        from: "",
    });
    const setdata = (e) => {
        const { name, value } = e.target;
        setAddress((preval) => {
            return {
                ...preval,
                [name]: value,
            };
        });
    };


    const handleSubmit = async (e) => {
        CalculateToll(address.from, address.to)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
    return (
        <>
            <div className="container" style={{ backgroundColor: "#c5c5d5", marginTop: "1rem" }}  >
                <div className="mb-3" controlId="fromAdd">
                    <label htmlFor="formGroupExampleInput" className="form-label">Start From</label>
                    <input
                        placeholder="Enter From Starting Address"
                        onChange={setdata}
                        name="from"
                        value={address.from}
                        type="text" className="form-control" id="formGroupExampleInput" />
                </div>

                <div className="mb-3" controlId="toAdd">
                    <label htmlFor="formGroupExampleInput2" className="form-label">End To</label>
                    <input
                     type="text"
                     placeholder="Enter to End Address"
                     onChange={setdata}
                     name="to"
                     value={address.to} className="form-control" id="formGroupExampleInput2"  />
                </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Vehicle :-</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select Vehicle</option>
                        <option value="1">SUV</option>
                        <option value="2">CAR</option>
                        <option value="3">TRUCK</option>
                        <option value="4">upto 3 Axle Vehicle </option>
                        <option value="5">4 to 6 Axle Vehicle </option>
                        <option value="6">upto 7 Axle Vehicle </option>
                    </select>
                </div>
                <div className="mt-3" style={{ paddingLeft: "" }}>


                    <NavLink 
                    variant="primary" onClick={handleSubmit} style={{ padding: "11px 38px" }} className="btn-get-started">
                        Calculate Total Toll
                    </NavLink>
                    <div className="mt-3" style={{ width: "20%" }}>
                        <label htmlFor="formGroupExampleInput2" className="form-label">Total Toll Cost :-  </label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Total Toll" />
                    </div>

                </div>
                <div className='mb-3' style={{ marginTop: "1rem" }}>
                    <Toll />
                </div>

            </div>





        </>
    )
}

export default Home