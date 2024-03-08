import '../App.css'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {add} from '../Redux/userLoginReducer'
import axios from 'axios';
import{userSelectors}from '../Redux/userLoginReducer'
function Addcards({ name, price, id, img }) {
    const dispatch=useDispatch()
    const { userId } = useSelector(userSelectors)
    const handelclick = async (id) => {

        console.log("hi", id);

        try {
            const response = await axios.post('http://localhost:8007/api/Login/removecart', {
                userID: userId,
                name: name
            });
            console.log('Response:', response.data.update);

            dispatch(add(response.data.update))
            // Handle response as needed
        } catch (error) {
            console.error('Error:', error);
            // Handle error as needed
        }


    }
    return (
        <div className="cards">
            <div className="images">
                <img src={`./Productimages/${img}`} />
            </div>
            <div className="others">
                <h2>{name} ${price}</h2>

                <button onClick={handelclick} >Remove TO CART</button>
            </div>

        </div>
    )


}
export default Addcards