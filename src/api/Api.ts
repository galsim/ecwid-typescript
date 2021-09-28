import axios, { AxiosPromise } from 'axios'

// eslint-disable-next-line @typescript-eslint/ban-types
type TOptions = object

export default class Api {
  private STORE_ID = 58958138

  private TOKEN = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'

  private REQUEST_URL = `https://app.ecwid.com/api/v3/${this.STORE_ID}`

  private readonly _url: string

  constructor (url: string, options?: TOptions) {
    this._url = this.urlFactory(url, options)
  }

  private urlFactory (url: string, options: TOptions = {}): string {
    const href = new URL(this.REQUEST_URL + url)

    href.searchParams.append('token', this.TOKEN)

    Object.entries(options)
      .forEach(([key, value]) => {
        if (value) href.searchParams.append(key, value)
      })

    return href.href
  }

  request (): AxiosPromise<void> {
    return axios
      .get(this._url)
  }
}
