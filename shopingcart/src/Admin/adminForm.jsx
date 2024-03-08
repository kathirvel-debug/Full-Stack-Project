import React from 'react';
import '../Admin/admin.css'
import { useDispatch } from 'react-redux';
import{upload} from '../Redux/uploadProductReducer'
function Frompage() {
const disptach=useDispatch();
const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('product-name');
    const desc = formData.get('product-description');
    const price = formData.get('product-price');
    const image = formData.get('image'); // Corrected: Use 'image' instead of 'product-image'

    // Create a new FormData object
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('desc', desc);
    formDataToSend.append('price', price);
    formDataToSend.append('image', image); // Append the image file
    disptach(upload(formDataToSend))
//     try {
//         // Send a POST request to the server
//         const response = await fetch('http://localhost:8007/api/ecom/create', {
//             method: 'POST',
//             body: formDataToSend
//         });

//         if (response.ok) {
//             console.log('Product uploaded successfully');
//         } else {
//             console.error('Product upload failed:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Network error:', error);
//     }
// };
}
    return (
        <form  method="post"  onSubmit={handleSubmit} enctype="multipart/form-data">
        <div className="form-group">
            <label for="product-name">Product Name:</label>
            <input type="text" id="product-name" name="product-name" required/>
        </div>
        <div className="form-group">
            <label for="product-description">Product Description:</label>
            <textarea id="product-description" name="product-description" rows="4" required></textarea>
        </div>
        <div className="form-group">
            <label for="product-price">Price:</label>
            <input type="number" id="product-price" name="product-price" step="0.01" min="0" required/>
        </div>
        <div className="form-group">
            <label for="product-image">Product Image:</label>
            <input type="file" id="product-image" name="image"  required/>
        </div>
        <button type="submit" className="btn">Upload Product</button>
    </form>
    );
}

export default Frompage;
