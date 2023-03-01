import React from "react";

const ChatMessage = (props) => {
	return (
		<div className="flex bg-slate-600 p-5 m-5 items-center rounded-md">
			<div className=" flex h-10 w-10 bg-blue-400 rounded-full mr-10 items-center justify-center"></div>

			<h1 className="text-xl">{props.message}</h1>
		</div>
	);
};
export default ChatMessage;
