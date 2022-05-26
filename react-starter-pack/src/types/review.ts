export type ReviewProps = {
	id: string,
	userName: string,
	advantage: string,
	disadvantage: string,
	comment: string,
	rating: number,
	createAt: Date,
	guitarId: number,
}

export type ReviewCountProps = {
	id: number,
	count: number,
}
