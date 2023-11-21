import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { githubGist as themeLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { atomOneDark as themeDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import sql from "react-syntax-highlighter/dist/cjs/languages/hljs/sql";
import { useEffect, useState } from "react";


interface SqlViewerProps {
	content: string;
}

const SqlViewer = (props: SqlViewerProps) => {

	SyntaxHighlighter.registerLanguage("javascript", sql);


	const [mode, setMode] = useState('light');

	const checkInitialMode = () => {
		const htmlElement = document.documentElement;
		const isDarkMode = htmlElement.classList.contains('dark');
	
		if (isDarkMode) {
		  setMode('dark');
		} else {
		  setMode('light');
		}
	};	

	useEffect(() => {

		checkInitialMode();

		const handleDarkModeChanges = (mutationsList: any) => {
			for (const mutation of mutationsList) {
			if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
				const htmlElement = document.documentElement;
				const isDarkMode = htmlElement.classList.contains('dark');
	
				if (isDarkMode) {
				setMode('dark');
				// Do something when the dark mode class is found
				} else {
				setMode('light');
				// Do something when the dark mode class is not found
				}
			}
			}
		};
	
		const observer = new MutationObserver(handleDarkModeChanges);
	
		// Start observing changes to the attributes of the <html> element
		observer.observe(document.documentElement, { attributes: true });
	
		// Cleanup the observer on component unmount
		return () => {
			observer.disconnect();
		};
	}, []);

	// useEffect(()=> {
	// 	console.log(mode);
	// },[mode])

	return (
		<SyntaxHighlighter
			className="text-slate-400 mt-2 scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-400 dark:scrollbar-track-slate-950 dark:scrollbar-thumb-slate-700 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg"
			language="sql"
			style={mode==='dark'?themeDark:themeLight}
			customStyle={mode==='dark'?{
				backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity))",
			}
			:{}
		}
		>
			{props.content}
		</SyntaxHighlighter>
	);
};

export default SqlViewer;
