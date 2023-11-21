import { SidebarProps } from "@/interfaces/index";
import React, { useState } from "react";
import ModalForTable from "../components/ModalForTable";

const Sidebar = ({
  chatHistory,
  selectedQueryHistory,
  setSelectedQueryHistory,
  setShowModal,
}: SidebarProps) => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 overflow-x-hidden z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-lightColor border-r border-gray-200 sm-md:translate-x-0 sm-md:flex-shrink-0 sm-md:static dark:bg-slate-900 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-hidden overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-400 dark:scrollbar-track-slate-950 dark:scrollbar-thumb-slate-700 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg bg-lightColor dark:bg-slate-900">
        <ul className="space-y-2 font-medium">
          {chatHistory && chatHistory.length ? (
            chatHistory.map((history) => (
              <li key={history._id}                   
                  onClick={() => {
                    setSelectedQueryHistory(history);
                  }}
                  className="cursor-pointer"
              >
                <a
                  className={`flex items-center p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 ${
                    selectedQueryHistory?._id == history._id
                      ? "bg-slate-300 dark:bg-slate-700"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-900 dark:text-lightColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span
                    className="ml-3 text-slate-800 dark:text-slate-300"
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    {history.prompt.length > 25
                      ? history.prompt.slice(0, 23) + "..."
                      : history.prompt}
                  </span>
                </a>
              </li>
            ))
          ) : (
            <li className="text-slate-800 dark:text-white">No chat history available</li>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
