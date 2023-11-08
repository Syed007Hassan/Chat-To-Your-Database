import { QueryHistory } from "./QueryHistory";

export interface SidebarProps {
  chatHistory: QueryHistory[];
  selectedQueryHistory: QueryHistory | null;
  setSelectedQueryHistory: (history: QueryHistory) => void;
  setShowModal: (show: boolean) => void; // new property
}
