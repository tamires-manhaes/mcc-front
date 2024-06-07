import { Avatar } from "@/packages/ui/components/Avatar";
import Logo from "../Logo";
import MenuHeader from "../MenuHeader";
import Link from "next/link";
import React, { Context, FunctionComponent, useContext } from "react";
import { TabContext, TabContextProps  } from "../../contexts/TabContext/index";
import TabContextProvider from "@/contexts/TabContext";


export const Header: FunctionComponent = () => {
  const { setActiveTab } = useContext(TabContext)
  return (
    <TabContextProvider>
      <header className="absolute top-0 flex flex-row justify-between w-full py-2 px-4 bg-white">
        <div>
          <Link href="/" onClick={() => setActiveTab('home')}>
            <Logo height={45} width={45} />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <MenuHeader />
          <Avatar src="/assets/fallback.svg"/>
        </div>
      </header>
    </TabContextProvider>
  )
} 