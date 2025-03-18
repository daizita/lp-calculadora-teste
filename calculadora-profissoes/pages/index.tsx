import Head from "next/head"
import { ArrowRight, ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculadora de Profissões do Futuro</title>
        <meta name="description" content="Descubra as profissões do futuro que combinam com você" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <header className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="h-10 w-[180px] bg-gray-200 rounded-md"></div>
          </div>
          <button className="rounded-full bg-white text-[#164193] hover:bg-blue-50 border border-[#164193] px-4 py-2">
            Conheça o crédito estudantil
          </button>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-white py-16">
            <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight tracking-tighter text-[#164193] md:text-5xl lg:text-6xl">
                  Descubra as Profissões do Futuro e Escolha Sua Carreira Ideal
                </h1>
                <p className="max-w-[600px] text-lg text-[#164193] md:text-xl">
                  Você está preparado para as carreiras mais promissoras dos próximos anos? Nossa Calculadora de
                  Profissões do Futuro ajuda você a identificar a área ideal de acordo com seu perfil e interesses,
                  conectando você às melhores instituições de ensino e opções de crédito estudantil.
                </p>
                <button className="rounded-full bg-[#164193] text-white px-8 py-6 text-lg hover:bg-[#0d2b6a] flex items-center">
                  Começar agora <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className="flex justify-center">
                <div className="h-[400px] w-[400px] bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </section>

          {/* Como Funciona */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="mb-12 text-center text-3xl font-bold text-blue-900">Como Funciona</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="border-2 border-[#164193]/20 bg-white shadow-sm transition-all hover:shadow-md rounded-lg p-6">
                  <div className="pb-2">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#164193]/10 text-[#164193]">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl text-[#164193] font-semibold">Responda o quiz</h3>
                  </div>
                  <div>
                    <p className="text-base text-gray-600">Informe seus interesses e habilidades.</p>
                  </div>
                </div>
                <div className="border-2 border-[#164193]/20 bg-white shadow-sm transition-all hover:shadow-md rounded-lg p-6">
                  <div className="pb-2">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#164193]/10 text-[#164193]">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl text-[#164193] font-semibold">Descubra profissões</h3>
                  </div>
                  <div>
                    <p className="text-base text-gray-600">Veja quais carreiras terão maior demanda no futuro.</p>
                  </div>
                </div>
                <div className="border-2 border-[#164193]/20 bg-white shadow-sm transition-all hover:shadow-md rounded-lg p-6">
                  <div className="pb-2">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#164193]/10 text-[#164193]">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl text-[#164193] font-semibold">Escolha seu curso</h3>
                  </div>
                  <div>
                    <p className="text-base text-gray-600">Conecte-se com faculdades parceiras da Fundacred.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Card CTA */}
          <section className="py-16 bg-blue-50/50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl font-bold text-[#164193] md:text-4xl">
                    Vamos descobrir quais profissões do futuro combinam com você?
                  </h2>
                  <p className="text-gray-600 text-lg mx-auto max-w-2xl">
                    Responda rapidamente algumas perguntas e receba recomendações personalizadas!
                  </p>
                  <div className="pt-2">
                    <button className="rounded-md bg-[#164193] text-white px-10 py-6 text-lg hover:bg-[#0d2b6a] flex items-center mx-auto">
                      Iniciar Teste <span className="ml-2">✨</span>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 pt-4">Teste rápido • 10 perguntas • Resultado personalizado</p>
                </div>
              </div>
            </div>
          </section>

          {/* Exemplo de Resultados */}
          <section className="bg-blue-50 py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="mb-12 text-center text-3xl font-bold text-blue-900">
                Veja exemplos de profissões em alta:
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="overflow-hidden border-none bg-white shadow-md transition-all hover:shadow-lg rounded-lg">
                  <div className="bg-gradient-to-r from-[#164193] to-[#2a5bc5] pb-3 pt-6 text-white p-6">
                    <h3 className="flex items-center justify-between text-xl font-semibold">
                      Analista de Dados e IA
                      <ArrowUpRight className="h-5 w-5 text-green-300" />
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-gray-600">
                      Profissionais que analisam grandes volumes de dados e desenvolvem soluções de inteligência
                      artificial para empresas.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <button className="rounded-full text-[#164193] hover:bg-blue-50 border border-[#164193] px-4 py-2 text-sm">
                      Ver cursos relacionados
                    </button>
                  </div>
                </div>
                <div className="overflow-hidden border-none bg-white shadow-md transition-all hover:shadow-lg rounded-lg">
                  <div className="bg-gradient-to-r from-[#164193] to-[#2a5bc5] pb-3 pt-6 text-white p-6">
                    <h3 className="flex items-center justify-between text-xl font-semibold">
                      Especialista em Sustentabilidade
                      <ArrowUpRight className="h-5 w-5 text-green-300" />
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-gray-600">
                      Profissionais que desenvolvem e implementam estratégias sustentáveis para reduzir o impacto
                      ambiental das empresas.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <button className="rounded-full text-[#164193] hover:bg-blue-50 border border-[#164193] px-4 py-2 text-sm">
                      Ver cursos relacionados
                    </button>
                  </div>
                </div>
                <div className="overflow-hidden border-none bg-white shadow-md transition-all hover:shadow-lg rounded-lg">
                  <div className="bg-gradient-to-r from-[#164193] to-[#2a5bc5] pb-3 pt-6 text-white p-6">
                    <h3 className="flex items-center justify-between text-xl font-semibold">
                      Engenheiro de Energias Renováveis
                      <ArrowUpRight className="h-5 w-5 text-green-300" />
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-gray-600">
                      Profissionais que projetam, desenvolvem e implementam sistemas de energia renovável, como solar e
                      eólica.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <button className="rounded-full text-[#164193] hover:bg-blue-50 border border-[#164193] px-4 py-2 text-sm">
                      Ver cursos relacionados
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center md:px-6">
              <h2 className="mb-6 text-2xl font-bold text-blue-900 md:text-3xl">
                Quer descobrir as melhores oportunidades para o seu futuro?
              </h2>
              <button className="rounded-full bg-[#164193] text-white px-10 py-6 text-lg hover:bg-[#0d2b6a]">
                Iniciar teste gratuito
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t bg-gray-50 py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="h-10 w-[180px] bg-gray-200 rounded-md"></div>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-gray-900">Links Rápidos</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-[#164193]">
                      Crédito Estudantil
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#164193]">
                      Instituições Parceiras
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#164193]">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-gray-900">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-[#164193]">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#164193]">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#164193]">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Fundacred. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

