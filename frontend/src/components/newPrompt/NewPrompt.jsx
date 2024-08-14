import { IKImage } from "imagekitio-react";
import Upload from "../upload/Upload";
import "./newPrompt.css";

const NewPrompt = () => {

  const [img, setImg ] = useState({
    isLoading:false,
    error:"",
    dbData: {}
  })

  return (
    <>
    {/* add new chat */}
    {img.dbData?.filePath && (
      <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
        path={img.dbData?.filePath}
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
