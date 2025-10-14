// src/components/SideMenu/SideMenu.jsx
export default function SideMenu() {
  return (
    <aside className="bg-[#202123] w-64 p-2 flex flex-col">
      <button className="flex p-3 items-center gap-3 text-white text-sm rounded-md hover:bg-gray-700 transition-colors">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Novo Chat
      </button>
    </aside>
  )
}
