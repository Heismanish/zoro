import { Link } from "react-router-dom";
import logo from "/zoro-logo.png";
function Navbar() {
	return (
		<div className="flex justify-between items-center md:px-12 px-2 shadow-xl bg-black bg-opacity-80 py-3 ">
			<header className="mx-auto flex gap-4 ">
				<img src={logo} alt="zoro logo" className="w-8 h-8 inline" />
				<Link to={"/"}>
					<h1 className="sm:text-2xl text-xl font-semibold text-white">
						Zoro : The URL Shortener
					</h1>
				</Link>
			</header>
			{/* <aside className="flex gap-2 justify-between">
				<Link to={"/analytics"}>
					<button className="px-3 py-2 bg-[#ffa62b] hover:bg-[#ffbc42] text-white font-medium text-lg rounded-md shadow-sm transition-colors duration-300 ">
						Analytics
					</button>
				</Link>

				<Link to={"/signup"}>
					<button className=" px-3 py-2 text-white bg-[#0353a4] hover:bg-[#0466c8] font-medium text-lg rounded-md transition-colors duration-300 ">
						Signup
					</button>
				</Link>
			</aside> */}
		</div>
	);
}

export default Navbar;
