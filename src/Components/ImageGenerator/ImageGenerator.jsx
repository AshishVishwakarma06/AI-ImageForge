// import React, { useRef, useState } from 'react';
// import './ImageGenerator.css';
// import default_image from '../Assets/default_image.svg';

// const ImageGenerator = () => {
//     const [image_url, setImage_url] = useState("/");
//     const inputRef = useRef(null);

//     const imageGenerator = async () => {
//         if (inputRef.current.value === "") {
//             return;
//         }
//         try {
//             const response = await fetch(
//                 "https://api.openai.com/v1/images/generations",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                         "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//                         "User-Agent": "Chrome",
//                     },
//                     body: JSON.stringify({
//                         prompt: inputRef.current.value,
//                         n: 1,
//                         size: "512x512",
//                     }),
//                 }
//             );
//             if (!response.ok) {
//                 throw new Error('Failed to generate image');
//             }
//             const data = await response.json();
//             console.log(data); // Log data object to the console
//             const imageUrl = data.image; // Adjust this line based on the actual response structure
//             setImage_url(imageUrl);
//         } catch (error) {
//             console.error('Error generating image:', error.message);
//             // Handle error, perhaps set a default image or show an error message
//         }
//     };

//     return (
//         <div>
//             <div className='ai-image-generator'>
//                 <div className='header'>AI Image<span>Generator</span></div>
//                 <div className='img-loading'>
//                     <div className="image"><img src={image_url === "/" ? default_image : image_url} alt="" /></div>
//                 </div>
//                 <div className="search-box">
//                     <input ref={inputRef} type="text" className='search-input' placeholder='Describe What You Want To See' />
//                     <div className="generate-btn" onClick={imageGenerator}>Generate</div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ImageGenerator;
