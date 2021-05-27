import React from 'react'
import CustomTable from '../components/CustomTable'

const Components = () => {
  const data = ["a", "b"]
  return (
    <div>
      <CustomTable columns={[1, 2]} data={data} />

    </div>
  )
}

export default Components

