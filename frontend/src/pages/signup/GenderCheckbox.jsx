const GenderCheckbox = () => {
	return (
		<div className="flex">
			<div className="form-contorl">
				<label className={`label gap-2 cursor-pointer`}>
					<span className="label-text text-white">Make</span>
					<input type="checkbox" className="checkbox border-slate-50" />
				</label>
			</div>
			<div className="form-control">
				<label className={`label gap-2 cursor-pointer`}>
					<span className="label-text text-white">Female</span>
					<input type="checkbox" className="checkbox border-slate-50" />
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;

// const GenderCheckbox = () => {
// 	return (
// 		<div className="flex">
// 			<div className="form-contorl">
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className="label-text text-white">Make</span>
// 					<input type="checkbox" className="checkbox border-slate-50" />
// 				</label>
// 			</div>
// 			<div className="form-control">
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className="label-text text-white">Female</span>
// 					<input type="checkbox" className="checkbox border-slate-50" />
// 				</label>
// 			</div>
// 		</div>
// 	);
// };

// export default GenderCheckbox;
