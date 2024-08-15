import { IKImage } from "imagekitio-react";
import Upload from "../upload/Upload";
import "./newPrompt.css";
import { useEffect, useRef, useState } from "react";
import model from "../../lib/gemini";

const NewPrompt = () => {

  const [img, setImg ] = useState({
    isLoading:false,
    error:"",
    dbData: {}
  });

  //scrolling effect
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" })
  }, []);

  //make the first request
  const add = async () => {
      const prompt = "Write a story about an AI and magic"
    
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
    };

  return (
    <>
    {/* add new chat */}
    {/* Loading the image */}
    {img.isLoading && <div className="">Loading ...</div>}
    {img.dbData?.filePath && (
      <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
        path={img.dbData?.filePath}
        width="380"
        transformation={{ width:380 }} // resize the image
      />
    )}
      {/* attaching images and in the chat */}
      <form className="newForm">
        <Upload setImg={setImg}/>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask anything ....... " />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
