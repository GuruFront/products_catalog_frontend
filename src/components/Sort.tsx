import Select from '../ui/Select'
import React from 'react'

export type SortProps = {
  show: boolean
  onChange: (text: string) => void
}

const Sort = (props: SortProps) => {
  const { show, onChange } = props

  return show ? (
    <Select title={'Sort'} onChange={onChange} values={['Year up', 'Year down']} />
  ) : null
}

export default Sort
