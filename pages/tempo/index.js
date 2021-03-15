import React from 'react'
import api from '../../services/api'
import data from "../../global/global-data.json";


export default function Tempo(props) {
  
  return (
    <>
      <h1>{props.apiData.contatos[0].titulo} (static)</h1>
      <h1>{data.contatos[0].titulo} (dynamic)</h1>
    </>
  )
}

export async function getStaticProps() {
  const manifest = await require('../../lib/createManifest').manifests()
  
  const res = await api.get('geral')
  const apiData = res.data
  console.log('StaticProps')

  return {
    props: {
      apiData,
    },
    revalidate: 5
  }
}
