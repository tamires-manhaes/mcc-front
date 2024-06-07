'use client'

import { Button, Input } from "@/packages/ui/components";
import { Container } from "@/components";
import Logo from "@/components/Logo";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Login() {
  return (
    <Container>
      <div className="flex flex-wrap items-center flex-col min-w-[45vw]">
        <div>
          <Logo width={180} height={180} label="Login" /> 
        </div>
        <div className="w-full">
          <form className="border-brand-300 border rounded-lg px-10 py-8 bg-white w-full">
            <Input className="mb-5" label="email" fullWidth={true} placeholder="digite email"/>
            <div>
              <Input type="password" className="mb-5" label="senha" fullWidth={true} placeholder="digite senha"/>
              <Link href="/reset-password" className="text-brand-500">esqueceu a senha?</Link>
            </div>
            <Button variant="primary" classNames="mt-3" onClick={() => redirect('/home')} fullWidth={true}>
              <strong className="text-white">Login</strong>
            </Button>
          </form>
        </div>
        <div className="border-brand-300 border flex items-center justify-center py-8 px-10 bg-white rounded-sm mt-4 w-full">
          <span>Novo aqui? </span><Link href="/signup" className="text-brand-500 ml-1">crie uma conta aqui</Link>
        </div>
      </div>
    </Container>
  );
}
