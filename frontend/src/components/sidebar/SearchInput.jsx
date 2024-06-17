import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useGetConversations from '../../Hooks/useGetConversations';
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
	const [search, setSearch] = useState('');
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search < 3) {
			toast.error('Search query must be at least 3 characters long');
		}

		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch('');
		} else {
			toast.error('No such user found');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center gap-2">
			<input
				type="text"
				placeholder="Search..."
				className="input input-sm input-bordered rounded-full"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				type="submit"
				className="btn btn-circle btn-sm bg-sky-500 text-white"
			>
				<FaSearch />
			</button>
		</form>
	);
};

export default SearchInput;
