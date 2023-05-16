import type { NextPage } from "next";
import React, { useState } from 'react';
import Select from 'react-select';
//import SelectOptions from '../components/SelectOptions/SelectOptions';
import SelectOptions from '../components/SelectOptions/SelectOptions';
 

const Home: NextPage = () => {
    

    return (
      <>
        <SelectOptions label="Producto" name="id_producto" url_api="http://localhost:3000/api/json-response"
           
        />
      </>
    );
};

export default Home;
