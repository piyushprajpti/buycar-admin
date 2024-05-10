import React from 'react'

export default function PrimaryHeading({ title, count, fontSize, fontWeight }) {
   return (
      <div style={{display: "flex"}}>
         <p style={{ fontSize: fontSize, fontWeight: fontWeight, color: "var(--heading-gray)" }}>{title}</p>
         {count && <p style={{ fontSize: "1.75rem", fontWeight: 600, color: "var(--heading-gray)", marginLeft: "10px" }}>{"(" + count + ")"}</p>}
      </div>
   )
}
