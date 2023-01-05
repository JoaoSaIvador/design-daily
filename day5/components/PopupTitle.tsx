import Image from 'next/image';

type PopupTitleProps = {
	title: string;
};

function PopupTitle({ title }: PopupTitleProps) {
	return (
		<div className="flex px-4 py-3">
			<span className="font-light text-secondary mr-2">{title}</span>
			<Image src="/chevron-right-secondary.svg" alt="" width={14} height={14} />
		</div>
	);
}

export default PopupTitle;
