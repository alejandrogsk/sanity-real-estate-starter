import React from 'react'
import FilterInputCheckbox from './FilterInputCheckbox';
import { useSearchParams } from 'next/navigation';
type Option = {label:string, id:string}
// Label is what's gonna be displayed
// valueToFind is the value in the param, example valueToFind is equal to "category": localhost>3000/?category=shoes&category=jeans
const FilterBlock = ({label, valueToFind, options }:{label:string, valueToFind:string, options: Option[]}) => {
    const searchParams = useSearchParams();
    const values = searchParams.getAll(valueToFind)
    return (
        <div>
            <h3 className='text-lg mb-4'>{label}:</h3>

            {
                (Array.isArray(options) && options.length > 0) &&
                <div className='flex xl:flex-col gap-1'>
                    {
                options.map((opt: Option, i) => {
                    const isChecked = values.includes(opt.id);
                    return (
                        <FilterInputCheckbox 
                        key={i} 
                        queryTypeName={valueToFind} 
                        queryTypeValue={opt.id} 
                        queryTypeLabel={opt.label}
                        initialCheck={isChecked} 
                        />
                    )
                })
            }
                </div>
            }
            
        </div>
    )
}

export default FilterBlock