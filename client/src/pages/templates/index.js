import React from 'react'
import { useParams } from 'react-router-dom'
import DefaultLayout from '../../components/DefaultLayout'
import Template1 from './Template1'

function Templates() {
  
  return (
    <DefaultLayout>
        <Template1 />
    </DefaultLayout>
  )
}

export default Templates
