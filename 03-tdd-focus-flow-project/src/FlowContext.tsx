import {  useState, createContext, useContext, type ReactNode } from 'react';
import { type Item, type ItemWithoutId } from './utils';

interface FlowContextType {
  items: Item[];
  handleAddItem: (newItem: ItemWithoutId) => void;
  handleDeleteItem: (id: string) => void;
};

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export function FlowProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (newItem: ItemWithoutId) => {
    setItems([...items, { ...newItem, id: Date.now().toString() }]);
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FlowContext.Provider value={{ items, handleAddItem, handleDeleteItem }}>
      {children}
    </FlowContext.Provider>
  );
};

export function useFlowContext() {
  const context = useContext(FlowContext);
  
  if (context === undefined) {
    throw new Error('useFlow must be used within a FlowProvider');
  };

  return context;
};