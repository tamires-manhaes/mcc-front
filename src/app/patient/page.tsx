'use client'

import { Container } from "@/components/Container";
import {Header} from "@/components/Header";
import { TabContext } from "@/contexts/TabContext";
import { Avatar } from "@radix-ui/react-avatar";
import Link from "next/link";


export default function Page(){
  return(
    <Container>
      <Header context={TabContext}/>
      <main className="flex flex-col items-center justify-start w-[90vw] min-h-[90vh]">
        <h1>Lista de pacientes</h1>
        <ul className="bg-blue-300 border border-brand-300 w-full">
          <li className="w-full flex justify-around items-center">
            <Avatar />
            <span>Nome</span>
            <span>Status</span>
            <Link href="/edit">options</Link>
          </li>
        </ul>
      </main>
    </Container>
  )
}