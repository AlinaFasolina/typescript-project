import React from 'react'
import { useParams } from 'react-router-dom';

export const User:React.FC = () => {
    const params = useParams();
    console.log('params = ',params.id)
  return (
    <div>One User</div>
  )
}
