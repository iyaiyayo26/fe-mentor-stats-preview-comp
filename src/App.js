import "./App.css";
import Description from "./Components/Description";
import ImageBanner from "./Components/ImageBanner";

function App() {
  return (
    <div className="container mx-auto rounded-lg w-[300px] bg-dark-desaturated-blue overflow-hidden my-10 md:flex md:flex-row-reverse md:w-[700px] ">
      {/* bagian atas */}
      {/* gambar dibawah ukuran 768px */}
      <ImageBanner />

      {/* bagian bawah */}
      <Description />
    </div>
  );
}

export default App;
