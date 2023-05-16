import React, { useRef, useState  } from 'react';
import AsyncSelect from 'react-select/async';
import {SelectOptions_Prop} from './SelectOptions_Prop';
import axios from 'axios';

interface Option {
  value: string;
  label: string;
}

const SelectOptions = (vProps:SelectOptions_Prop ) =>{

    const asyncSelectRef = useRef<any>(null);
    const [selectedValue, setSelectedValue] = useState('');
  
    const handleOptionChange = (selectedOption: any) => {
      setSelectedValue(selectedOption ? selectedOption.value : '');
    };
  
    const clearSelectedOption = () => {
      setSelectedValue('');
      asyncSelectRef.current.select.clearValue();
    };

    const getSelectedValue = () => {
        console.log(selectedValue);
    };
    
    const selectValue = () => {
        const valueToSelect = '9fe6b634-e4d3-4494-8027-619db8654189';
        setSelectedValue(valueToSelect);
        console.log(asyncSelectRef);
        asyncSelectRef.current.select.setValue({ value: valueToSelect, label: 'Etiqueta del valor seleccionado' });
        
      };    
      
  const loadOptions = async (inputValue: string) => {
    try {
    

      const apiUrl = vProps.url_api || 'URL_POR_DEFECTO'; // Reemplaza 'URL_POR_DEFECTO' con tu URL predeterminada

      const response = await axios.get(apiUrl);
      const data = response.data;

      // Filtrar los resultados según el inputValue
      const filteredOptions: Option[] = data.filter((item: any) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      ).map((item: any) => ({
        value: item.id,
        label: item.name,
      }));

      return filteredOptions;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }

    
  };

  return (
    <>
    <AsyncSelect
        ref={asyncSelectRef}
        value={selectedValue ? { value: selectedValue, label: 'Etiqueta del valor seleccionado' } : null}
        onChange={handleOptionChange}
        loadOptions={loadOptions}

      defaultOptions
    />

<button onClick={clearSelectedOption}>Limpiar</button>
<button onClick={getSelectedValue}>Obtener valor seleccionado</button>
<button onClick={selectValue}>Seleccionar valor</button>
    </>
  );
};

export default SelectOptions;
