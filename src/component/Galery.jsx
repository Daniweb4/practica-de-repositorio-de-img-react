import { useState } from "react";
import Modal from "./Modal";
import './Galery.css'
const images = [
    {id:1, src:'../../public/images/imgen1.jpg', alt:'images 1'},
    {id:2, src:'../../public/images/image2.jpg',alt:'images 2'},
    {id:3, src:'../../public/images/image3.jpg', alt:'images 3'},
    {id:4, src:'../../public/images/image4.jpg',alt:'images 4'}
]

const Galery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const openModal = (image) => { 
        console.log("Opening modal for:", image);
        setSelectedImage(image);
    };
    const closeModal = () => { 
        setSelectedImage(null);
 };
  return (
    <div className="gallery">
         {images?.map((image) => (
             <img key={image.id}
              src={image.src}
             
              className="gallery-item" 
              onClick={() => openModal(image)} /> ))}
               {selectedImage && 
               ( <Modal image={selectedImage}
                 closeModal={closeModal} /> )} </div>
  )
}

export default Galery





