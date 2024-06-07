'use client'

import { Container, Header } from "@/components"
import { TabContext } from "@/contexts/TabContext"
import {  ReactNode, useContext } from "react"
import { Sessions } from "@/components/sessions"
import { Patients } from "@/components/patients"
import { HomePage } from "@/components/Home"

const TabDict = (): ReactNode => {
  const { activeTab } = useContext(TabContext);

  const dict:{ [key: string]: JSX.Element } = {
    home: <HomePage />,
    sessions: <Sessions />,
    patients: <Patients />,
    evolutions: <h1>Evoluções</h1>
  }

  return dict[activeTab];
}

export default function Home(){
  return (
    <Container className="py-20 px-12">
      <Header />
      <main className="w-full">
        <TabDict />
      </main>
    </Container>
  )
}