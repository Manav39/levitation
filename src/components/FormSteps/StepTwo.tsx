import { MyDetails } from "../../context/context";
import { useSelector, useDispatch } from "react-redux";
import { updateDetails } from "../../redux/store";
const StepTwo = () => {
  const details = useSelector((state: { details: MyDetails }) => state.details);
  const dispatch = useDispatch();

  // Update the details state
  const handleInputChange = (key: string, value: string) => {
    const updatedDetails: MyDetails = {
      [key]: value,
    };
    dispatch(updateDetails(updatedDetails));
  };
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white shadow-md rounded px-8 pb-8 mb-4">
        <p className="font-bold text-2xl text-center mb-4 mt-2">Address</p>
        <form>
          <div className="flex justify-between gap-5">
            <section>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address Line 1
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="addr1"
                  type="text"
                  placeholder="Enter Addres ..."
                  value={details.address1}
                  onChange={(e) =>
                    handleInputChange("address1", e.target.value)
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  City
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="Enter city"
                  value={details.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Pincode
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="pincode"
                  type="number"
                  placeholder="Enter PIN Code"
                  value={details.pincode}
                  onChange={(e) => handleInputChange("pincode", e.target.value)}
                  required
                />
              </div>
            </section>
            <section>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address Line 2
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="addr2"
                  type="text"
                  placeholder="Enter Addres ..."
                  value={details.address2}
                  onChange={(e) =>
                    handleInputChange("address2", e.target.value)
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  State
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="state"
                  type="text"
                  placeholder="Enter State "
                  value={details.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Country
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="country"
                  type="text"
                  placeholder="Enter Country"
                  value={details.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  required
                />
              </div>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
};

export { StepTwo };
