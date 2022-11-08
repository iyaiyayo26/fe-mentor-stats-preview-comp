import Status from "./Status";

export default function Description() {
  return (
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
        <Status heading="10k+" status="companies" />
        <Status heading="314" status="templates" />
        <Status heading="12M+" status="queries" />
      </section>
    </div>
  );
}
