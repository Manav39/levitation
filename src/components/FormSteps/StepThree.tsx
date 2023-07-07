import { useState } from "react";
import { useForm } from "../../context/context";

const StepThree = () => {
  const context = useForm();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 1) {
      window.alert("Only one file can be uploaded.");
    } else {
      const file = files?.[0];
      if (file) {
        if (file.type === "image/png" || file.type === "application/pdf") {
          setSelectedFile(file);
          setError("");
        } else {
          setSelectedFile(null);
          setError("Invalid file type. Please select a PNG or PDF file.");
        }
      }
    }
  };

  const handleChange = () => {
    context?.setImgFiles(selectedFile);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white shadow-md rounded px-8 pb-8 mb-4">
        <p className="font-bold text-2xl text-center mb-4 mt-2">File Upload</p>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select a File (Upload limit 1 file(only PNG and PDF))
          </label>
          <input
            type="file"
            accept=".png,.pdf"
            onChange={handleFileChange}
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          {selectedFile && selectedFile.type === "image/png" && (
            <div>
              <img
                src={URL.createObjectURL(selectedFile)}
                className="h-[200px] w-full"
                alt="Selected File"
              />
              <p>{selectedFile.name}</p>
            </div>
          )}
        </div>
        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          value="Save"
          onClick={handleChange}
        />
        {context?.ImgFiles !== null ? (
          <p className="text-green-600">Fil has been Uploaded</p>
        ) : (
          <p className="text-red-600">Upload a File</p>
        )}
      </div>
    </div>
  );
};

export { StepThree };
