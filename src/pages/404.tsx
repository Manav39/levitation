import err from "../assets/404.png";
const Error = () => {
  return (
    <div className="bg-orange-400">
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <img src={err} alt="error" />
        </div>
      </div>
    </div>
  );
};

export { Error };
