'use client';

import ChatForm from "@/components/ChatForm";
import DataTable from "@/components/DataTable";
import Preloader from "@/components/Preloader";
import SqlViewer from "@/components/SqlViewer";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { QueryHistory } from "@/interfaces/index";
import { SidebarProps } from "@/interfaces/index";
import { ChatResponse } from "@/interfaces/index";
import ModalForTable from "@/components/ModalForTable";
import config from "@/interfaces/Config";

export default function Home() {
  const [response, setResponse] = useState<ChatResponse | null>(null);
  const [waitingResponse, setWaitingResponse] = useState(false);
  const [firstRun, setFirstRun] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [selectedQueryHistory, setSelectedQueryHistory] =
    useState<QueryHistory | null>(null);
  const [chatHistory, setChatHistory] = useState<QueryHistory[]>([]);

  const [showModal, setShowModal] = useState(false);

  const [sidebarProps, setSidebarProps] = useState<SidebarProps>({
    chatHistory: [],
    selectedQueryHistory: null,
    setSelectedQueryHistory: () => {},
    setShowModal: () => {},
  });

  const onPrompt = async (prompt: string) => {
    setFirstRun(false);
    setWaitingResponse(true);
    setPrompt(prompt);

    try {
      const response = await axios.get(
        `${config.baseURl}/ai/chat?prompt=${encodeURIComponent(prompt)}`
      );

      const { data } = response.data;

      // const data = {
      //   prompt: "get me the orders where customer id is not null ",
      //   sqlQuery: "SELECT * FROM Orders WHERE CustomerID IS NOT NULL LIMIT 10;",
      //   result: [
      //     {
      //       OrderID: 10248,
      //       CustomerID: "VINET",
      //       EmployeeID: 5,
      //       OrderDate: "2016-07-04",
      //       RequiredDate: "2016-08-01",
      //       ShippedDate: "2016-07-16",
      //       ShipVia: 3,
      //       Freight: 32.38,
      //       ShipName: "Vins et alcools Chevalier",
      //       ShipAddress: "59 rue de l-Abbaye",
      //       ShipCity: "Reims",
      //       ShipRegion: "Western Europe",
      //       ShipPostalCode: "51100",
      //       ShipCountry: "France",
      //     },
      //     {
      //       OrderID: 10249,
      //       CustomerID: "TOMSP",
      //       EmployeeID: 6,
      //       OrderDate: "2016-07-05",
      //       RequiredDate: "2016-08-16",
      //       ShippedDate: "2016-07-10",
      //       ShipVia: 1,
      //       Freight: 11.61,
      //       ShipName: "Toms Spezialitäten",
      //       ShipAddress: "Luisenstr. 48",
      //       ShipCity: "Münster",
      //       ShipRegion: "Western Europe",
      //       ShipPostalCode: "44087",
      //       ShipCountry: "Germany",
      //     },
      //     {
      //       OrderID: 10250,
      //       CustomerID: "HANAR",
      //       EmployeeID: 4,
      //       OrderDate: "2016-07-08",
      //       RequiredDate: "2016-08-05",
      //       ShippedDate: "2016-07-12",
      //       ShipVia: 2,
      //       Freight: 65.83,
      //       ShipName: "Hanari Carnes",
      //       ShipAddress: "Rua do Paço, 67",
      //       ShipCity: "Rio de Janeiro",
      //       ShipRegion: "South America",
      //       ShipPostalCode: "05454-876",
      //       ShipCountry: "Brazil",
      //     },
      //     {
      //       OrderID: 10251,
      //       CustomerID: "VICTE",
      //       EmployeeID: 3,
      //       OrderDate: "2016-07-08",
      //       RequiredDate: "2016-08-05",
      //       ShippedDate: "2016-07-15",
      //       ShipVia: 1,
      //       Freight: 41.34,
      //       ShipName: "Victuailles en stock",
      //       ShipAddress: "2, rue du Commerce",
      //       ShipCity: "Lyon",
      //       ShipRegion: "Western Europe",
      //       ShipPostalCode: "69004",
      //       ShipCountry: "France",
      //     },
      //     {
      //       OrderID: 10252,
      //       CustomerID: "SUPRD",
      //       EmployeeID: 4,
      //       OrderDate: "2016-07-09",
      //       RequiredDate: "2016-08-06",
      //       ShippedDate: "2016-07-11",
      //       ShipVia: 2,
      //       Freight: 51.3,
      //       ShipName: "Suprêmes délices",
      //       ShipAddress: "Boulevard Tirou, 255",
      //       ShipCity: "Charleroi",
      //       ShipRegion: "Western Europe",
      //       ShipPostalCode: "B-6000",
      //       ShipCountry: "Belgium",
      //     },
      //     {
      //       OrderID: 10253,
      //       CustomerID: "HANAR",
      //       EmployeeID: 3,
      //       OrderDate: "2016-07-10",
      //       RequiredDate: "2016-07-24",
      //       ShippedDate: "2016-07-16",
      //       ShipVia: 2,
      //       Freight: 58.17,
      //       ShipName: "Hanari Carnes",
      //       ShipAddress: "Rua do Paço, 67",
      //       ShipCity: "Rio de Janeiro",
      //       ShipRegion: "South America",
      //       ShipPostalCode: "05454-876",
      //       ShipCountry: "Brazil",
      //     },
      //     {
      //       OrderID: 10254,
      //       CustomerID: "CHOPS",
      //       EmployeeID: 5,
      //       OrderDate: "2016-07-11",
      //       RequiredDate: "2016-08-08",
      //       ShippedDate: "2016-07-23",
      //       ShipVia: 2,
      //       Freight: 22.98,
      //       ShipName: "Chop-suey Chinese",
      //       ShipAddress: "Hauptstr. 31",
      //       ShipCity: "Bern",
      //       ShipRegion: "Western Europe",
      //       ShipPostalCode: "3012",
      //       ShipCountry: "Switzerland",
      //     },
      //     {
      //       OrderID: 10255,
      //       CustomerID: "RICSU",
      //       EmployeeID: 9,
      //       OrderDate: "2016-07-12",
      //       RequiredDate: "2016-08-09",
      //       ShippedDate: "2016-07-15",
      //       ShipVia: 3,
      //       Freight: 148.33,
      //       ShipName: "Richter Supermarkt",
      //       ShipAddress: "Starenweg 5",
      //       ShipCity: "Genève",
      //       ShipRegion: "Western Europe",
      //       ShipPostalCode: "1204",
      //       ShipCountry: "Switzerland",
      //     },
      //     {
      //       OrderID: 10256,
      //       CustomerID: "WELLI",
      //       EmployeeID: 3,
      //       OrderDate: "2016-07-15",
      //       RequiredDate: "2016-08-12",
      //       ShippedDate: "2016-07-17",
      //       ShipVia: 2,
      //       Freight: 13.97,
      //       ShipName: "Wellington Importadora",
      //       ShipAddress: "Rua do Mercado, 12",
      //       ShipCity: "Resende",
      //       ShipRegion: "South America",
      //       ShipPostalCode: "08737-363",
      //       ShipCountry: "Brazil",
      //     },
      //     {
      //       OrderID: 10257,
      //       CustomerID: "HILAA",
      //       EmployeeID: 4,
      //       OrderDate: "2016-07-16",
      //       RequiredDate: "2016-08-13",
      //       ShippedDate: "2016-07-22",
      //       ShipVia: 3,
      //       Freight: 81.91,
      //       ShipName: "HILARION-Abastos",
      //       ShipAddress: "Carrera 22 con Ave. Carlos Soublette #8-35",
      //       ShipCity: "San Cristóbal",
      //       ShipRegion: "South America",
      //       ShipPostalCode: "5022",
      //       ShipCountry: "Venezuela",
      //     },
      //   ],
      //   error: "",
      // };

      setResponse(data);
      setWaitingResponse(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getSqlViewerContent = () => {
    if (response?.sqlQuery) {
      if (waitingResponse) {
        return `-- ${prompt}`;
      } else {
        return `-- ${prompt} \n${response.sqlQuery}`;
      }
    }

    if (waitingResponse) {
      return `-- ${prompt}`;
    }

    return "-- No prompt yet";
  };

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/ai/getAllChatHistory"
        );
        setChatHistory(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChatHistory();
  }, [response]);

  useEffect(() => {
    setSidebarProps({
      chatHistory,
      selectedQueryHistory,
      setSelectedQueryHistory,
      setShowModal,
    });
  }, [chatHistory, selectedQueryHistory]);

  useEffect(() => {
    setSidebarProps({
      chatHistory,
      selectedQueryHistory,
      setSelectedQueryHistory,
      setShowModal,
    });
  }, [selectedQueryHistory]);

  return (
    <>

        <main className="text-slate-100 overflow-hidden w-full h-full relative flex z-0 bg-slate-200 dark:bg-slate-800">
          <Navbar />
          <Sidebar {...sidebarProps} />

          {showModal && selectedQueryHistory && (
            <div className="fixed w-full h-full z-50 overflow-auto bg-gray-700/50 flex">
              <ModalForTable
                show={showModal}
                onClose={() => setShowModal(false)}
                response={selectedQueryHistory}
              />
            </div>
          )}
          <section className="flex flex-col p-6 mt-8 w-full h-full justify-between">
            <div className="mt-8 flex flex-col flex-1">
              {response?.error && response?.error !== "" && (
                <p className="rounded-xl bg-red-500 text-white p-6 mb-8">
                  {response.error}
                </p>
              )}
              <div className="relative flex flex-col flex-1 rounded-2xl bg-lightColor dark:bg-slate-900 overflow-hidden overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-400 dark:scrollbar-track-slate-950 dark:scrollbar-thumb-slate-700 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">
                {waitingResponse || firstRun ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    {waitingResponse && (
                      <Preloader
                        backgroundColor="fill-slate-800"
                        fillColor="fill-slate-600"
                      />
                    )}
                    {firstRun && (
                      <p className="text-slate-500 mt-4">
                        Type a prompt to get started
                      </p>
                    )}
                  </div>
                ) : (
                  <DataTable data={response?.result} />
                )}
              </div>
            </div>
            <div className="mb-12 mt-8">
              <div className="p-4 bg-lightColor dark:bg-slate-900 rounded-xl w-full mb-8 scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-400 dark:scrollbar-track-slate-950 dark:scrollbar-thumb-slate-700 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">
                <SqlViewer content={getSqlViewerContent()} />
              </div>
              <div className="flex rounded-2xl flex-col relative">
                <ChatForm onPrompt={onPrompt} />
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
