import React from 'react'


export default function Tempo(props) {
  const data = new Date()
  const dataStringStatic = data.toGMTString()

  return (
    <>
      <h1>{dataStringStatic} (Static)</h1>
      <h1>{props.dataStringDynamic} (Dynamic)</h1>
    </>
  )
}

export function getStaticProps() {
  const data = new Date()
  const dataStringDynamic = data.toGMTString()

  return {
    props: {
      dataStringDynamic
    },
    revalidate: 1
  }
}
