import React from 'react'
import { InputType } from '../types/Types'
import { Search } from './SerchBar.styles'

const SearchBar = ({ name, placeholder, type, onChange }: InputType) => {



  return (
    <Search name={name} placeholder={placeholder} type={type} onChange={onChange} />
  )
}

export default SearchBar
