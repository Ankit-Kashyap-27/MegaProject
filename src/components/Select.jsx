import React,{useId} from 'react'

const select = ({
    options,
    lable,
    className,
    ...props
},ref) => {
    const id=useId()
  return (
    <div className='w-full'>
{lable && <label htmlFor={id} className=''></label>}  
<select
{...props}
id={id}
ref={ref}
className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 wf w-full ${className}`}
>
    {options?.map((option)=>{
        <option key={key}>
{option}
        </option>
    })}
    </select>    
    </div>
  )
}

export default React.forwardRef(select)
