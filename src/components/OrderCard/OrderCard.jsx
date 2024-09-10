
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCarts from '../../hooks/useCarts';



const OrderCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
 const navigate = useNavigate();
 const location = useLocation();
 const [, refetch]= useCarts();
  const {user}= useAuth();
 const axiosSecure = useAxiosSecure();
  const handleAddToCart = (food)=>{
    // console.log(food)
       if(user && user.email){
            //  console.log(user.email, food);
            const cartItem = {
                  menuId: _id,
                  email: user.email,
                  name,
                  image,
                  price
            }
            axiosSecure.post('carts', cartItem).then(res=>{
              if(res.data.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Cart successfully added",
                  showConfirmButton: false,
                  timer: 1500
                });

                refetch();
              }
            })
       }
       else{
        Swal.fire({
          title: "Sorry you'r not logged in",
          text: "Please login first",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login"
        }).then((result) => {
          if (result.isConfirmed) {

            navigate('/login', {state: {from: location }})
            // Swal.fire({
            //   title: "Deleted!",
            //   text: "Your file has been deleted.",
            //   icon: "success"
            // });
          }
        });
       }
  }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="bg-orange-500 px-2 py-1 w-20 text-center absolute text-white font-medium top-4 right-4">
            ${price}
          </p>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={()=>handleAddToCart(item)} className="py-2   px-3 mt-3 border-b-orange-500 border-b-2 rounded-lg font-medium hover:bg-orange-400 hover:text-white">  Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
