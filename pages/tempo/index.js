import React from 'react'
import robson from '../../global/global-data.json'
import api from '../../services/api'


export default function Tempo(props) {
  

  return (
    <>
      <h1>{props.apiData.contatos[0].titulo}</h1>
      <h1>{robson.contatos[0].titulo}</h1>
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
      manifest
    },
    revalidate: 5
  }
}
