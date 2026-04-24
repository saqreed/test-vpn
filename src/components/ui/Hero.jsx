import { motion, useReducedMotion } from 'framer-motion'
import { Container } from './Container'
import { ActionLink } from './Button'

export function PageHero({ hero }) {
  const reduceMotion = useReducedMotion()
  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section className="structured-hero bg-mesh">
      <div className="structured-hero-pattern" />
      <Container className="relative text-center text-white">
        <motion.div
          {...motionProps}
          transition={{ duration: 0.5 }}
          className="glass-dark inline-flex rounded-full px-[18px] py-[7px] text-[13px] font-semibold"
        >
          {hero.eyebrow}
        </motion.div>
        <motion.h1
          {...motionProps}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mb-[18px] mt-[22px] max-w-[880px] text-[clamp(34px,5vw,60px)] font-black leading-[1.08]"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 0.18 }}
          className="mx-auto max-w-[700px] text-[17px] leading-8 text-white/70"
        >
          {hero.description}
        </motion.p>
        {hero.badges?.length > 0 && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-[26px] flex flex-wrap justify-center gap-2.5"
          >
            {hero.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/10 px-3 py-[7px] text-xs font-bold text-white/90">
                {badge}
              </span>
            ))}
          </motion.div>
        )}
        {hero.actions?.length > 0 && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {hero.actions.map((action) => (
              <ActionLink key={action.label} action={action} hero />
            ))}
          </motion.div>
        )}
      </Container>
      <div className="structured-hero-wave">
        <svg viewBox="0 0 1440 60" fill="none">
          <path d="M0 60L1440 60L1440 18C1080 60 720 8 360 44L0 18Z" fill="var(--bg)" />
        </svg>
      </div>
    </section>
  )
}
