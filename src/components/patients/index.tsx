import { Badge } from "@/packages/ui/components"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/packages/ui/components/Table"
import Link from "next/link"




function PatientsTable(){
  return (
    <Table>
      <TableHeader>
        <TableRow className="w-full">
          <TableHead >Paciente</TableHead>
          <TableHead >Ultima Sessao</TableHead>
          <TableHead >Status</TableHead>
          <TableHead >Detalhes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="min-w-[120px]">João da Silva</TableCell>
          <TableCell>21/05/2024</TableCell>
          <TableCell className="flex items-center justify-center"><Badge variant="success" label="Ativo" /></TableCell>
          <TableCell className="font-bold"><Link href={`/patient/id-do-paciente`} className="hover:text-brand-400">Ver</Link></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export function Patients(){
  return (
    <div className="w-full">
      <div className="flex justify-between mb-5 max-w-[70vw] mx-auto">
        <h3 className="text-lg font-semibold text-brand-500">Todos os Pacientes:</h3>
        <Link href="/patient/new" className="bg-brand-500 text-brand-50 px-4 rounded-sm hover:opacity-hover flex flex-wrap justify-center items-center">
          <span className="text-sm">Novo Paciente</span>
        </Link>
      </div>
      <PatientsTable/>
    </div>
  )
}