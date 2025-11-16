'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleJoinGroup = () => {
    window.open('https://chat.whatsapp.com/CYvrFLdusxWKj8SvFLHQ9c?mode=wwt', '_blank')
  }

  return (
    <>
      <motion.button
        onClick={() => setIsExpanded(true)}
        whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
        whileTap={{ scale: 0.9 }}
        className="group fixed bottom-6 right-6 z-50 pointer-events-auto"
      >
        {/* Pulse animation */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut'
          }}
          className="absolute inset-0 rounded-full bg-green-500"
        />
        
        {/* Button */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/50 transition-all group-hover:shadow-green-500/80">
          <MessageCircle className="h-8 w-8 text-white" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl transition-all group-hover:bg-green-500/60 group-hover:blur-2xl" />
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0, rotateY: -180, y: 100 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0, y: 0 }}
              exit={{ scale: 0, opacity: 0, rotateY: 180, y: -100 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-green-500/50 bg-card/98 p-8 shadow-2xl shadow-green-500/30 backdrop-blur-md">
                {/* Background effects */}
                <div className="absolute right-0 top-0 h-40 w-40 bg-green-500/20 blur-3xl animate-pulse-glow" />
                <div className="absolute left-0 bottom-0 h-40 w-40 bg-green-400/10 blur-3xl animate-pulse-glow" />
                
                {/* Floating sparkles */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4"
                >
                  <Sparkles className="h-6 w-6 text-green-400" />
                </motion.div>
                
                <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
                    className="mb-6 flex items-center gap-4"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 ring-4 ring-green-500/50">
                      <MessageCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        {'Team Dev'.split('').map((letter, index) => (
                          <motion.span
                            key={index}
                            initial={{ y: 20, opacity: 0, rotateX: -90 }}
                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                            transition={{ 
                              delay: 0.2 + index * 0.05, 
                              type: 'spring', 
                              stiffness: 300 
                            }}
                            whileHover={{ 
                              y: [-5, -15, -5],
                              scale: 1.3,
                              color: '#22c55e',
                              rotate: [0, -15, 15, 0],
                              transition: { duration: 0.4 }
                            }}
                            className="inline-block cursor-pointer"
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </h3>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-sm text-muted-foreground"
                      >
                        Grupo Oficial √TD
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-6 space-y-3"
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Somos um <span className="font-bold text-foreground">grupo sério de desenvolvedores profissionais</span>.
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Oferecemos <span className="text-green-500 font-semibold">recompensas exclusivas</span> para 
                      membros ativos: cloud, databases, methods e APIs premium.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-3"
                  >
                    <Button
                      onClick={handleJoinGroup}
                      className="flex-1 bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/30 transition-all hover:shadow-green-500/50 hover:scale-105"
                      size="lg"
                    >
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex items-center gap-2"
                      >
                        Entrar no Grupo
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                    <Button
                      onClick={() => setIsExpanded(false)}
                      variant="outline"
                      size="lg"
                      className="border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50 hover:scale-110 transition-all"
                    >
                      ✕
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
