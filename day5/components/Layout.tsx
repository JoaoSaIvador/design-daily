import QuickSettings from '../components/QuickSettings';
import Menu from '../components/Menu';

type LayoutProps = {
	children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div className="flex justify-center items-center bg-[#100e12] py-20">
			<div className="h-[800px] min-w-[700px] bg-dark flex flex-row p-3 rounded-3xl">
				<div className="h-full w-[40%] bg-[#3B5B6B] flex flex-col rounded-3xl">
					<QuickSettings />
					<Menu />
				</div>
				{children}
			</div>
		</div>
	);
}

export default Layout;
