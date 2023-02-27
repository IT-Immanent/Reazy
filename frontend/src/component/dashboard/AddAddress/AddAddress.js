
import { Button, Link, Stack } from "@mui/material";
import React from "react";
import "./AddAddress.css"
import "../../common.css"
import { Link as RouterLink } from "react-router-dom";

const AddAddress = () => {
  return (
    <>
      <div className='PropertyAddress'>
        <div class="nav nav-pills">
          <div class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Properties</a>
          </div>
          {'>'}
          <div class="nav-item">
            <a class="nav-link active" href="#">Create Property</a>
          </div>
        </div>


        <form>
          <h2>Property Address</h2>
          <p>Please provide the address of your property.</p>
          <div className="Street_Address">
            <div class="">
              <label for="StreetAddress" class="form-label">Street Address</label>
              <input type="text" class="form-control" id="StreetAddress" placeholder="e.g. Smith Street" />
            </div>
            <div class="">
              <label for="UnitNumber" class="form-label">Unit Number</label>
              <input type="text" class="form-control" id="UnitNumber" placeholder="e.g. Unit 1" />
            </div>
          </div>
          <div className="City_sec">
            <div class="mb-3">
              <label for="InputCity" class="form-label">City</label>
              <input type="text" class="form-control" id="InputCity" placeholder="e.g. Sydney" />
            </div>
            <div class="mb-3">
              <label for="InputState" class="form-label">State</label>

              <div class="dropdown">
                <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  State
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">1</a></li>
                  <li><a class="dropdown-item" href="#">11</a></li>
                  <li><a class="dropdown-item" href="#">111</a></li>
                </ul>
              </div>
            </div>
            <div class="mb-3">
              <label for="InputPostcode" class="form-label">Postcode</label>
              <input type="text" class="form-control" id="InputPostcode" placeholder="e.g. 2000" />
            </div>
          </div>


          <div className='Form_continue'>
            <Button variant="outlined" className="btn" component={RouterLink} to="/add_address">
              Continue
            </Button>
          </div>
        </form>
      </div>

    </>
  )
}

export default AddAddress
