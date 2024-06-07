"use client"

import { createContext, FunctionComponent, ReactNode, SetStateAction, useState } from "react"

export interface TabContextProps {
  activeTab: string;
  setActiveTab: React.Dispatch<SetStateAction<string>>;
  tabs: string[],
}

interface TabContextProviderProps {
  children: ReactNode
}


export const TabContext = createContext<TabContextProps>({ activeTab: 'sessions', setActiveTab: () => {}, tabs: []});

function TabContextProvider({ children  }: TabContextProviderProps){
  const [activeTab, setActiveTab] = useState<string>('home')

  const tabs = ["sessions", "patients", "evolutions"]

  return (
    <TabContext.Provider value={{ tabs, activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  )
}

export default TabContextProvider