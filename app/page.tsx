'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Terminal, Shield, Users, Database, Cloud, Code2, Lock, Zap, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative flex min-h-screen items-center justify-center px-4"
      >
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block rounded-full border border-primary/50 bg-primary/10 px-4 py-2"
          >
            <span className="text-sm font-mono text-primary">√TD - Team Dev</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl"
          >
            <span className="gradient-text text-glow">Team Dev</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Grupo de elite de desenvolvedores e hackers. 
            Conhecimento compartilhado, recursos exclusivos e crescimento constante.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button size="lg" className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90">
              <span className="relative z-10 font-semibold">Junte-se ao Time</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] opacity-0 transition-opacity group-hover:opacity-100" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Saiba Mais
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">Role para baixo</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-8 w-5 rounded-full border-2 border-primary/50 p-1"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <AboutSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Features Section */}
      <FeaturesSection />

      <ConfidentialitySection />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const titleWords = ['Recrutando', 'Talentos']
  const description = 'Estamos em busca de desenvolvedores apaixonados por programação que desejam expandir seus conhecimentos e compartilhar experiências. Seja você um desenvolvedor experiente ou um hacker ético, você será muito bem-vindo em nossa comunidade.'.split(' ')

  return (
    <section ref={ref} className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            {titleWords.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ opacity: 0, y: 50, scale: 0 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: wordIndex * 0.2 + letterIndex * 0.05,
                      type: 'spring',
                      stiffness: 300
                    }}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.3,
                      color: 'hsl(var(--accent))',
                      transition: { duration: 0.2 }
                    }}
                    className="gradient-text inline-block cursor-pointer"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {description.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="group relative overflow-hidden border-primary/20 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
              <div className="absolute right-0 top-0 h-32 w-32 bg-primary/10 blur-3xl" />
              <Terminal className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110 group-hover:rotate-6" />
              <h3 className="mb-3 text-2xl font-bold">Desenvolvedores</h3>
              <p className="leading-relaxed text-muted-foreground">
                Aprimore suas habilidades em desenvolvimento de software, aprenda novas tecnologias 
                e trabalhe em projetos reais com outros profissionais talentosos.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Card className="group relative overflow-hidden border-secondary/20 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20">
              <div className="absolute right-0 top-0 h-32 w-32 bg-secondary/10 blur-3xl" />
              <Shield className="mb-4 h-12 w-12 text-secondary transition-transform group-hover:scale-110 group-hover:rotate-6" />
              <h3 className="mb-3 text-2xl font-bold">Hackers Éticos</h3>
              <p className="leading-relaxed text-muted-foreground">
                Explore segurança cibernética, pentesting e ethical hacking em um ambiente 
                seguro e profissional. Aprenda técnicas avançadas com especialistas da área.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ConfidentialitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const warningText = 'Aviso de Confidencialidade'
  const message = 'Qualquer informação aqui presente não deve ser vazada, caso contrário resultará em punição imediata.'

  return (
    <section ref={ref} className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border-2 border-red-500/50 bg-red-950/20 p-8 md:p-12 backdrop-blur-sm"
        >
          {/* Pulsing warning effect */}
          <motion.div
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-2 border-red-500 rounded-2xl"
          />
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <AlertTriangle className="h-16 w-16 text-red-500 animate-pulse-glow" />
            </motion.div>
            
            <h2 className="mb-6 text-3xl md:text-4xl font-bold">
              {warningText.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: 0,
                  } : {}}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.4 + index * 0.03 
                  }}
                  className="inline-block text-red-500"
                  style={{
                    textShadow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.4)'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-lg md:text-xl leading-relaxed text-red-200"
            >
              {message}
            </motion.p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 h-32 w-32 bg-red-500/20 blur-3xl rounded-full animate-pulse-glow" />
          <div className="absolute bottom-0 right-0 h-32 w-32 bg-red-500/20 blur-3xl rounded-full animate-pulse-glow" />
        </motion.div>
      </div>
    </section>
  )
}


function BenefitsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const benefits = [
    {
      icon: Cloud,
      title: 'Cloud Credits',
      description: 'Acesso a créditos de cloud computing para hospedar seus projetos',
      color: 'text-blue-400'
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'Recursos de banco de dados premium para desenvolvimento',
      color: 'text-green-400'
    },
    {
      icon: Code2,
      title: 'Methods & Tools',
      description: 'Métodos exclusivos, ferramentas e frameworks de desenvolvimento',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Conexão com desenvolvedores experientes e oportunidades de carreira',
      color: 'text-yellow-400'
    },
    {
      icon: Zap,
      title: 'APIs Premium',
      description: 'Acesso a APIs e serviços premium para seus projetos',
      color: 'text-red-400'
    },
    {
      icon: Lock,
      title: 'Segurança',
      description: 'Aprenda as melhores práticas de segurança e proteção de dados',
      color: 'text-cyan-400'
    }
  ]

  const titleWords = ['Benefícios', 'Exclusivos']

  return (
    <section ref={ref} className="relative bg-muted/30 px-4 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            {titleWords.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ opacity: 0, rotateY: -90, z: -100 }}
                    animate={isInView ? { opacity: 1, rotateY: 0, z: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: wordIndex * 0.2 + letterIndex * 0.05,
                      type: 'spring'
                    }}
                    whileHover={{ 
                      scale: 1.4,
                      y: -8,
                      color: 'hsl(var(--secondary))',
                      rotateZ: 10,
                      transition: { duration: 0.2 }
                    }}
                    className="gradient-text inline-block cursor-pointer"
                    style={{ transformOrigin: 'center' }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Membros mais ativos recebem bonificações especiais que impulsionam 
            seus projetos e carreira profissional
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
            >
              <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 hover:scale-105">
                <benefit.icon className={`mb-4 h-10 w-10 ${benefit.color} transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`} />
                <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-150" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const titleWords = ['Nossos', 'Objetivos']

  return (
    <section ref={ref} className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            {titleWords.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ opacity: 0, z: -100, scale: 0 }}
                    animate={isInView ? { opacity: 1, z: 0, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: wordIndex * 0.2 + letterIndex * 0.05 
                    }}
                    whileHover={{ 
                      y: -15,
                      scale: 1.4,
                      color: 'hsl(var(--accent))',
                      transition: { duration: 0.3 }
                    }}
                    className="gradient-text inline-block cursor-pointer"
                    style={{ transformOrigin: 'center' }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Construir uma comunidade sólida de desenvolvedores com excelentes capacidades técnicas
          </motion.p>
        </div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="w-full">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="mb-4 inline-block rounded-lg bg-primary/10 p-3"
              >
                <Code2 className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="mb-3 text-2xl font-bold">Compartilhamento de Conhecimento</h3>
              <p className="leading-relaxed text-muted-foreground">
                Promovemos um ambiente colaborativo onde membros compartilham conhecimentos, 
                códigos, tutoriais e soluções para problemas complexos de programação.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="w-full">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="mb-4 inline-block rounded-lg bg-secondary/10 p-3"
              >
                <Users className="h-8 w-8 text-secondary" />
              </motion.div>
              <h3 className="mb-3 text-2xl font-bold">Comunidade Ativa</h3>
              <p className="leading-relaxed text-muted-foreground">
                Participe de discussões técnicas, eventos online, hackathons internos e 
                projetos colaborativos que fortalecem suas habilidades e networking.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col items-center gap-8 md:flex-row"
          >
            <div className="flex-1">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="mb-4 inline-block rounded-lg bg-red-500/10 p-3"
              >
                <Zap className="h-8 w-8 text-red-500" />
              </motion.div>
              <h3 className="mb-3 text-2xl font-bold">Recursos Premium</h3>
              <p className="leading-relaxed text-muted-foreground">
                Membros ativos recebem acesso a cloud, databases, APIs e tools exclusivas 
                para impulsionar seus projetos e desenvolver soluções profissionais.
              </p>
            </div>
            <TypewriterCodeBlock 
              delay={2.0} 
              command="git clone team-dev/resources" 
              result="Team Dev"
              resultColor="red"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col items-center gap-8 md:flex-row-reverse"
          >
            <div className="flex-1">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 2 }}
                className="mb-4 inline-block rounded-lg bg-blue-500/10 p-3"
              >
                <Lock className="h-8 w-8 text-blue-500" />
              </motion.div>
              <h3 className="mb-3 text-2xl font-bold">Ambiente Seguro</h3>
              <p className="leading-relaxed text-muted-foreground">
                Todas as informações e recursos compartilhados são mantidos em sigilo absoluto. 
                Ambiente privado e seguro para desenvolver suas habilidades técnicas.
              </p>
            </div>
            <FloatingTeamDevBlock 
              delay={2.2}
              command="sudo access --team-dev"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TypewriterCodeBlock({ 
  delay, 
  command, 
  result,
  resultColor
}: { 
  delay: number
  command: string
  result: string
  resultColor: 'red' | 'blue'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayedCommand, setDisplayedCommand] = useState('')
  const [showResult, setShowResult] = useState(false)
  
  useEffect(() => {
    if (!isInView) return
    
    let currentChar = 0
    const timer = setInterval(() => {
      if (currentChar < command.length) {
        setDisplayedCommand(command.slice(0, currentChar + 1))
        currentChar++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowResult(true), 300)
      }
    }, 80)
    
    return () => clearInterval(timer)
  }, [isInView, command])
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.8 }}
      className="h-64 w-full md:w-80 flex-shrink-0 rounded-lg bg-gradient-to-br from-black/80 to-red-500/20 backdrop-blur-sm p-6 overflow-hidden relative shadow-2xl border border-red-500/30"
    >
      <div className="font-mono text-xs md:text-sm">
        <div className="mb-4 text-green-400">
          $ {displayedCommand}
          {!showResult && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-green-400 ml-1"
            />
          )}
        </div>
        
        {showResult && (
          <div className="flex gap-1 mt-8 justify-center">
            {result.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: [30, -10, 0, -5, 0],
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="inline-block font-bold text-2xl md:text-3xl"
                style={{ 
                  color: 'rgb(239, 68, 68)',
                  textShadow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.4)'
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-red-500/30 blur-3xl rounded-full animate-pulse-glow" />
    </motion.div>
  )
}

function FloatingTeamDevBlock({ 
  delay,
  command
}: { 
  delay: number
  command: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayedCommand, setDisplayedCommand] = useState('')
  const [showResult, setShowResult] = useState(false)
  
  useEffect(() => {
    if (!isInView) return
    
    let currentChar = 0
    const timer = setInterval(() => {
      if (currentChar < command.length) {
        setDisplayedCommand(command.slice(0, currentChar + 1))
        currentChar++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowResult(true), 300)
      }
    }, 80)
    
    return () => clearInterval(timer)
  }, [isInView, command])
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.8 }}
      className="h-64 w-full md:w-80 flex-shrink-0 rounded-lg bg-gradient-to-br from-black/80 to-blue-500/20 backdrop-blur-sm p-6 overflow-hidden relative shadow-2xl border border-blue-500/30"
    >
      <div className="font-mono text-xs md:text-sm">
        <div className="mb-4 text-green-400">
          $ {displayedCommand}
          {!showResult && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-green-400 ml-1"
            />
          )}
        </div>
        
        {showResult && (
          <div className="flex gap-1 mt-8 justify-center items-center h-24">
            {'Team Dev'.split('').map((letter, index) => (
              <motion.span
                key={index}
                animate={{ 
                  y: [0, -20, 0, -10, 0],
                  scale: [1, 1.1, 1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3, 
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block font-bold text-2xl md:text-3xl"
                style={{ 
                  color: 'rgb(59, 130, 246)',
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)'
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-blue-500/30 blur-3xl rounded-full animate-pulse-glow" />
    </motion.div>
  )
}
