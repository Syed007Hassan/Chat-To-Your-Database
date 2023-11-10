import { QueryHistory } from "@/interfaces";
import DataTable from "./DataTable";
import SqlViewer from "./SqlViewer";

const ModalForTable = ({
  show,
  onClose,
  response,
  getSqlViewerContent
}: {
  show: boolean;
  onClose: () => void;
  response: QueryHistory | null;
  getSqlViewerContent: () => string;
}) => {
  console.log(response);
  const classes = show
    ? "m-auto z-50 p-4 overflow-x-hidden overflow-y-auto h-[85%] w-3/4 max-w-full max-h-full"
    : "fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full";

  return (
    <div id="large-modal" data-modal-placement="center-center" tabIndex={-1} className={classes}>
      <div className="relative w-full max-h-full h-full">
        <div className="relative h-full w-full  bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Large modal
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="large-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6 flex flex-col flex-1 mx-auto w-[100%] h-[65%]">
            <div className="relative flex flex-col flex-1 rounded-2xl bg-slate-900 overflow-hidden overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-700 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">

            {response?._id?
                <DataTable data={response?.result} />
            :
            <p>No response available</p>
            }
            </div>

          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
             <div className="p-4 bg-slate-900 rounded-xl w-full scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-700 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">
                {response?._id
                ?
                <SqlViewer content={response!.sqlQuery} />
                :
                <SqlViewer content={'-- prompt'} />
                }
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalForTable;
