import React, { ChangeEvent, useState } from 'react';
import {Props_Nodes} from '../../interface/Types_List';
import CreatableSelect from 'react-select/creatable';
import style from './Layout_Simple.module.css';

/***************************************/
/*
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
  }

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
*/
/*
interface Option {
  value: string;
  label: string;
  color: string;
}

const SelectOptions: React.FC = () => {
        const options: Option[] = [
            { value: 'jack', label: 'Jack', color: '#FF8B00' },
            { value: 'john', label: 'John', color: '#36B37E' },
            { value: 'mike', label: 'Mike', color: '#0052CC' },
        ];

        const colorStyles = {
            control: (styles: any) => ({ ...styles, backgroundColor: 'white' }),
            option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
            return { ...styles, color: data.color };
            },
            multiValue: (styles: any, { data }: any) => {
            return {
                ...styles,
                backgroundColor: data.color,
                color: '#fff',
            };
            },
            multiValueLabel: (styles: any, { data }: any) => {
            return {
                ...styles,
                color: '#fff',
            };
            },
            multiValueRemove: (styles: any, { data }: any) => {
            return {
                ...styles,
                color: '#fff',
                cursor: 'pointer',
                ':hover': {
                color: '#fff',
                },
            };
            },
        };

        const handleChange1 = (selectedOption: Option | Option[] | null, actionMeta: any) => {
            console.log('handleChange', selectedOption, actionMeta);
        };

        const handleChange22222 = (selectedOption: Option | Option[] | null, actionMeta: any) => {
            console.log('handleChange', selectedOption, actionMeta);
        };

        const handleChange = (
            selectedOption: Option | Option[] | null,
            actionMeta: { action: string }
        ) => {
            console.log('handleChange', selectedOption, actionMeta);
        };
        
        
        const handleInputChange = (inputValue: string, actionMeta: any) => {
            console.log('handleInputChange', inputValue, actionMeta);
        };
        //      onChange={handleChange}

        return (
            <CreatableSelect
            options={options}

            onInputChange={handleInputChange}
            isMulti
            styles={colorStyles}
            />
        );
};

export default SelectOptions;
*/

/***************************************/
