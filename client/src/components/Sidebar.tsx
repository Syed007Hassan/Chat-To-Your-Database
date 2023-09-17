import { useState, useEffect } from "react";
import axios from "axios";
import { QueryHistory } from "@/interfaces/index";
import { SidebarProps } from "@/interfaces/index";

const Sidebar = ({ chatHistory, selectedQueryHistory, setSelectedQueryHistory }: SidebarProps) => {
  
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 overflow-x-hidden z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm-md:translate-x-0 sm-md:flex-shrink-0 sm-md:static dark:bg-slate-900 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-slate-900">
        <ul className="space-y-2 font-medium">
          {chatHistory && chatHistory.length
          ?
          chatHistory.map((history) => (
            <li key={history._id}>
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 ${
                  selectedQueryHistory?._id == history._id
                    ? "bg-slate-300 dark:bg-slate-700"
                    : ""
                }`}
                onClick={() => {setSelectedQueryHistory(history)}}
              >
                <span className="ml-3 text-slate-800 dark:text-slate-300">{history.prompt.length > 20 ? history.prompt.slice(0,20) + '...' : history.prompt}</span>
              </a>
            </li>
          ))
          :
          <li>No chat history available</li>
          }
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
