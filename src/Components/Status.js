export default function Status({ heading, status }) {
  return (
    <div className="text-center md:text-left  my-2 md:flex-auto">
      <h1 className="text-white font-lexend-deca font-bold">{heading}</h1>
      <p className="uppercase font-inter text-slightly-transparent-white font-medium text-[10px]">{status}</p>
    </div>
  );
}
