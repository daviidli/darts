export const getRounds = (
	rounds: string[][],
	currentPlayer: number
): string[] => {
	return rounds.map(round => round[currentPlayer]);
};

export const test = () => {};
