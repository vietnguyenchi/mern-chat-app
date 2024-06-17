import { TbLogout2 } from 'react-icons/tb';
import useLogout from '../../Hooks/useLogout';

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className="mt-auto">
			{!loading ? (
				<TbLogout2
					onClick={logout}
					className="w-6 h-6 text-white cursor-pointer"
				/>
			) : (
				<span className="loading loading-spinner"></span>
			)}
		</div>
	);
};

export default LogoutButton;
