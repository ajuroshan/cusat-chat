import "./App.css";
import UserCard from "./components/user";
import ChatMessage from "./components/chatMessage";
import { AiOutlineSend } from "react-icons/ai";

function App() {
	return (
		<form action="#">
			{/* maincontainer */}
			<div className="App flex bg-slate-800 h-screen text-white flex-col select-none">
				{/* header container  */}
				<div className="flex pt-5 justify-center items-center ">
					<h1 className="text-4xl font-medium text-white text-center">Cusat Chat</h1>
				</div>
				{/* Chatbox Container */}
				<div className="flex flex-grow m-5 ">
					{/* sidebar */}
					<div className="w-1/4 bg-slate-700 mr-5 rounded-md ">
						<UserCard name="User 1" />
						<UserCard name="User 2" />
						<UserCard name="User 3" />
						<UserCard name="User 4" />
						<UserCard name="User 5" />
						<UserCard name="User 6" />
					</div>
					{/* chat Area */}
					<div className="flex flex-1 bg-slate-700 flex-col rounded-md ">
						<div className=" flex flex-1">
							<div className="flex flex-col justify-end px-5 overflow-auto">
								<ChatMessage message={"Hi"} />
								<ChatMessage message={"hello"} />
								<ChatMessage message={"hello"} />
								<ChatMessage message={"hello"} />
							</div>
						</div>
						<div className="flex items-center">
							<input type="text" className=" flex-1 h-16 rounded-md m-10 p-5 text-black bg-slate-600 text-xl " placeholder="Type Your message" />
							<a href="#" className="h-16 rounded-md m-10 p-5 text-black bg-blue-400">
								<AiOutlineSend size={30} color={"#fff"} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

export default App;
