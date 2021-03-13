import React from 'react'
import api from '../../services/api'


export default function Tempo(props) {
  const data = new Date()
  const dataStringDynamic = data.toGMTString()

  async function getApiData() {
    const apiData = await api.get('geral')

    return apiData.data
  }

  console.log(getApiData())
  

  return (
    <>
      <h1>{props.dataStringStatic} (Static)</h1>
      <h1>{dataStringDynamic} (Dynamic)</h1>
    </>
  )
}

export function getStaticProps() {
  const data = new Date()
  const dataStringStatic = data.toGMTString()

  return {
    props: {
      dataStringStatic
    },
    revalidate: 5
  }
}
