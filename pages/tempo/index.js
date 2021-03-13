import React from 'react'


export default function Tempo(props) {
  const data = new Date()
  const dataStringDynamic = data.toGMTString()

  return (
    <>
      <h1>{props.dataStringStatic} (Dynamic)</h1>
      <h1>{dataStringDynamic} (Static)</h1>
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
