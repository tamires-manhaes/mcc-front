
'use client'

import { Badge } from "@/packages/ui/components"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/packages/ui/components/Table"
import Link from "next/link"

const sessions = [
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  },
  {
    id: "456325425",
    psyId: "Loren Freud",
    patientId: "Lorem Ipsum da Silva",
    date: new Date("21/05/2024"),
    time: "21:00"
  }

]

export function SessionsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[120px]">Paciente</TableHead>
          <TableHead>Psicólogo</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Horário</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Detalhes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sessions.map((session) => (
          <TableRow key={session.id}>
            <TableCell className="font-normal">{session.patientId}</TableCell>
            <TableCell>{session.psyId}</TableCell>
            <TableCell>{session.date.toString()}</TableCell>
            <TableCell>{session.time}</TableCell>
            <TableCell className="flex items-center justify-center"><Badge variant="success" label="finalizada"/></TableCell>
            <TableCell className="font-semibold"><Link href={`/session/${session.id}`} className="hover:text-brand-400">Ver</Link></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function Sessions(){
  return (
    <div className="w-full">
      <div className="flex justify-between mb-5 max-w-[70vw] mx-auto">
        <h3 className="text-lg font-semibold text-brand-500">Todas as Sessoes:</h3>
        <Link href="/session/new" className="bg-brand-500 text-brand-50 px-4 rounded-sm hover:opacity-hover flex flex-wrap justify-center items-center">
          <span className="text-sm">Nova Sessao</span>
        </Link>
      </div>
      <SessionsTable />
    </div>
  )
}