type CustomButtonProps = {
	title: string;
};

function CustomButton({ title }: CustomButtonProps) {
	return (
		<button className="rounded-full px-10 bg-fontColor border-[3px] border-light text-light">
			{title}
		</button>
	);
}

export default CustomButton;
