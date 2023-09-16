import { useState, useEffect } from "react";
import axios from "axios";

export interface QueryHistory {
  id: string;
  prompt: string;
  sqlQuery: string;
  queryResult: Array<any>;
}

export interface QueryHistories {
  queryHistories: QueryHistory[];
}

const Sidebar = () => {
  const [selectedQueryHistory, setSelectedQueryHistory] =
    useState<QueryHistory | null>(null);
  const [chatHistory, setChatHistory] = useState<QueryHistory[]>([]);

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/ai/getAllChatHistory"
        );
        setChatHistory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChatHistory();
  }, []);

  useEffect(() => {
    // Do something when the selected query history changes
  }, [selectedQueryHistory]);

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 overflow-x-hidden z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm-md:translate-x-0 sm-md:flex-shrink-0 sm-md:static dark:bg-slate-900 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-slate-900">
        <ul className="space-y-2 font-medium">
          {chatHistory.map((history) => (
            <li key={history.id}>
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selectedQueryHistory?.id === history.id
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }`}
                onClick={() => setSelectedQueryHistory(history)}
              >
                <span className="ml-3">{history.prompt}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
