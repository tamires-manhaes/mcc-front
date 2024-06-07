"use client"

import { Container, Logo } from "@/components";
import { Input, Select, SelectItem, Button } from "@/packages/ui/components"
import { redirect } from "next/navigation";
import { useCallback } from "react";

export default function SignUp(){
  const handleRegister = useCallback(() => { 
    console.log('register!')
    redirect('/login')
  }, [])

  return (
    <Container>
      <div className="flex flex-col mx-auto items-center justify-center w-full">
        <div>
          <Logo height={180} width={180} label="Registre-se" />
        </div>
        <form className="p-8 bg-white w-fit border border-brand-300 rounded min-w-[40vw]">
          <Input type="text" label="nome" placeholder="digite nome completo" className="mb-4" fullWidth={true} />
          <Input type="text" label="cpf" placeholder="***.***.***-**" className="mb-4" fullWidth={true} />
          <Input type="text" label="email" placeholder="seuemail@email.com" className="mb-4" fullWidth={true} />
          <Input type="password" label="senha" placeholder="digite senha, min 8 digitos" className="mb-4" fullWidth={true} />
          <Select placeholder="tipo" required={true} variant="primary" label="tipo" name="tipo" value="" classNames="mt-2 w-full" fullWidth >
            <SelectItem value="patient" >selecione</SelectItem>
          </Select>
          <Button variant="primary" fullWidth={true} onClick={() => redirect('/login')} classNames="mt-4">
            <span className="text-white">Registar</span>
          </Button>
        </form>
      </div>
    </Container>
  )
}