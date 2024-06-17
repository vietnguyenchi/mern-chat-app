const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex">
			<div className="form-contorl">
				<label
					className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}
				>
					<span className="label-text text-white">Make</span>
					<input
						checked={selectedGender === 'male'}
						type="checkbox"
						className="checkbox border-slate-50"
						onChange={() => onCheckboxChange('male')}
					/>
				</label>
			</div>
			<div className="form-control">
				<label
					className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}
				>
					<span className="label-text text-white">Female</span>
					<input
						checked={selectedGender === 'female'}
						type="checkbox"
						className="checkbox border-slate-50"
						onChange={() => onCheckboxChange('female')}
					/>
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;
