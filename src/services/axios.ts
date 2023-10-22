import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => config,
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
)

const successHandler = (response: AxiosResponse): AxiosResponse => response
const errorHandler = (error: AxiosError | Error): Promise<AxiosError> =>
  Promise.reject(error)

instance.interceptors.response.use(successHandler, errorHandler)

export default instance
