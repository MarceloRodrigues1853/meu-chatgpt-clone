// src/App.jsx
import { useState } from 'react'
import { makeRequest } from './api/api'
import SideMenu from './components/SideMenu/SideMenu'
import { ChatMessage } from './components/ChatMessage/ChatMessage'

export default function App() {
  const [input, setInput] = useState('')
  const [chatlog, setChatlog] = useState([{ user: 'gpt', message: 'Olá! Como posso ajudar?' }])
  const [isTyping, setIsTyping] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return

    const newChatlog = [...chatlog, { user: 'me', message: input }]
    setInput('')
    setChatlog(newChatlog)
    setIsTyping(true)

    try {
      const response = await makeRequest(input)

      // Simula streaming de texto (digitando aos poucos)
      let streamedText = ''
      const chars = response.split('')
      for (let i = 0; i < chars.length; i++) {
        streamedText += chars[i]
        await new Promise(res => setTimeout(res, 15)) // velocidade do "stream"
        setChatlog([...newChatlog, { user: 'gpt', message: streamedText }])
      }
    } catch (err) {
      console.error(err)
      setChatlog([...newChatlog, { user: 'gpt', message: '⚠️ Erro ao obter resposta. Tente novamente.' }])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <SideMenu />

      <section className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {chatlog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}

          {isTyping && (
            <div className="max-w-3xl mx-auto px-4 py-3 italic text-gray-400 animate-pulse">
              🤖 digitando...
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-700 shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-2 flex items-center"
          >
            <textarea
              rows={1}
              className="flex-1 bg-transparent text-white focus:outline-none resize-none px-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem aqui..."
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit(e)
                }
              }}
            />
            <button
              type="submit"
              aria-label="Enviar mensagem"
              className="p-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
