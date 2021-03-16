import React from 'react'
import api from '../../services/api'
import data from '../../public/global/global-data.json'
import manifests from '../../lib/createManifest'


export default function Tempo(props) {
  
  return (
    <>
      <h1>{props.apiData.contatos[0].titulo} (static)</h1>
      <h1>{props.dataJson.contatos[0].titulo} (dynamic)</h1>
    </>
  )
}

export async function getStaticProps() {
  manifests()
  
  const dataJson = data
  
  const res = await api.get('geral')
  const apiData = res.data

  dataJson.contatos[0].titulo = apiData.contatos[0].titulo
  console.log('StaticProps')

  return {
    props: {
      apiData,
      dataJson
    },
    revalidate: 5
  }
}
