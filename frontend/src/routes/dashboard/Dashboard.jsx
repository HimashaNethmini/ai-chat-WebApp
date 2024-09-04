import './dashboard.css'
import { useAuth } from "@clerk/clerk-react";

const Dashboard = () => {

  const { userId } = useAuth();

  //refetch dashboard items
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () =>{
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value
    if(!text) return;

    await fetch ("http://localhost:3000/api/chats", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
  };

  return (
    // the middle page of the dashboard
    <div className='Dashboard'>
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>Chat AI</h1>
        </div>

        {/* three options  */}
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a New Chat</span>
          </div>

          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyze Images</span>
          </div>

          <div className="option">
            <img src="/code.png" alt="" />
            <span>Need Code Help</span>
          </div>
        </div>
      </div>

      {/* chat form */}
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder='Start the chat here ....' />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard