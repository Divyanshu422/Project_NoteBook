import React from 'react'
import { SquareX } from 'lucide-react';
import { Download } from 'lucide-react';
function Modal() {
  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-sm'>
       <button>
        <SquareX/>
       </button>
       <h1> Download Free E-book </h1>
       <p>Want to Learn How to Crack Web Development Interviews Like a Pro!</p>
       <form>
            <input type='email' placeholder='Enter Your Email' requried/>
            <button>
                <Download/>
                Download eBook
            </button>
       </form>

    </div>
  )
}

export default Modal