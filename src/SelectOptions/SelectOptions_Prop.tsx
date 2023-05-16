import React from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';

export interface SelectOptions_Prop {
  label: string;
  name:string;
  url_api?:string;
  
  data?: undefined; // children es opcional, ya que no todos los nodos tendrán hijos
}
