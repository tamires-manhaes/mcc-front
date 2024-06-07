'use client'

import { Logo } from "@/components";
import { Container } from "@/components/Container";
import { Button, Input } from "@/packages/ui/components";
import { redirect } from "next/navigation";

export default function ResetPassword() {
  return (
    <Container>
      <div className="flex flex-wrap items-center flex-col min-w-[45vw]">
        <div>
          <Logo width={180} height={180} label="Esqueceu a sua senha" /> 
        </div>
        <div className="w-full">
          <form className="border-brand-300 border rounded-lg px-10 py-8 bg-white w-full">
            <Input className="mb-5" label="email" fullWidth={true} placeholder="digite email"/>
            <div>
              <Input type="password" className="mb-5" label="senha" fullWidth={true} placeholder="digite senha"/>
              <Input type="password" className="mb-5" label="repita a senha" fullWidth={true} placeholder="confirme a senha"/>
            </div>
            <Button variant="primary" classNames="mt-3" onClick={() => redirect('/home')} fullWidth={true}>
              <strong className="text-white">reset</strong>
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
}