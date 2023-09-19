import { useState,ChangeEvent } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import formatId from '@/utils/formatId';

//queryTypeName = "Category" 
//queryTypeValue = "laptops"
//queryTypeLabel = "Laptops"
//initialCheck = Is checked when i load the route?
const FilterInputCkeckbox = ({ queryTypeName, queryTypeValue,queryTypeLabel, initialCheck }: 
    { queryTypeName: string, queryTypeValue: string, queryTypeLabel:string, initialCheck: boolean }
) => {
    const [isChecked, setIsChecked] = useState(initialCheck)
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const handleCheckboxChange = (e:ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked); // Toggle the checked state
        const catValue = formatId(e.target.value)
        if (!isChecked) {
            if (searchParams.size > 0) {
                const newParams = searchParams.toString() + `&${queryTypeName}=${catValue}`
                router.push(`${pathname}?${newParams}`)
            } else {
                router.push(`${pathname}?${queryTypeName}=${catValue}`)
            }
        } else {
            if (searchParams.size <= 1) {
                router.push(pathname)
            } else {
                const newRouteRedirect = searchParams.toString().replace(`${queryTypeName}=${catValue}`, "")
                router.push(`${pathname}?${newRouteRedirect}`)
            }
        }
    };

    return (
        <label  htmlFor={queryTypeValue} className='flex items-center gap-2'>      
            <input
                type="checkbox"
                id={queryTypeValue}
                name={queryTypeValue}
                value={queryTypeValue}
                checked={isChecked}
                onChange={handleCheckboxChange}
                className='form-checkbox'
            />
             <span className='text-sm'>{queryTypeLabel}</span>
        </label>
    )
}

export default FilterInputCkeckbox