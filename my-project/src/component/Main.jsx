import React, { useEffect } from 'react'

const Main = () => {
  
    useEffect(() =>{
      console.log('The component has mounted');
    }
    );

    return (
        <div className='bg-blue-500'>
          Example no 
        </div>
      )

  }
 


export default Main
