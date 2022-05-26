export enum AppRoute {
	Main = '/',
	Guitar = '/product/:id/*',
	GuitarInfo = '/product/:id/info',
	GuitarDetails = '/product/:id/details',
	PaginationRoute = '/catalog/:page',
}

export enum APIRoute {
	Guitars = '/guitars',
	Guitar = '/guitars/:id',
	Reviews = '/guitars/:id/comments',
	NotFound = '/404',
	Comments = '/comments'
}

export enum GuitarType {
	electric = 'Электрическая',
	ukulele = 'Укулеле',
	acoustic = 'Акустическая',
}
