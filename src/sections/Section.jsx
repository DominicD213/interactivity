import React from 'react'

const Section = ({Title, children, ...props}) => {
  return (
    <section {...props}>
        <h1>{Title}</h1>
            {children}
    </section>
  )
}

export default Section