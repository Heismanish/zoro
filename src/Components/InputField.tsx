import useStore from "../store/store";

function InputField() {
	const url = useStore((state) => state.url);
	const updateShortID = useStore((state) => state.updateShortID);
	const updateURL = useStore((state) => state.updateURL);

	const apiUrl = import.meta.env.VITE_BASE_URL;

	const generateShortId = async () => {
		console.log(`${apiUrl}url/gen?url=${url}`);

		const urlToFetch = `${apiUrl}url/gen?url=${url}`;

		const response = await fetch(urlToFetch);

		const data = await response.json();

		console.log(data);
		updateShortID(data.shortId);
	};

	return (
		<div className=" flex gap-6 items-center flex-col ">
			<header className=" flex gap-6 items-center sm:flex-row flex-col">
				<input
					value={url}
					onChange={(e) => updateURL(e.currentTarget.value)}
					type="text"
					placeholder="Enter your URl"
					className="text-xl text-white font-medium border-white border-2  bg-black rounded-lg p-4 max-w-md focus:outline-none flex items-center"
				/>
				<button
					type="submit"
					onClick={generateShortId}
					className="px-2 py-4 text-xl font-semibold rounded-2xl bg-[#faa307] hover:bg-[#ffba08] transition-colors duration-300 "
				>
					Generate
				</button>
			</header>
			{/* {url} */}
		</div>
	);
}

export default InputField;
