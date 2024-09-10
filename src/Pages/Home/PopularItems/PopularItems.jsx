import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle"
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";


const PopularItems = () => {

     const [menu]= useMenu();

     const popular = menu.filter(item=> item.category === "popular")
//   const [menu, setMenu]= useState([]);

//   useEffect(()=>{
//            fetch('Menu.json')
//            .then(res=> res.json()).then(data=> {
//             const popularMenu = data.filter(item=> item.category === "popular")
//             setMenu(popularMenu)
//            })
//   },[])
//   console.log(menu)
  return (
   <div>
        <SectionTitle heading={"FROM OUR MENU"} subHeading = {"Check it out"}></SectionTitle>

        <div className="grid grid-cols-2 gap-10">
             {
              popular.map(item=> <MenuItems key={item._id} item={item} ></MenuItems>)
             }
        </div>
   </div>
  )
}

export default PopularItems