import { useState } from "react";
import InputField from "../Components/InputField";
import useStore from "../store/store";

function Home() {
	const url = useStore((state) => state.url);

	const shortID = useStore((state) => state.shortID);
	const [copied, setCopied] = useState<boolean>(false);

	const redirectBASE = import.meta.env.VITE_REDIRECT_BASE_URL;
	const redirect = `${redirectBASE}gen/${shortID}`;

	console.log(redirect);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(redirect);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
	};

	return (
		<div className="md:mt-32 mt-24 flex justify-center flex-col gap-12">
			<InputField></InputField>
			<main>
				{shortID && (
					<div className=" flex gap-4 justify-center items-center sm:flex-row flex-col">
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#faa307] text-xl no-underline"
							title="Open Link in New Tab"
						>
							{redirect}
						</a>
						<button
							type="button"
							onClick={copyToClipboard}
							className=" p-2 text-base font-semibold rounded-xl bg-[#faa307] hover:bg-[#ffba08] transition-colors duration-300 "
						>
							{copied ? "Copied!" : "Copy"}
						</button>
					</div>
				)}
			</main>
		</div>
	);
}

export default Home;
