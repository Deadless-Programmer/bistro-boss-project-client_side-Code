import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    isPending,
    error,
    data: users = [], refetch
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("users");
      return res.data;
    },
  });

  const handleMakeAdmin =(user)=>{
    
          axiosSecure.patch(`users/admin/${user._id}`).then(res=>{
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
          })
  }

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="flex justify-around items-center mt-10 mb-10">
          <h1 className="text-2xl">All Users </h1>
          <h1 className="text-2xl">Total Price :{users.length}</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                 
                    { item.role === 'admin' ? 'Admin' : <button
                      onClick={() => handleMakeAdmin(item)}
                      className=" btn bg-orange-500 text-white text-xl"
                    >
                      <FaUser />
                    </button>}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(item._id)}
                      className=" btn bg-red-500 text-white text-xl"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
