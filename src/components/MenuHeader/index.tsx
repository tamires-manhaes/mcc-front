import { TabContext } from "@/contexts/TabContext";
import { Button } from "@/packages/ui/components";
import { useContext } from "react";

export default function MenuHeader(){
  const { setActiveTab, tabs } = useContext(TabContext);

  const labelDict = (tab: string): string => {
    const dict: { [key: string]: string } = {
      home: "Home",
      sessions: "Sessões",
      patients: "Pacientes",
      evolutions: "Evoluções"
    }
    return dict[tab];
  }
  return (
    <ul className="flex flex-row mr-4">
      {
        tabs.map((tab, index) => {
          return (
            <li className="mx-2 hover:text-brand-400 transition-colors" key={tab}><Button variant="link" label={labelDict(tab)} onClick={() => setActiveTab(tabs[index])}/></li>
          )
        })
      }
    </ul>
  )
}