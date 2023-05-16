import React from 'react';

import AsyncSelect from 'react-select/async';
import { ColourOption, colourOptions, StateOption, stateOptions } from './SelectOptions_Data';

const filterColors = (inputValue: string) => {
  return stateOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const FUN_loadOptions = (
  inputValue: string,
  callback: (options: StateOption[]) => void
) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

//const SelectOptions: React.FC = () => {
//export default () => (    
const SelectOptions: React.FC = () => {
  return (
    <AsyncSelect cacheOptions loadOptions={FUN_loadOptions} defaultOptions />
    );  
  };

  export default SelectOptions;