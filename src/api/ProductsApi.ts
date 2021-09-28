import Api from '@/api/Api'
class ProductsApi {
  getAllProducts (category: number) {
    return new Api(
      '/products',
      {
        category
      }
    ).request()
  }

  getAllCategories () {
    return new Api(
      '/categories'
    )
      .request()
  }

  getCurrentProduct (productId: number) {
    return new Api(
      `/products/${productId}`
    )
      .request()
  }

  getProductsFromBasket (productIds: number[]) {
    return new Api(
      '/products',
      {
        productId: productIds
      }
    )
      .request()
  }
}

const ProductApi = new ProductsApi()

export default ProductApi
