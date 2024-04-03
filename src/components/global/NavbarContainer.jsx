export default function NavbarContainer({ title, children }) {
  return (
    <div className="py-2 bg-blue flex justify-around items-center text-white font-bold">
      <h1 className=" text-[36px] font-bold">{title}</h1>
      {children}
      <div className="flex">
        <a
          className="text-lg px-3 py-2 mr-6 bg-white text-blue rounded"
          href="/"
        >
          Logout
        </a>
        <a className="text-lg flex items-center" href="/">
          Home
          <img className="ml-2" src="/assets/icons/right-arrow.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
