import { IKImage } from "imagekitio-react";
import Upload from "../upload/Upload";
import "./newPrompt.css";
import { useEffect, useRef, useState } from "react";
import model from "../../lib/gemini";

const NewPrompt = () => {
  //to dynamically chat with AI
  const [ question, setQuestions] = useState("");

  const [img, setImg ] = useState({
    isLoading:false,
    error:"",
    dbData: {}
  });

  //scrolling effect
  // const endRef = useRef(null);

  // useEffect(() => {
  //   endRef.current.scrollIntoView({ behavior: "smooth" })
  // }, []);

  //make the first request
  const add = async (text) => {
      setQuestions(text)
    
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const ans = response.text();
      console.log(text);
    };

    //handle ai responses
    const handleSubmit = async (e) => {
      e.preventDefault()

      const text = e.target.text.value;
      if (!text) return;

      add(text)
    }

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
      <form className="newForm" onSubmit={handleSubmit}>
        <Upload setImg={setImg}/>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask anything ....... " />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
