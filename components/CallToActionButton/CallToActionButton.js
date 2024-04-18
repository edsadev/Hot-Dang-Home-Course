import { ButtonLink } from 'components/ButtonLink'
import React from 'react'

export const CallToActionButton = ({label, destination, align = "left"}) => {
  const alignMap = {
    "left": "text-left",
    "center": "text-center",
    "right": "text-right",
  }
  return (
    <div className={alignMap[align]}>
      <ButtonLink destination={destination} label={label} />
    </div>
  )
}
