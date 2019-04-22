import React from 'react'

export default function MyDisplayComponent(props:any) {
  console.log(props);
  

  return (
    <div>
      <button className="btn btn-outline-primary"
       onClick={() => {
         let toCall = props.initializer;
         toCall();
        }
      }
      >
        Init
      </button>
    </div>
  )
}
