import React from 'react'
import {contextCreated,villageContext} from '../context/Context.jsx'

export default function ComC(value) {
  return (<>

    <contextCreated.Consumer>
      {(value) => {
        return (
          <>
            <villageContext.Consumer>

              { (village)=>{return (<>
              
              <div>Im {value}. Live in {village}</div>
              </>)}}
            </villageContext.Consumer>
          </>)
      }}
    </contextCreated.Consumer>
  </>
  )
}
