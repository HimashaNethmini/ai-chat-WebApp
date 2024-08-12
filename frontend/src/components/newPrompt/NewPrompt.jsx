import Upload from "../upload/Upload";
import "./newPrompt.css";

const NewPrompt = () => {
  return (
    <>
      {/* attaching images and in the chat */}
      <form className="newForm">
        <Upload />
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
