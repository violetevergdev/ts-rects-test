interface Error {
  error: string;
}
const Error = ({ error }: Error) => {
  return <p className="text-center text-red-400">{error}</p>;
};

export default Error;
