/* eslint-disable react/prop-types */

import './Modal.css'
// eslint-disable-next-line react/prop-types
const Modal = ({image, closeModal}) => {
 
  return (
    <div className='modal' onClick={closeModal}>
      <span className='close'>& Times</span>
      <img className='modal-content' src={image.src} alt={image.alt}/>
      
    </div>
  )
}

export default Modal
