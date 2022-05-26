export type GuitarProps = {
 id: number,
 name: string,
 vendorCode: string,
 type: string,
 description: string,
 previewImg: string,
 rating: number,
 price: number,
 stringCount: number,
}

export type GuitarFromServer = {
 'id': number,
 'name': string,
 'vendorCode': string,
 'type': string,
 'description': string,
 'previewImg': string,
 'rating': number,
 'price': number,
 'stringCount': number,
}
