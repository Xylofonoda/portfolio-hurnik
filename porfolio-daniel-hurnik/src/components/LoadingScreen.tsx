import React from "react";

interface LoadingScreenProps {
	onComplete: () => void;
}

const LoadingScreen: React.FunctionComponent<LoadingScreenProps> = (props) => {
	const [text, setText] = React.useState("");
	const [coffeeClicked, setCoffeeClicked] = React.useState(false);
	const [showCoffee, setShowCoffee] = React.useState(false);
	const firstText = "Portfolio loading, grab a coffee.. -> ";
	const secondText = "Hit the spot, right ? Let's go!";

	const animateText = (text: string, onComplete?: () => void) => {
		let index = 0;
		const interval = setInterval(() => {
			setText(text.substring(0, index));
			index++;
			if (index > text.length) {
				clearInterval(interval);
				if (onComplete) {
					onComplete();
				}
			}
		}, 100);
		return () => clearInterval(interval);
	};

	React.useEffect(() => {
		animateText(firstText, () => setShowCoffee(true));
	}, []);

	React.useEffect(() => {
		if (coffeeClicked) {
			animateText(secondText, () => {
				setTimeout(() => {
					props.onComplete();
				}, 1000);
			});
		}
	}, [coffeeClicked, props.onComplete]);

	return (
		<div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
			<div className="mb-4 text-4xl font-mono font-bold">
				{text}
				{showCoffee && !coffeeClicked && (
					<span
						className="cursor-pointer"
						onClick={() => setCoffeeClicked(true)}
					>
						☕
					</span>
				)}
				<span className="animate-blink"> | </span>
			</div>
		</div>
	);
};

export default LoadingScreen;
