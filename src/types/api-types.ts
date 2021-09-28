export interface IProduct {
  id: number,
  hdThumbnailUrl: string,
  name: string,
  description: string,
  defaultDisplayedPriceFormatted: string,
}

export interface ICategory {
  id: number,
  name: string
}

export interface IListData<I> {
  count: number,
  limit: number,
  offset: number,
  total: number,
  items: I[]
}
