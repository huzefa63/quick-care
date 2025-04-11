'use client';
import { MdDelete } from "react-icons/md";

import { deleteAccountAction } from "@/actions/deleteAccountAction";

function DeleteBtn() {
    return (
      <form action={deleteAccountAction}>
        <button className="bg-red-500 gap-2 text-white px-4 py-2 flex items-center">
          <MdDelete />
          Delete Account
        </button>
      </form>
    );
}

export default DeleteBtn
