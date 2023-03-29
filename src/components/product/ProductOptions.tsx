import React from 'react'

type Props = {
    label: string
    options: (string|number)[]
    value?: string|number
    onChange?: (value: string|number) => void
}

export default function ProductOptions({label,options,value,onChange}: Props) {
  return (
    <label className='flex gap-2 items-center basis-5/12'>
        <span className='font-medium'>{label}</span>
        <select className='border rounded cursor-pointer p-1' value={value} onChange={e => onChange?.(e.currentTarget.value)}>
            {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
        </select>
    </label>
  )
}