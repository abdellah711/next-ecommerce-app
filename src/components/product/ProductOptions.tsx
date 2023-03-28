import React from 'react'

type Props = {
    label: string
    options: string[]
}

export default function ProductOptions({label,options}: Props) {
  return (
    <label className='flex gap-2 items-center basis-5/12'>
        <span className='font-medium'>{label}</span>
        <select className='border rounded cursor-pointer p-1'>
            {options.map((option, i) => <option key={i}>{option}</option>)}
        </select>
    </label>
  )
}