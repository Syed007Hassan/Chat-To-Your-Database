import { QueryHistory } from "@/interfaces";
import DataTable from "./DataTable";
import SqlViewer from "./SqlViewer";

const ModalForTable = ({
  show,
  onClose,
  response,
}: {
  show: boolean;
  onClose: () => void;
  response: QueryHistory | null;
}) => {
  const classes = show
    ? "m-auto z-50 p-4 overflow-x-hidden overflow-y-auto h-[95%] w-3/4 max-w-full max-h-full"
    : "fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full";

  console.log(response);

  return (
    <div
      id="large-modal"
      data-modal-placement="center-center"
      tabIndex={-1}
      className={classes}
    >
      <div className="relative w-full max-h-full h-full">
        <div className="relative h-full w-full  bg-slate-200 rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-5 border-b rounded-t bg-slate-200 border-lightColor dark:bg-gray-700 dark:border-gray-600">
            <div className="flex-grow flex justify-center ">
              <h3 className="text-xl font-bold  text-slate-800 dark:text-slate-300">
                Query History
              </h3>
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="large-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3 text-gray-600 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6 flex flex-col flex-1 mx-auto w-[100%] h-[65%]">
            <div className="relative flex flex-col flex-1 rounded-2xl bg-lightColor dark:bg-slate-900 overflow-hidden overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-400 dark:scrollbar-track-slate-950 dark:scrollbar-thumb-slate-700 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">
              {response?._id && response?.result.length ? (
                <DataTable data={response?.result} />
              ) : (
                <div className="flex flex-col justify-center items-center h-full">
                <p className="text-slate-500 mt-4">No response available</p>
                </div>
              )}
            </div>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 border-t border-lightColor rounded-b dark:border-gray-600">
            <div className="p-4 bg-lightColor dark:bg-slate-900 rounded-xl w-full scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-400 dark:scrollbar-track-slate-950 dark:scrollbar-thumb-slate-700 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">
              {response?._id ? (
                <SqlViewer content={`-- ${response.prompt} \n${response.sqlQuery}`} />
              ) : (
                <SqlViewer content={"-- prompt"} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalForTable;
