import "./App.css";

function App() {
  return (
    <div className="container mx-auto rounded-lg w-[300px] bg-dark-desaturated-blue overflow-hidden my-10 md:flex md:flex-row-reverse md:w-[700px] ">
      {/* bagian atas */}
      {/* gambar dibawah ukuran 768px */}
      <section className="min-[100px]:block max-[767px]:block md:hidden bg-[#aa5cdb] ">
        <img src=".\images\image-header-mobile.jpg" alt="mobile-header" className="mix-blend-multiply opacity-75" />
      </section>
      <section className="min-[100px]:hidden max-[767px]:hidden  bg-[#aa5cdb] md:flex md:w-1/2">
        <img src=".\images\image-header-desktop.jpg" alt="desktop-header" className="mix-blend-multiply opacity-75" />
      </section>
      {/* bagian bawah */}
      <div className="text-center md:text-left p-5 md:w-1/2 md:my-5">
        {/* deskripsi */}
        <section className="">
          <p className="text-white font-lexend-deca font-bold text-lg px-5 ">
            Get <span className="text-purple-500">insights</span> that help your business grow.
          </p>
          <p className="text-slightly-transparent-white font-inter text-xs my-4 px-7 md:px-5">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
        </section>
        {/* bagian status */}
        <section className="my-2 md:mt-10 md:px-5 md:flex  md:flex-row md:space-x-0">
          <div className="text-center md:text-left  my-2 md:flex-auto">
            <h1 className="text-white font-lexend-deca font-bold">10k+</h1>
            <p className="uppercase font-inter text-slightly-transparent-white font-medium text-[10px]">companies</p>
          </div>
          <div className="text-center md:text-left  my-2 md:flex-auto">
            <h1 className="text-white font-lexend-deca font-bold">314</h1>
            <p className="uppercase font-inter text-slightly-transparent-white font-medium text-[10px]">templates</p>
          </div>
          <div className="text-center md:text-left  my-2 md:flex-auto">
            <h1 className="text-white font-lexend-deca font-bold">12M+</h1>
            <p className="uppercase font-inter text-slightly-transparent-white font-medium text-[10px]">queries</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
