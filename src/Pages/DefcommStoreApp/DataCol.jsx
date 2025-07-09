import React from "react";
import NavTwo from "../../Components/Header/NavTwo";
import divOne from "../../assets/arcticons_govee-home.png";
import VectorA from "../../assets/simple-icons_appstore.png";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import HeaderBar from "./HeaderBar";

export default function DataCollection() {
  const navigate = useNavigate();

  return (
    <>
      <NavTwo />

      <div className="bg-deffcom-limagradiant py-10 overflow-x-hidden">
        <HeaderBar />
        <div className="my-2 flex items-center justify-end px-10">
          <div
            className="bg-deffcom-lima border-2 border-lime-400 w-14 h-14 flex justify-center items-center rounded-4xl text-white cursor-pointer"
            onClick={() => navigate("/store/appCert")}
          >
            <FaPlus />
          </div>
        </div>

        {/* Main content */}
        <div className="px-4 md:px-10 max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="bg-[#89AF20] rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none p-6 md:py-20 flex justify-center md:items-start">
              <img
                src={VectorA}
                alt="App Store Icon"
                className="max-w-[200px]"
              />
            </div>

            {/* Right panel */}
            <div className="bg-white w-full rounded-b-[20px] md:rounded-r-[20px] md:rounded-bl-none px-4 md:px-10 py-10 text-justify">
              <h1 className="text-3xl font-bold mb-6">Data Collection</h1>
              <p className="mb-6">
                Next, choose all the data collected by you or your third-party
                partners through this app. If your app is already available on
                the App Store, ensure your responses only reflect the data
                collected from the current version.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                Optional Disclosure
              </h2>
              <p className="mb-4">
                Data types that meet all the following criteria are optional to
                disclose:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  Data not used for tracking purposes. See{" "}
                  <span className="underline">
                    App privacy details on the App Store
                  </span>
                  .
                </li>
                <li>
                  Data not used for Third-Party Advertising or Marketing, or
                  Other Purposes.
                </li>
                <li>
                  Collection only happens in infrequent, optional scenarios.
                </li>
                <li>
                  Data collection must be transparent and user-consented at each
                  time.
                </li>
              </ul>

              <p className="mt-6 text-sm">
                If a data type meets only some of the criteria, it must still be
                disclosed. For example, feedback form data unrelated to the
                app’s primary function might be excluded only if optional and
                consented.
              </p>

              {/* Sections */}
              <div className="mt-10 space-y-8">
                {/* Section: Contact Info */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Contact Info</h2>
                  {[
                    ["Name", "Including first or last name"],
                    [
                      "Email Address",
                      "Including but not limited to a hashed email address",
                    ],
                    [
                      "Phone Number",
                      "Including but not limited to a hashed phone number",
                    ],
                    [
                      "Physical Address",
                      "Such as home, mailing, or physical address",
                    ],
                    [
                      "Other User Contact Info",
                      "Any other info to contact the user",
                    ],
                  ].map(([label, desc], index) => (
                    <div key={index} className="mb-3">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-lime-400 cursor-pointer"
                        />
                        <span>{label}</span>
                      </div>
                      <p className="pl-7 text-xs text-gray-600">{desc}</p>
                    </div>
                  ))}
                </div>

                {/* Section: Location */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Location</h2>
                  {[
                    [
                      "Precise Location",
                      "Same or greater resolution than latitude/longitude with 3+ decimals",
                    ],
                    [
                      "Coarse Location",
                      "Lower resolution like approximate location services",
                    ],
                  ].map(([label, desc], index) => (
                    <div key={index} className="mb-3">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-lime-400 cursor-pointer"
                        />
                        <span>{label}</span>
                      </div>
                      <p className="pl-7 text-xs text-gray-600">{desc}</p>
                    </div>
                  ))}
                </div>

                {/* Section: Sensitive Info */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Sensitive Info</h2>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="appearance-none h-4 w-4 border border-black rounded bg-white checked:bg-lime-400 cursor-pointer mt-1"
                    />
                    <p className="text-sm">
                      Such as racial or ethnic data, sexual orientation,
                      pregnancy or childbirth info, disability, beliefs,
                      political opinion, biometric data, and more.
                    </p>
                  </div>
                </div>
              </div>

              {/* END */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
