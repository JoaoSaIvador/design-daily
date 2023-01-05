import { useRouter } from 'next/router';
import Image from 'next/image';

type MenuItemProps = {
	name: string;
};

function MenuItem({ name }: MenuItemProps) {
	const router = useRouter();
	const style =
		router.pathname.toLowerCase() ===
		'/' + name.toLowerCase().replace(/\s/g, '')
			? 'bg-dark'
			: '';

	return (
		<div
			className={
				'flex justify-between text-fontColor cursor-pointer py-4 px-10 ' + style
			}
			onClick={() =>
				router.push(
					name.charAt(0).toLowerCase() + name.slice(1).replace(/\s/g, '')
				)
			}
		>
			<span>{name}</span>
			<Image src="/chevron-right.svg" alt="" width={16} height={16} />
		</div>
	);
}

export default MenuItem;
