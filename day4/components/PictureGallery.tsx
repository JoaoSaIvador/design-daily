function PictureGallery() {
	return (
		<div>
			<h2 className="font-medium mb-2">Pictures</h2>
			<div className="min-w-[900px] min-h-[460px] grid grid-cols-12 grid-rows-12 gap-3">
				<div className="col-span-4 row-span-6 bg-blue-100"></div>
				<div className="col-span-5 row-span-4 bg-blue-100"></div>
				<div className="col-span-3 row-span-5 bg-blue-100"></div>
				<div className="col-span-3 row-span-5 bg-blue-100"></div>
				<div className="col-span-2 row-span-8 bg-blue-100"></div>
				<div className="col-span-3 row-span-7 bg-blue-100"></div>
				<div className="col-span-4 row-span-6 bg-blue-100"></div>
				<div className="col-span-3 row-span-3 bg-blue-100"></div>
			</div>
		</div>
	);
}

export default PictureGallery;
