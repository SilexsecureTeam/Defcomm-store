import { toast } from "react-toastify";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";

export const onSuccess = ({ message = "Success", success = "" }) => {
  toast(
    <div className="flex items-center z-[100000000] gap-2 text-lime-700">
      <MdCheckCircle className="text-[25px]" />
      <div className="flex flex-col">
        <strong className="text-sm">{message}</strong>
        <p className="text-[13px] text-gray-400">{success}</p>
      </div>
    </div>
  );
};

export const onFailure = ({ message = "Something went wrong", error = "" }) => {
  toast(
    <div className="flex items-center w-fit z-[99999999] text-red-600 gap-2">
      <MdCancel className="text-[25px]" />
      <div className="flex flex-col">
        <strong className="text-sm capitalize">{message}</strong>
        <p className="text-[13px] text-gray-500">{error}</p>
      </div>
    </div>
  );
};

export const onPrompt = ({ title = "Prompt", message = "" }) => {
  toast(
    <div className="flex items-center gap-2 z-[99999999] text-gray-500">
      <IoInformationCircle className="text-[25px]" />
      <div className="flex flex-col">
        <strong className="text-sm">{title}</strong>
        <p className="text-[13px]">{message}</p>
      </div>
    </div>
  );
};
