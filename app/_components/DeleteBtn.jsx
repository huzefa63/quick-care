'use client';

import { deleteAccountAction } from "@/actions/deleteAccountAction";
import { useRef } from "react";
import { MdDelete } from "react-icons/md";

function DeleteBtn() {
  const ref = useRef(null);
  function handleSubmit(e){
    e.preventDefault();
    const confirmed = window.confirm('are you sure you want to delete your account ?');
    if(confirmed) ref.current.requestSubmit();
  }
    return (
      <form ref={ref} action={deleteAccountAction}>
        <button onClick={handleSubmit} className="bg-red-500 gap-2 text-white px-4 py-2 flex items-center">
          <MdDelete />
          Delete Account
        </button>
      </form>
    );
}

export default DeleteBtn
