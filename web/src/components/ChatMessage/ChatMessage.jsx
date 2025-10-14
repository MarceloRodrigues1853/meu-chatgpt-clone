// src/components/ChatMessage/ChatMessage.jsx
import Avatar from "../../assets/avatar"

export const ChatMessage = ({ message }) => {
  const isGpt = message.user === 'gpt'

  return (
    <div className={`py-6 ${isGpt ? "bg-gray-700/50" : ""}`}>
      <div className="max-w-3xl mx-auto flex items-start space-x-4 px-4">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${isGpt ? 'bg-emerald-500' : 'bg-indigo-500'}`}>
          {isGpt ? <Avatar /> : 'M'}
        </div>
        <div className="flex-1 whitespace-pre-wrap">
          {message.message}
        </div>
      </div>
    </div>
  )
}
