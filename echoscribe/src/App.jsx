import { useState } from "react";
import HomePage from "./componets/HomePage";
import Header from "./componets/Header";
import FileDisplay from "./componets/FileDisplay";

function App() {
  const [file, setFile] = useState(null);
  const [AudioStream, setAudioStream] = useState(null);

  const isAudioAvliable = file || AudioStream;

  function handleAudioReset() {
    setFile(null);
    setAudioStream(null);
  }

  return (
    <div className='flex flex-col p-4 max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />
        {isAudioAvliable ? (
          <FileDisplay
            handleAudioReset={handleAudioReset}
            file={file}
            AudioStream={setAudioStream}
          />
        ) : (
          <HomePage
            setFile={setFile}
            setAudioStream={setAudioStream}
          />
        )}
      </section>
      <h1 className='text-green-400'>hello</h1>
      <footer></footer>
    </div>
  );
}

export default App;
