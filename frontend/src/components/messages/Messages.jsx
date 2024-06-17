import { useEffect, useRef } from 'react';
import useGetMessages from '../../Hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import Message from './Message';
import useListenMessages from '../../Hooks/useListenMessages';

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessage = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	}, [messages]);

	return (
		<div className="px-4 flex-1 overflow-auto ">
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div ref={lastMessage} key={message._id}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}

			{!loading && messages.length === 0 && (
				<p className="text-center text-white">
					Send a message to start the conversation
				</p>
			)}
		</div>
	);
};

export default Messages;
