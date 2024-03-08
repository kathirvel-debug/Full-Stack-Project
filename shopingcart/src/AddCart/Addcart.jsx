import '../App.css'
import Addcards from './addcards';
import { userSelectors } from '../Redux/userLoginReducer'
import { useSelector } from "react-redux";

function AddCart() {
    const { cartItems } = useSelector(userSelectors)
    return (
        <>


            <div className="container">
               

                <div className="cardsmodule">
                    {/* {cartItems.map((x)=>(
                        <Addcards name={x.name} price={x.price} key={x.id} id={x.id} img={x.img}/>
                    ))} */}
                    {cartItems.map((x) => {

                        return (

                            <Addcards
                                name={x.name}
                                price={x.price}
                                key={x._id}
                                id={x._id}
                                img={x.image} // Pass the converted image src
                            />
                        );
                    })}

                </div>
            </div>
        </>
    )
}

export default AddCart