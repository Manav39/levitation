import { useState, useEffect, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyDetails, useForm } from "../../context/context";
import { updateDetails } from "../../redux/store";

const StepFour = () => {
  const dispatch = useDispatch();
  const context = useForm();
  console.log(context?.ImgArray);
  const details = useSelector((state: { details: MyDetails }) => state.details);
  const [loc, setLoc] = useState<string>("");
  const [status, setStatus] = useState<string>("Waiting for geolocation...");
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[] | null>([]);
  const [error, setError] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const newSelectedFiles: File[] = [];

    if (files) {
      for (let i = 0; i < 3; i++) {
        const file = files[i];
        if (
          (file.type === "image/png" || file.type === "application/pdf") &&
          newSelectedFiles.length < 5
        ) {
          context?.ImgArray.push(file);
        } else {
          setError("Invalid file type or exceeding upload limit.");
          return;
        }
        const reader = new FileReader();
        reader.onload = () => {};

        reader.readAsBinaryString(file);
      }
    }

    setSelectedFiles(newSelectedFiles);
    setError("");
  };
  useEffect(() => {
    // Function to handle geolocation capture
    const captureGeolocation = () => {
      if (navigator.geolocation) {
        setStatus("Acquiring coordinates...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates({ latitude, longitude });
            setStatus("Geolocation captured!");
          },
          () => setStatus("Failed to capture geolocation.")
        );
      } else {
        setStatus("Geolocation is not supported by this browser.");
      }
    };

    captureGeolocation();

    return () => {};
  }, []);

  const handleDetails = () => {
    context?.setGeoLoc(
      "Latitude " +
        coordinates?.latitude.toString() +
        " Longitude " +
        coordinates?.longitude?.toString()
    );
    console.log(context?.ImgArray.length);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white shadow-md rounded px-8 pb-8 mb-4">
        <p className="font-bold text-2xl text-center mb-4 mt-2">
          Multi File Upload
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select a File (Upload limit 5 file(only PNG and PDF))
          </label>
          <input
            type="file"
            accept=".png,.pdf"
            onChange={handleFileChange}
            multiple
            required
          />
          {context?.ImgArray.length !== 0 ? (
            <p className="text-green-600">File has been Uploaded</p>
          ) : (
            <p className="text-red-600">Upload Files</p>
          )}
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {status}
          </label>
          {coordinates && (
            <p>
              Latitude: {coordinates.latitude}, Longitude:{" "}
              {coordinates.longitude}
            </p>
          )}
        </div>
        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          value="Save"
          onClick={handleDetails}
        />
      </div>
    </div>
  );
};

export { StepFour };
