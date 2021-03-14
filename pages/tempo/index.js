import React from 'react'
import api from '../../services/api'


export default function Tempo(props) {
  console.log(props.apiData.contatos[0].titulo)

  return (
    <>
    </>
  )
}

export async function getStaticProps() {
  
  const res = await api.get('geral')
  const apiData = res.data
  console.log('StaticProps')

  return {
    props: {
      apiData
    },
    revalidate: 5
  }
}
