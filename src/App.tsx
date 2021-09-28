import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";


export function App() { 
  const [isNewTransactionModalOpen, setIsNewTransactioModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactioModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactioModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header  onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
