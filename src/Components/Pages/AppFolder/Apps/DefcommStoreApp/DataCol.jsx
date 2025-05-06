import React from "react";
import NavTwo from "../../../../Header/NavTwo";
import divOne from "../../../../../assets/arcticons_govee-home.png";
import VectorA from "../../../../../assets/simple-icons_appstore.png";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";



export default function DataCollection() {
    const navigate = useNavigate();


    return (
        <>
            <NavTwo />
            <div className="bg-deffcom-limagradiant py-20">
                <div className="flex pt-4 pb-20 justify-between px-20 ">
                    <div className="p-4 bg-stone-600 border-l-8 border-lime-400">
                        <img
                            src={divOne}
                            alt=""
                            className="p-6 rounded-3xl bg-deffcom-lima" />
                    </div>

                    <div
                        className={`top-64 bg-deffcom-lima border-2 border-lime-400 w-14 h-14 flex justify-center items-center rounded-4xl text-white`}
                        onClick={() => navigate("/appCert")}
                    >
                        <FaPlus />
                    </div>
                </div>

                <div className="px-10">
                    <div className="flex">
                        <div className="rounded-l-[20px] py-20 bg-lime-400 px-10 ">
                            <img src={VectorA} alt="" className="max-w-[200px]" />
                        </div>

                        <div className="">
                            <div className="relative grid py-20  pb-80 rounded-r-[20px] bg-white w-full  px-30">
                                <label htmlFor="" className="py-3 text-3xl font-bold">
                                    Data Collection
                                </label>

                                <p className="py-4">
                                    Next, choose all the data collected by you or your third-party
                                    partners through this app. If your app is already available on
                                    the App Store, ensure your responses only reflect the data
                                    collected from the current version
                                </p>

                                <label htmlFor="" className="py-3 text-3xl font-bold">
                                    Optional Disclosure
                                </label>

                                <p className="py-4">
                                    Data types that meets all the following criteria are optional
                                    to disclose:
                                </p>

                                <ul className="px-10 list-disc ">
                                    <li className="py-2">
                                        The data is not used for tracking purposes (meaning the data
                                        is not linked with other third-party data about the user or
                                        device for advertising or advertising measurement, or shared
                                        with a data broker). For more detail see{" "}
                                        <span className="underline">
                                            App privacy details on the App Store.
                                        </span>
                                    </li>

                                    <li className="pb-2">

                                        The data is not used for Third-Party Advertising, your
                                        Advertising or Marketing purposes, or for Other Purposes, as
                                        those terms are defined in
                                        <span className="underline">
                                            App privacy details on the App Store.
                                        </span>
                                    </li>

                                    <li className="pb-2">
                                        Collection of the data occurs only in infrequent cases that
                                        are not part of your app’s primary functionality, and which
                                        are optional for the user.
                                    </li>

                                    <li className="pb-2">
                                        As part of the interface in your app where the user provides
                                        the data to be collected, such data must be transparent to
                                        the user at the time of collection, the user’s name or
                                        account name must be prominently displayed in the submission
                                        form alongside the other data elements being submitted, and
                                        the user must affirmatively choose each time to provide the
                                        data for collection.
                                    </li>


                                </ul>



                                <div className="py-4">
                                    If a data type collected by your app meets some, but not all,
                                    of the above criteria, it must be disclosed in your privacy
                                    section. <br /> Examples of data that may not need to be
                                    disclosed include data collected in optional feedback forms or
                                    customer service requests that are unrelated to the primary
                                    purpose of the app and meet the other criteria above. <br />
                                    For the purpose of clarity, data collected on an ongoing basis
                                    after an initial request for permission must be disclosed.
                                </div>

                                <div className="py-4 ">
                                    <label htmlFor="" className="py-3 text-xl font-bold">
                                        Contact Info
                                    </label>
                                    <div className="py-3">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className={`appearance-none  text-white py-2 h-4 w-4 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`} />
                                            Name
                                        </div>
                                        <p className="pl-7 text-[12px]">
                                            Including first or last name
                                        </p>
                                    </div>

                                    <div className="py-3">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className={`appearance-none  text-white py-2 h-4 w-4 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`} />
                                            Email Address
                                        </div>
                                        <p className="pl-7 text-[12px]">
                                            Including but not limited to a hashed email address
                                        </p>
                                    </div>

                                    <div className="py-3">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className={`appearance-none  text-white py-2 h-4 w-4 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`} />
                                            Phone Number
                                        </div>
                                        <p className="pl-7 text-[12px]">
                                            Including but not limited to a hashed phone number
                                        </p>
                                    </div>

                                    <div className="py-3">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className={`appearance-none  text-white py-2 h-4 w-4 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`} />
                                            Physical Address
                                        </div>
                                        <p className="pl-7 text-[12px]">
                                            Such as a home address, physical address, or mailing
                                            address
                                        </p>
                                    </div>

                                    <div className="py-3">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className={`appearance-none  text-white py-2 h-4 w-4 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`} />
                                            Other User Contact Info
                                        </div>
                                        <p className="pl-7 text-[12px]">
                                            Any other information that can be used to contact the user
                                            outside the app
                                        </p>
                                    </div>
                                </div>

                                <div className="py-4 ">
                                    <label htmlFor="" className="py-3 text-xl font-bold">
                                        Location
                                    </label>
                                    <div className="py-3">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className={`appearance-none  font-bold text-white py-2 h-4 w-4 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`} />
                                            Precise Location
                                        </div>
                                        <p className="pl-7 text-[12px]">
                                            Information that describes the location of a user or
                                            device with the same or greater resolution as a latitude
                                            and longitude with three or more decimal places
                                        </p>
                                    </div>

                                    <div className="py-3">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className={`appearance-none font-bold text-white py-2 h-4 w-4 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`} />
                                            Coarse Location
                                        </div>
                                        <p className="pl-7 text-[12px]">
                                            Information that describes the location of a user or
                                            device with lower resolution than a latitude and longitude
                                            with three or more decimal places, such as approximate
                                            location services
                                        </p>
                                    </div>
                                </div>

                                <div className="py-4 ">
                                    <label htmlFor="" className="py-3 text-xl font-bold">
                                        Sensitive Info
                                    </label>
                                    <div className="py-3 text-[15px]">
                                        <div className="flex gap-3">
                                            <input
                                                type="checkbox"
                                                className={`appearance-none text-white my-1 py-2 h-4 w-4 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`} />
                                            Such as racial or ethnic data, sexual orientation,
                                            pregnancy or childbirth information, disability, religious
                                            or philosophical beliefs, trade union membership,
                                            political opinion, genetic information, or biometric data
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}