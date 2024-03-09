const Error = (props) => {
  const { message } = props;
  return (
    <div className="w-full m-auto dark:bg-red-500 bg-red-400 border-2 border-red-600 p-4 rounded-md my-5 text-white">
      <p className="text-center max-w-[90%] m-auto">{message}</p>
    </div>
  );
};
export default Error;
