import React, { useEffect, useState } from "react";
import { FaBox, FaEnvelope, FaGift, FaHome, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import secureLocalStorage from "react-secure-storage";
// import { EditprofileDetailsAction, fetchprofileDetailsAction, logoutUserAction } from "../../Redux/Action/Auth";
import { useDispatch, useSelector } from "react-redux";
// import store from "../../Redux/store";
import { toastfunc, toastsuccess } from "../../components/toast-style/toast-style";
import { useNavigate } from "react-router-dom";
// import { addCustomerAddressAction, DeleteCustomerAddressAction, fetchCountryListAction, fetchPincodeAction, getCustomerAddressAction } from "../../Redux/Action/Masters";

const Profile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isAddressOpen, setAddressOpen] = useState(false);
  const [isGiftOpen, setGiftOpen] = useState(false);
  const [isDelAccOpen, setDelAccOpen] = useState(false);
  const [isUnSubsOpen, setUnSubsOpen] = useState(false);
  const [isMyOrdersOpen, setOrderOpen] = useState(false);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [newemail, setnewemail] = useState("");
  const [password, setpassword] = useState("");



  //address
  const [pincode, setpincode] = useState("");
  const [type, settype] = useState("1");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [mobile, setmobile] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [address3, setaddress3] = useState("");
  const [is_default, setIsDefault] = useState();
  const [customername, setcustomername] = useState("");
  const [addressform, setaddressform] = useState(false);

  // const { getCustomerAddress } = useSelector((state) => state.getCustomerAddress);

  // const { PinCodeData } = useSelector((state) => state.PinCodedate);
  // const { CityEntries } = useSelector((state) => state.fetchCityEntries);
  // const { StateEntries } = useSelector((state) => state.fetchStateEntries);
  // const { CountryList } = useSelector(
  //   (state) => state.fetchCountryList
  // );


  // const countryOptions = CountryList?.map((obj) => {
  //   const container = {};
  //   container.value = obj.id_country;
  //   container.label = obj.name;
  //   return container;
  // });

  // const country_mobCodeOptions = CountryList?.map((obj) => {
  //   const container = {};
  //   container.value = obj.id_country;
  //   container.label = obj.mob_code;
  //   return container;
  // });

  // const stateOptions = StateEntries?.map((obj) => {
  //   const container = {};
  //   container.value = obj.id_state;
  //   container.label = obj.name;
  //   return container;
  // });

  // const cityOptions = CityEntries?.map((obj) => {
  //   const container = {};
  //   container.value = obj.id_city;
  //   container.label = obj.name;
  //   return container;
  // });

  // useEffect(() => {
  //   PinCodeData?.error_detail != undefined &&
  //     toastfunc(PinCodeData?.error_detail[0]),
  //     setcountry(null),
  //     setstate(null),
  //     setcity(null);
  // }, [PinCodeData?.error_detail]);


  // useEffect(() => {
  //   pincode.length < 6 &&
  //     setcountry("")
  //   setstate("")
  //   setcity("")

  // }, [pincode.length]);

  // useEffect(() => {
  //   setcountry(PinCodeData?.country?.label);
  //   setstate(PinCodeData?.state?.label);
  //   setcity(PinCodeData?.city?.label);
  // }, [PinCodeData]);


  // console.log(pincode.length < 6)
  // console.log("country", country)
  // console.log("state", state)
  // console.log("city", city)

  // useEffect(() => {
  //   dispatch(fetchCountryListAction());
  // }, []);



  // const { profileDetails } = useSelector((state) => state.profileDetails)
  const dispatch = useDispatch()

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const profilemodel = () => {
    setProfileOpen(true);
    setAddressOpen(false);
    setGiftOpen(false);
    setDelAccOpen(false);
    setUnSubsOpen(false);
    setOrderOpen(false);
  };

  const addressmodel = () => {
    setProfileOpen(false);
    setAddressOpen(true);
    setGiftOpen(false);
    setDelAccOpen(false);
    setUnSubsOpen(false);
    setOrderOpen(false);
  };

  const giftmodel = () => {
    setProfileOpen(false);
    setAddressOpen(false);
    setGiftOpen(true);
    setDelAccOpen(false);
    setUnSubsOpen(false);
    setOrderOpen(false);
  };

  const delAccmodel = () => {
    setProfileOpen(false);
    setAddressOpen(false);
    setGiftOpen(false);
    setDelAccOpen(true);
    setUnSubsOpen(false);
    setOrderOpen(false);
  };

  const unsubsribemodel = () => {
    setProfileOpen(false);
    setAddressOpen(false);
    setGiftOpen(false);
    setDelAccOpen(false);
    setUnSubsOpen(true);
    setOrderOpen(false);
  };

  const myordersmodel = () => {
    setProfileOpen(false);
    setAddressOpen(false);
    setGiftOpen(false);
    setDelAccOpen(false);
    setUnSubsOpen(false);
    setOrderOpen(true);
  };

  const closePasswordModal = () => setIsPasswordModalOpen(false);

  // const saveData = async () => {
  //   const splitname = name.split(" ")
  //   const adddata = {
  //     email: newemail,
  //     first_name: splitname[0] ? splitname[0] : "",
  //     last_name: splitname[1] ? splitname[1] : "",
  //     password: password
  //   }
  //   await dispatch(EditprofileDetailsAction(email, adddata))
  //   if (store.getState().EditprofileDetails.hasOwnProperty("error") == false) {
  //     toastsuccess("Profile Updated");
  //     closeEditModal()
  //     closePasswordModal()
  //   }
  //   closeEditModal()
  //   closePasswordModal()
  // }


  // const saveAddressData = async () => {
  //   const splitname = name.split(" ")
  //   const adddata = {
  //     name: customername,
  //     pincode: pincode,
  //     type: type ? type : 1,
  //     country: PinCodeData?.country?.value,
  //     state: PinCodeData?.state?.value,
  //     city: PinCodeData?.city?.value,
  //     mobile: mobile,
  //     address1: address1,
  //     address2: address2,
  //     address3: address3,
  //     is_default,

  //   }
  //   await dispatch(addCustomerAddressAction(adddata))
  //   if (store.getState().addCustomerAddress.hasOwnProperty("error") == false) {
  //     toastsuccess("Address Added Successfully");
  //     setaddressform(false);
  //   }
  // }

  useEffect(() => {
    setIsEditModalOpen(false);
    setIsPasswordModalOpen(false);
    setProfileOpen(true);
    setAddressOpen(false);
    // setemail(secureLocalStorage.getItem("pref")?.email)
  }, []);

  // useEffect(() => {
  //   email != "" && dispatch(fetchprofileDetailsAction(email))
  // }, [email])

  // useEffect(() => {
  //   setnewemail(profileDetails?.email)
  //   setname(profileDetails?.name)

  // }, [profileDetails])

  const navigate1 = useNavigate();
  // const handleSignout = async () => {
  //   localStorage.clear();
  //   await dispatch(logoutUserAction());
  //   navigate1({ pathname: `${process.env.PUBLIC_URL}/` });
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 600);
  // };

  const cleardata = () => {

    setcustomername("")
    setpincode("")
    settype("")
    setcountry("")
    setstate("")
    setcity("")
    setmobile("")
    setaddress1("")
    setaddress2("")
    setaddress3("")

  }
  const canceldata = () => {
    setaddressform(false)
    setcustomername("")
    setpincode("")
    settype("")
    setcountry("")
    setstate("")
    setcity("")
    setmobile("")
    setaddress1("")
    setaddress2("")
    setaddress3("")

  }


  // const handleRemove = async (id) => {
  //   await dispatch(DeleteCustomerAddressAction(id));
  //   if (store.getState().DeleteCustomerAddress.hasOwnProperty("error") == false) {
  //     toastsuccess("Address Deleted Successfully.");
  //   }
  // };

  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { icon: <FaPencilAlt className="text-blue-500" />, label: "My Profile", onClick: profilemodel },
    { icon: <FaHome className="text-green-500" />, label: "My Address", onClick: addressmodel },
    { icon: <FaBox className="text-yellow-500" />, label: "My Orders", onClick: myordersmodel },
    { icon: <FaGift className="text-pink-500" />, label: "Gift Cards", onClick: giftmodel },
    { icon: <FaTrashAlt className="text-red-500" />, label: "Delete My Account", onClick: delAccmodel },
    { icon: <FaEnvelope className="text-purple-500" />, label: "Unsubscribe", onClick: unsubsribemodel },
  ];


  // useEffect(() => {
  //   dispatch(getCustomerAddressAction());
  // }, [])

  return (
    <div className="flex flex-col  md:flex-row gap-12 font-testfont">
      <div className="flex flex-col space-y-5 md:block hidden bg-white border border-gray-200 gap-5 w-full ml-16 md:w-64 p-6 mt-10 mb-10 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">My Account</h2>
        {menuItems?.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer flex justify-between items-center p-4 rounded-lg border-2 transition-all ease-in-out duration-200 ${activeItem === index
              ? 'border-blue-500 bg-blue-50 text-blue-700' // Active state styles
              : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            onClick={() => {
              setActiveItem(index); // Set the active item
              item.onClick();
            }}
          >
            <span className="flex items-center gap-3 font-medium">
              {item.icon}
              {item.label}
            </span>
            <IoIosArrowForward className={`${activeItem === index ? 'text-blue-500' : 'text-gray-400'}`} />
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full md:w-2/3">
        {/* Profile Section */}
        {isProfileOpen && (
          <div className="bg-white p-6 mt-10 mb-10 rounded-md border border-gray-200 mx-5">
            <div className="flex mb-5 justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800">Profile Details</h2>
              <FaPencilAlt
                className="cursor-pointer text-gray-600 hover:text-gray-800"
                onClick={openEditModal}
              />
            </div>
            <p className="text-lg font-medium text-gray-700 mb-1">{name}</p>
            <p className="text-md text-gray-600 mb-6">{newemail}</p>

            {/* Additional Options */}
            <h3 className="text-lg font-semibold text-gray-800">Additional Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {[
                { label: 'My Address', onClick: addressmodel },
                { label: 'My Orders', onClick: myordersmodel },
                { label: 'Gift Cards', onClick: giftmodel },
                { label: 'Delete my account', onClick: delAccmodel },
                { label: 'Unsubscribe', onClick: unsubsribemodel }
              ].map((item, index) => (
                <div
                  key={index}
                  className="md:h-32 flex justify-center items-center text-center p-4 border border-gray-200 rounded-lg cursor-pointer transition-all hover:shadow-md hover:bg-gray-50"
                  onClick={item.onClick}
                >
                  {item.label}
                </div>
              ))}
            </div>

            {/* Sign Out Button */}
            <button
              className="mt-6 inline-flex items-center justify-center w-40 h-12 bg-red-500 text-white rounded-md shadow-lg hover:bg-red-600 transition-colors font-semibold"
              onClick={() => handleSignout()}
            >
              Sign out
            </button>
          </div>
        )}

        {/* Address Tab */}
        {isAddressOpen && (
          <div className="mt-12">
            {/* Back Button */}
            <button
              className="flex ml-3 text-red-500 hover:text-red-600"
              onClick={profilemodel}
            >
              <IoIosArrowBack className="mr-1 mt-1" /> Back
            </button>

            {/* Main Container */}
            {/* No Saved Address Section */}
            {/* {getCustomerAddress.length == 0 ? (
              <div className="bg-white p-6 mt-5 rounded-md  text-center border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-600">
                  No Saved Address
                </h2>
              </div>
            ) : (
              <div className="bg-white p-6 mt-5 lg:mt-5 lg:m-0 m-4 rounded-md text-left border border-gray-300">
                {getCustomerAddress?.map((row, index) => {
                  return (
                    <div key={index} className="py-4 px-8 border border-gray-200 mt-5 rounded-md">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          className="-ml-5 accent-pink-500"
                          checked={row.is_default}
                        />{" "}
                        <h1 className="font-testfont ml-3 uppercase"> {row.name} </h1>
                      </div>

                      <h1 className="text-black font-testfont font-semibold mt-3 text-[16px] capitalize">
                        {row.address1}, {row.address2}, {row.address3}.
                      </h1>
                      <h1 className="text-black font-testfont font-semibold text-[16px] capitalize">
                        {row.city.label}, {row.state.label}, {row.pincode}.
                      </h1>
                      <h1 className="text-black font-testfont font-semibold text-[16px] capitalize">
                        {row.country.label}
                      </h1>
                      <h1 className="text-[#282c3f] font-testfont mt-3 text-[16px] capitalize">
                        Mobile:&nbsp; <span className="text-black font-testfont font-semibold"> {row.mobile}</span>
                      </h1>

                      <div className="flex justify-center items-center mt-5 pt-4 border border-gray-300 py-3">
                        <button
                          className="text-black font-semibold hover:underline"
                          onClick={() => handleEdit(row.id)}
                        >
                          EDIT
                        </button>
                        <div className="border-r border-gray-300 mx-6 h-full"></div>
                        <button
                          className="text-black font-semibold hover:underline"
                          onClick={() => handleRemove(row.id)}
                        >
                          REMOVE
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            )} */}

            {/* Add Address Button */}
            <div className="bg-white p-6 mt-5 lg:mt-5 lg:mb-5 lg:m-0 m-4 rounded-md text-center border border-gray-200">
              <div className="flex justify-center items-center mt-8">
                <button
                  className="px-6 py-2 border-2 border-black rounded-md text-black font-semibold"
                  onClick={() => setaddressform(true)}
                >
                  Add a new address
                </button>
              </div>
            </div>
            {addressform && (
              <div className="border lg:m-0 m-4 lg:mt-10 lg:mb-10 border-gray-200 mt-10 mb-10">
                <div className="bg-white p-8 rounded-lg ">
                  <div className="flex gap-3 mb-4 ">
                    Type of Address :
                    <input
                      type="radio"
                      name="home"
                      className="mt-1 cursor-pointer"
                      value={"1"}
                      checked={type == "1"}
                    />{" "}
                    <label>Home</label>{" "}
                    <input
                      type="radio"
                      name="company"
                      className="mt-1 cursor-pointer"
                      value={"2"}
                      checked={type == "2"}
                    />{" "}
                    <label>Company</label>
                  </div>
                  <div className="flex gap-3 mb-4 ">
                    <input
                      type="checkbox"
                      checked={is_default}
                      onChange={(e) => setIsDefault(e.target.checked)}
                      className="custom-control-input mt-1 rounded-sm"
                      id="is_default"
                    />
                    <label>Make this as my default address</label>
                  </div>

                  <input
                    type="text"
                    value={pincode}
                    maxLength={6}
                    onChange={(e) => {
                      setpincode(e.target.value);
                      e.target.value.length == 6 &&
                        dispatch(fetchPincodeAction(e.target.value));
                      e.target.value == 0 && setcity(null);
                      setstate(null);
                      setcountry(null);
                    }}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="Enter your Pincode"
                  />
                  <input
                    type="text"

                    value={customername}
                    onChange={(e) => setcustomername(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="Enter your Name"
                  />
                  <input
                    type="text"
                    value={country}
                    disabled
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="Country"
                  /><input
                    type="text"
                    value={state}
                    disabled
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="State"
                  /><input
                    type="text"
                    value={city}
                    disabled
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="City"
                  />

                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setmobile(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="Enter your Mobile"
                  />
                  <input
                    type="text"
                    value={address1}
                    onChange={(e) => setaddress1(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="Enter your Address1"
                  />
                  <input
                    type="text"
                    value={address2}
                    onChange={(e) => setaddress2(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="Enter your Address2"
                  />
                  <input
                    type="text"
                    value={address3}
                    onChange={(e) => setaddress3(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="Enter your Address3"
                  />

                 
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => canceldata()}
                      className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition-colors"
                    >
                      Cancel
                    </button>

                    {/* Save Button */}
                    <button
                      onClick={() => saveAddressData()}
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* Gift Tab */}
        {isGiftOpen && (
          <div className="mt-12">
            <button className="flex ml-3 text-red-500 hover:text-red-600" onClick={profilemodel}>
              <IoIosArrowBack className="mr-1 mt-1" /> Back
            </button>
            <div className="bg-white p-6 mt-10 mb-10 rounded-md shadow-md mx-5">
              <h2 className="text-2xl font-semibold text-center text-gray-800">Gift Tab</h2>
            </div>
          </div>
        )}

        {/* Unsubscribe Tab */}
        {isUnSubsOpen && (
          <div className="mt-12">
            <button className="flex ml-3 text-red-500 hover:text-red-600" onClick={profilemodel}>
              <IoIosArrowBack className="mr-1 mt-1" /> Back
            </button>
            <div className="bg-white p-6 mt-10 mb-10 rounded-md shadow-md mx-5">
              <h2 className="text-2xl font-semibold text-center text-gray-800">Unsubscribe Tab</h2>
            </div>
          </div>
        )}

        {/* Delete Account Tab */}
        {isDelAccOpen && (
          <div className="mt-12">
            <button className="flex ml-3 text-red-500 hover:text-red-600" onClick={profilemodel}>
              <IoIosArrowBack className="mr-1 mt-1" /> Back
            </button>
            <div className="bg-white p-6 mt-10 mb-10 rounded-md shadow-md mx-5">
              <h2 className="text-2xl font-semibold text-center text-gray-800">Delete Account Tab</h2>
            </div>
          </div>
        )}

        {/* My Orders Tab */}
        {isMyOrdersOpen && (
          <div className="mt-12">
            <button className="flex ml-3 mt-5 text-red-500 hover:text-red-600" onClick={profilemodel}>
              <IoIosArrowBack className="mr-1 mt-1" /> Back
            </button>
            <div className="bg-white p-6 mt-10 mb-10 rounded-md shadow-md mx-5">
              <h2 className="text-2xl font-semibold text-center text-gray-800">My Orders Tab</h2>
            </div>
          </div>
        )}
      </div>


      {/* Edit Profile Popup */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
            {/* Modal Header */}
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Edit Profile</h3>

            {/* Name Input */}
            <input
              type="text"
              defaultValue={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              placeholder="Enter your name"
            />

            {/* Email Input */}
            <input
              type="email"
              defaultValue={newemail}
              onChange={(e) => setnewemail(e.target.value)}
              className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              placeholder="Enter your email"
            />

            {/* Modal Footer: Buttons */}
            <div className="flex justify-end space-x-4">
              {/* Cancel Button */}
              <button
                onClick={() => closeEditModal()}
                className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>

              {/* Save Button */}
              <button
                onClick={() => saveData()}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>


      )}

    </div>
  );
};

export default Profile;
