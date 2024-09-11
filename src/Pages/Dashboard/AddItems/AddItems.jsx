import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItems = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };

      const menuRes = await axiosSecure.post("menu", menuItems);
      console.log(menuRes);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="mt-10">
      <SectionTitle heading="add a item" subHeading="What's new"></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <div className="w-[34rem]  ">
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered input-accent w-full mb-6 "
            />
            <div className="flex justify-center gap-5">
              <select
                defaultValue={"default"}
                {...register("category")}
                className="select select-bordered w-full mb-6 "
              >
                <option disabled value={"default"}>
                  Select A Category
                </option>
                <option value="popular">Popular</option>
                <option value="salad">Salad</option>
                <option value="dessert">Dessert</option>
                <option value="soup">Soup</option>
                <option value="pizza">Pizza</option>
                <option value="offered">Offered</option>
              </select>
              <input
                {...register("price")}
                type="text"
                placeholder="Price"
                className="input input-bordered input-accent w-full mb-6 "
              />
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered w-full h-24 mb-6"
              placeholder="Recipe Details"
            ></textarea>

            <input
              {...register("image")}
              type="file"
              className="file-input w-80"
            />
            <div className="mt-6">
              <button className="btn bg-amber-600 text-white ">Add Item</button>
            </div>
          </div>
        </div>
      </form>

      
    </div>
  );
};

export default AddItems;
