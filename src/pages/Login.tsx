// import React, { useState } from "react";
// import useStore from "../store/store";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// const Login = () => {
// 	const user = useStore((state) => state.user);
// 	const updateUser = useStore((state) => state.updateUser);
// 	const updateSignedIn = useStore((state) => state.updateSignedIn);
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState<string>("");
// 	const navigate = useNavigate();

// 	const baseURL = import.meta.env.VITE_BASE_URL;

// 	const formSubmit = async () => {
// 		try {
// 			setLoading(true);
// 			const response = await fetch(`${baseURL}user/login`, {
// 				method: "POST",
// 				credentials: "include",
// 				headers: { "content-type": "application/json" },
// 				body: JSON.stringify({
// 					name: user.name,
// 					email: user.email,
// 					password: user.password,
// 				}),
// 			});
// 			const data = await response.json();

// 			if (response.ok) {
// 				// Login successful
// 				const token = data.token;
// 				Cookies.set("token", token, { expires: 7 * 24 * 60 * 60 }); // Expires in 7 days
// 				return true;
// 			} else {
// 				// Login failed
// 				setError("Invalid credentials. Please try again.");
// 				return false;
// 			}
// 		} catch (error) {
// 			console.error("Error during login:", error);
// 			setError("An error occurred. Please try again later.");
// 			return false;
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		const loggedIn = await formSubmit();
// 		if (loggedIn) {
// 			updateSignedIn(true);
// 			navigate("/");
// 		}
// 	};

// 	if (loading) {
// 		return (
// 			<div className="flex justify-center items-center mt-12">Loading...</div>
// 		);
// 	}
// 	return (
// 		<div className=" flex justify-center items-center md:mt-32 mt-24 mx-2 md:mx-0">
// 			<form onSubmit={handleSubmit} className="mb-6 w-[440px]">
// 				<div className="mb-6">
// 					<label
// 						htmlFor="stateemail"
// 						className="text-left block mb-2 text-lg font-medium text-white"
// 					>
// 						Name{" "}
// 					</label>
// 					<input
// 						value={user.name}
// 						onChange={(e) =>
// 							updateUser({ ...user, name: e.currentTarget.value })
// 						}
// 						type="text"
// 						id="name"
// 						autoComplete="name"
// 						className="bg-gray-50 border border-gray-300 text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
// 						placeholder="Your name"
// 						required
// 					/>
// 				</div>
// 				<div className="mb-6">
// 					<label
// 						htmlFor="email"
// 						className="text-left block mb-2 text-lg font-medium text-white"
// 					>
// 						Your email
// 					</label>
// 					<input
// 						value={user.email}
// 						onChange={(e) =>
// 							updateUser({ ...user, email: e.currentTarget.value })
// 						}
// 						type="email"
// 						id="email"
// 						autoComplete="email"
// 						className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
// 						placeholder="example@gmail.com"
// 						required
// 					/>
// 				</div>
// 				<div className="mb-6">
// 					<label
// 						htmlFor="password"
// 						className="text-left block mb-2 text-lg font-medium text-white"
// 					>
// 						Your password
// 					</label>
// 					<input
// 						value={user.password}
// 						onChange={(e) =>
// 							updateUser({ ...user, password: e.currentTarget.value })
// 						}
// 						type="password"
// 						id="password"
// 						autoComplete="password"
// 						placeholder=""
// 						className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
// 						required
// 					/>
// 				</div>
// 				{error && <div className="text-red-500">{error}</div>}
// 				<button
// 					type="submit"
// 					className="px-3 py-2 bg-[#0353a4] hover:bg-[#0466c8] font-medium text-lg rounded-md transition-colors duration-300 "
// 				>
// 					Login
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

// export default Login;
