import React from 'react'
import api from '../../services/api'
import data from "../../global/global-data.json";


export default function Tempo(props) {
  
  return (
    <>
      <h1>{props.apiData.contatos[0].titulo} (static)</h1>
      <h1>{data.contatos[0].titulo} (dynamic)</h1>
      <h1>{props.dataString} (static)</h1>
    </>
  )
}

export async function getStaticProps() {
  // const manifest = await require('../../lib/createManifest').manifests()
  
  const data = new Date()
  const dataString = data.toGMTString()
  
  const res = await api.get('geral')
  const apiData = res.data
  console.log('StaticProps')

  return {
    props: {
      dataString,
      apiData
    },
    revalidate: 5
  }
}
