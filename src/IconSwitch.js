import React from 'react';

function IconSwitch(props) {
   const {icon, onSwitch} = props;
   console.log('iconswitch----props', props);
   return (
     <div className='switch'>
        {
          <button
            className='button'
            // onClick={(event) => onSwitch(event.target.closest('.button').firstChild.innerText)}
            onClick={(event) => onSwitch(event.currentTarget.firstChild.innerText)}
            >
            <span className="material-icons ">{icon}</span>
          </button>
        }
     </div>
   );
}

export default IconSwitch;