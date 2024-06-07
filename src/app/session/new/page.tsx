import { Header } from "@/components"
import { TabContext } from "@/contexts/TabContext"
import { Checkbox, Select, SelectItem, Textarea } from "@/packages/ui/components"

function NewSession(){

  /** 
   * TODO 
   * -> criar um endpoint que retorna os principais comportamentos apresentados numa sessao de terapia
   * -> criar um endpoint que retorna as principais queixas discutidas numa sessao de terapia
   * -> criar um endpoint que retorna as principais evolucoes numa sessao de terapia
   * ->
   */

  const behaviors = [
    {
      label: "Evitação",
      value: "evitacao"
    },
    {
      label: "Isolamento social",
      value: "social-isolation"
    },
    {
      label: "Choro frequente",
      value: "frequent-crying"
    },
    {
      label: "Irritabilidade e raiva",
      value: "anger-and-annoyance"
    },
    {
      label: "Inquietação e agitação",
      value: "agitation-inquietation"
    },
    {
      label: "Autocrítica excessiva",
      value: "excessive-autocriticism"
    },
    {
      label: "Relutância em falar",
      value: "not-talking"
    },
    {
      label: "Discussão de problemas de sono",
      value: "sleep-problems-discution"
    },
    {
      label: "Comportamentos de automutilação",
      value: "self-cutting"
    },
    {
      label: "Falar sobre vícios",
      value: "talking-about-addictions"
    },
    {
      label: "Ritualização e compulsões",
      value: "rituals-and-compulsions"
    },
    {
      label: "Discussão de problemas alimentares",
      value: "eating-problems-discution"
    },
    {
      label: "Fuga para fantasias",
      value: "fantasy-escape"
    },
    {
      label: "Confusão e indecisão",
      value: "confusion-and-indecision"
    }
  ]

  const symptoms = [
    {
      label: "Ansiedade",
      value: "anxiety"
    },
    {
      label: "Depressão",
      value: "depression"
    },
    {
      label: "Estresse",
      value: "stress"
    },
    {
      label: "Problemas de relacionamento",
      value: "relationship-problems"
    },
    {
      label: "Transtornos de humor",
      value: "humor-instability"
    },
    {
      label: "Problemas de autoestima",
      value: "selfsteem-problems"
    },
    {
      label: "Transtornos alimentares",
      value: "eating-disorders"
    },
    {
      label: "Trauma e transtorno de estresse pós-traumático (TEPT)",
      value: "tept"
    },
    {
      label: "Problemas de ajustamento",
      value: "adjustment-issues"
    },
    {
      label: "Dificuldades de concentração e atenção:",
      value: "focus-problems"
    },
    {
      label: "Abuso de substâncias",
      value: "substance-abuse"
    },
    {
      label: "Somatização",
      value: "somatization"
    },
  ]

  return (
    <div>
      <Header context={TabContext}/>
      <div>
        <h1>Nova Sessao</h1>
      </div>

      <div>
        <form className="max-w-[60vw] mx-auto border border-brand-500 p-4 rounded-sm">
          <div className="w-full flex flex-row justify-between items-center">
            <Select label="Paciente" placeholder="selecione o paciente" required variant="primary" value="" fullWidth={true} classNames="mx-2">
              <SelectItem value="dasdasdad">Maria do Bairro</SelectItem>
              <SelectItem value="dagfdgfdgada">Dobby o Elfo Livre</SelectItem>
              <SelectItem value="miranha">Miranha vulgo petter parker</SelectItem>
              <SelectItem value="ironman">Tony Stark</SelectItem>
              <SelectItem value="thor">Thor Odinsson</SelectItem>
            </Select>

            <Select label="Status" placeholder="selecione o status da sessao" required variant="primary" value="" fullWidth={true} classNames="mx-2">
              <SelectItem value="iniciada">Iniciada</SelectItem>
              <SelectItem value="agendada">Agendada</SelectItem>
            </Select>
          </div>

          <div>
            <label>Evolucao</label>
            <Textarea rows={8}/>
          </div>

          <div>
            <label>Observacoes</label>
            <Textarea rows={5}/>
          </div>

          <div className="flex items-center justify-between flex-row">
            <div className="h-[300px] my-4 w-[calc(100%/2-20px)]">
              <label className="font-semibold">Comportamentos apresentados</label>
              <ul className="overflow-y-scroll h-full border border-brand-300 rounded-sm p-2">
                {behaviors.map((b) => (  
                  <li key={b.value} className="mb-2">
                    <Checkbox label={b.label} value={b.value}/>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-[300px] my-4 w-[calc(100%/2-20px)]">
              <label className="font-semibold">Queixas discutidas</label>
              <ul className="overflow-y-scroll h-full border border-brand-300 rounded-sm p-2">
                {symptoms.map((s) => (  
                  <li key={s.value} className="mb-2">
                    <Checkbox label={s.label} value={s.value}/>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default NewSession