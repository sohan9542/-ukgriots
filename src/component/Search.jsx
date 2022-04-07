import React from 'react'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

const Search = () => {
  return (
    <div className=' bg-gray-100 '>
        <div className="flex items-center justify-center">
            <div className="container">
            <div className=" h-96 bg-white mt-32 shadow-md">
<div className=' py-3 w-full flex items-center justify-center border-b gap-3'>
<RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="Return"
      >
        <FormControlLabel value="Return" control={<Radio />}  label="Return" />
        <FormControlLabel value="One Way" control={<Radio />}  label="One Way" />
        <FormControlLabel value="Multi Way" control={<Radio />}  label="Multi Way" />
       
      </RadioGroup>
</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Search