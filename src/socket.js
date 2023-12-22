import { io } from "socket.io-client"

const env = import.meta.env

const socket = io(`${env.VITE_SOCKET_HOST}:${env.VITE_SOCKET_PORT}`)

export default socket