import React,{useReducer} from 'react'

const landing_data ={
    name:'حلويات الحلويات'
}
export default function DatLanding() {
    const [land_data, dispatch] = useReducer(redLanding, landing_data)
  return (
    <div>
      
    </div>
  )
}
