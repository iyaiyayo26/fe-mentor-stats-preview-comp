export default function ImageBanner() {
  return (
    <>
      <section className="min-[100px]:block max-[767px]:block md:hidden bg-[#aa5cdb] ">
        <img src=".\images\image-header-mobile.jpg" alt="mobile-header" className="mix-blend-multiply opacity-75" />
      </section>
      <section className="min-[100px]:hidden max-[767px]:hidden  bg-[#aa5cdb] md:flex md:w-1/2">
        <img src=".\images\image-header-desktop.jpg" alt="desktop-header" className="mix-blend-multiply opacity-75" />
      </section>
    </>
  );
}
