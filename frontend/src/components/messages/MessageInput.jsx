import { BsSend } from 'react-icons/bs';

const MessageInput = () => {
	return (
		<form className="px-4 my-3">
			<div className="w-full relative">
				<input
					type="text"
					className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
					placeholder="Send a message"
				/>
				<button
					type="submit"
					className="absolute inset-y-0 end-0 flex items-center pe-3"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#ffffff"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-send"
					>
						<path d="m22 2-7 20-4-9-9-4Z" />
						<path d="M22 2 11 13" />
					</svg>
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
