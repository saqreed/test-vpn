import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SEO from './SEO'

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

function ActionLink({ action, hero = false }) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '13px 26px',
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 15,
    textDecoration: 'none',
    transition: 'transform 0.18s, box-shadow 0.18s',
  }

  const style = hero
    ? action.primary
      ? {
          ...baseStyle,
          background: '#fff',
          color: '#1d4ed8',
          boxShadow: '0 4px 20px rgba(0,0,0,0.22)',
        }
      : {
          ...baseStyle,
          color: '#fff',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.16)',
        }
    : action.primary
      ? {
          ...baseStyle,
          background: '#fff',
          color: '#1d4ed8',
          boxShadow: '0 4px 20px rgba(0,0,0,0.16)',
        }
      : {
          ...baseStyle,
          color: '#fff',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.16)',
        }

  const commonProps = {
    style,
    onMouseEnter: (event) => {
      event.currentTarget.style.transform = 'scale(1.03)'
    },
    onMouseLeave: (event) => {
      event.currentTarget.style.transform = 'scale(1)'
    },
  }

  if (action.href) {
    return (
      <a href={action.href} target="_blank" rel="noreferrer" {...commonProps}>
        {action.label}
        {action.showArrow !== false && <ArrowRight size={16} />}
      </a>
    )
  }

  return (
    <Link to={action.to} {...commonProps}>
      {action.label}
      {action.showArrow !== false && <ArrowRight size={16} />}
    </Link>
  )
}

function SectionHeader({ title, description }) {
  return (
    <FadeUp>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h2
          style={{
            fontSize: 'clamp(24px,3.4vw,42px)',
            fontWeight: 900,
            color: 'var(--text)',
            letterSpacing: '-0.7px',
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            style={{
              color: 'var(--text-3)',
              fontSize: 16,
              marginTop: 12,
              maxWidth: 620,
              marginInline: 'auto',
              lineHeight: 1.75,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </FadeUp>
  )
}

function CardsSection({ section }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
        gap: 18,
      }}
    >
      {section.items.map((item, index) => {
        const Icon = item.Icon

        return (
          <FadeUp key={item.title} delay={index * 0.06}>
            <div
              style={{
                background: 'var(--bg-card)',
                borderRadius: 18,
                padding: '28px 24px',
                border: '1px solid var(--border)',
                height: '100%',
                transition: 'box-shadow 0.22s, transform 0.22s',
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.boxShadow = '0 12px 36px rgba(59,130,246,0.12)'
                event.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.boxShadow = 'none'
                event.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {Icon && (
                <div
                  className="vpn-gradient"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    boxShadow: '0 4px 14px rgba(29,78,216,0.28)',
                  }}
                >
                  <Icon size={22} color="#fff" />
                </div>
              )}
              {item.meta && (
                <div
                  style={{
                    display: 'inline-flex',
                    padding: '4px 10px',
                    borderRadius: 999,
                    background: 'rgba(59,130,246,0.08)',
                    color: '#2563eb',
                    fontSize: 12,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {item.meta}
                </div>
              )}
              <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', marginBottom: 10 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.7 }}>
                {item.description}
              </p>
              {item.bullets?.length > 0 && (
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 9,
                    marginTop: 18,
                  }}
                >
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        fontSize: 13,
                        color: 'var(--text-2)',
                        lineHeight: 1.6,
                      }}
                    >
                      <CheckCircle size={14} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeUp>
        )
      })}
    </div>
  )
}

function TimelineSection({ section }) {
  return (
    <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          left: 18,
          top: 0,
          bottom: 0,
          width: 2,
          background: 'linear-gradient(to bottom, #3b82f6, rgba(59,130,246,0.12))',
        }}
      />
      {section.items.map((item, index) => (
        <FadeUp key={`${item.label}-${item.title}`} delay={index * 0.06}>
          <div style={{ display: 'flex', gap: 24, marginBottom: 28, position: 'relative' }}>
            <div
              className="vpn-gradient"
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 11,
                fontWeight: 800,
                flexShrink: 0,
                zIndex: 1,
                boxShadow: '0 3px 10px rgba(29,78,216,0.3)',
              }}
            >
              {item.label}
            </div>
            <div style={{ paddingTop: 5 }}>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.7 }}>{item.description}</p>
              {item.bullets?.length > 0 && (
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    marginTop: 14,
                  }}
                >
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        fontSize: 13,
                        color: 'var(--text-2)',
                      }}
                    >
                      <CheckCircle size={14} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  )
}

function SplitSection({ section }) {
  return (
    <div className="structured-split-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.9fr', gap: 28 }}>
      <FadeUp>
        <div style={{ background: 'var(--bg-card)', borderRadius: 20, padding: '30px 28px', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: 24, fontWeight: 900, color: 'var(--text)', marginBottom: 14 }}>
            {section.title}
          </h3>
          {section.description && (
            <p style={{ fontSize: 15, color: 'var(--text-3)', lineHeight: 1.75, marginBottom: 16 }}>
              {section.description}
            </p>
          )}
          {section.body?.map((paragraph) => (
            <p
              key={paragraph}
              style={{ fontSize: 15, color: 'var(--text-3)', lineHeight: 1.75, marginBottom: 14 }}
            >
              {paragraph}
            </p>
          ))}
          {section.bullets?.length > 0 && (
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                marginTop: 12,
              }}
            >
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 9,
                    fontSize: 14,
                    color: 'var(--text-2)',
                  }}
                >
                  <CheckCircle size={15} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </FadeUp>
      <FadeUp delay={0.08}>
        <div
          style={{
            background: 'var(--bg-card)',
            borderRadius: 20,
            padding: '30px 28px',
            border: '1px solid var(--border)',
            height: '100%',
          }}
        >
          <h4 style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)', marginBottom: 18 }}>
            {section.asideTitle}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {section.asideItems?.map((item) => (
              <div key={`${item.label}-${item.value}`}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#2563eb',
                    textTransform: 'uppercase',
                    letterSpacing: 1.1,
                    marginBottom: 5,
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  )
}

function StatsSection({ section }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
        gap: 18,
      }}
    >
      {section.items.map((item, index) => (
        <FadeUp key={item.label} delay={index * 0.06}>
          <div
            style={{
              background: 'var(--bg-card)',
              borderRadius: 18,
              padding: '28px 22px',
              textAlign: 'center',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--text)', letterSpacing: '-1px' }}>
              {item.value}
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 6 }}>{item.label}</div>
          </div>
        </FadeUp>
      ))}
    </div>
  )
}

function FaqSection({ section }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {section.items.map((item, index) => {
        const open = openIndex === index

        return (
          <FadeUp key={item.q} delay={index * 0.04}>
            <div style={{ border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
              <button
                onClick={() => setOpenIndex(open ? -1 : index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '18px 20px',
                  background: open ? 'var(--bg-2)' : 'var(--bg-card)',
                  color: 'var(--text)',
                  fontSize: 15,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {item.q}
                <ArrowRight
                  size={16}
                  color="#2563eb"
                  style={{ transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.18s' }}
                />
              </button>
              {open && (
                <div style={{ padding: '0 20px 18px', background: 'var(--bg-card)' }}>
                  <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.75 }}>{item.a}</p>
                </div>
              )}
            </div>
          </FadeUp>
        )
      })}
    </div>
  )
}

function DocumentSection({ section }) {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
      {section.items.map((item, index) => (
        <FadeUp key={item.title} delay={index * 0.05}>
          <article
            style={{
              background: 'var(--bg-card)',
              borderRadius: 18,
              padding: '28px 24px',
              border: '1px solid var(--border)',
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', marginBottom: 12 }}>
              {item.title}
            </h3>
            {item.body?.map((paragraph) => (
              <p
                key={paragraph}
                style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.8, marginBottom: 12 }}
              >
                {paragraph}
              </p>
            ))}
            {item.bullets?.length > 0 && (
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 9,
                }}
              >
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 8,
                      fontSize: 14,
                      color: 'var(--text-2)',
                      lineHeight: 1.7,
                    }}
                  >
                    <CheckCircle size={14} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </article>
        </FadeUp>
      ))}
    </div>
  )
}

function renderSection(section) {
  switch (section.type) {
    case 'cards':
      return <CardsSection section={section} />
    case 'timeline':
      return <TimelineSection section={section} />
    case 'split':
      return <SplitSection section={section} />
    case 'stats':
      return <StatsSection section={section} />
    case 'faq':
      return <FaqSection section={section} />
    case 'document':
      return <DocumentSection section={section} />
    default:
      return null
  }
}

export default function StructuredPage({ page }) {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <SEO {...page.seo} noIndex={page.noIndex} />

      <section
        className="bg-mesh"
        style={{ paddingTop: 120, paddingBottom: 84, position: 'relative', overflow: 'hidden' }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '38px 38px',
          }}
        />
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '0 28px',
            textAlign: 'center',
            color: '#fff',
            position: 'relative',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-dark"
            style={{
              display: 'inline-flex',
              padding: '7px 18px',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 22,
            }}
          >
            {page.hero.eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              fontSize: 'clamp(34px,5vw,60px)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-1.2px',
              maxWidth: 880,
              margin: '0 auto 18px',
            }}
          >
            {page.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18 }}
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 700,
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            {page.hero.description}
          </motion.p>
          {page.hero.badges?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 10,
                flexWrap: 'wrap',
                marginTop: 26,
              }}
            >
              {page.hero.badges.map((badge) => (
                <span
                  key={badge}
                  style={{
                    padding: '7px 12px',
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 700,
                    background: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.92)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          )}
          {page.hero.actions?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 12,
                flexWrap: 'wrap',
                marginTop: 32,
              }}
            >
              {page.hero.actions.map((action) => (
                <ActionLink key={action.label} action={action} hero />
              ))}
            </motion.div>
          )}
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" style={{ width: '100%', display: 'block' }}>
            <path d="M0 60L1440 60L1440 18C1080 60 720 8 360 44L0 18Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      {page.sections.map((section) => (
        <section
          key={`${page.seo.path}-${section.title}`}
          style={{ background: section.background ?? 'var(--bg)', padding: '88px 0' }}
        >
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px' }}>
            <SectionHeader title={section.title} description={section.description} />
            {renderSection(section)}
          </div>
        </section>
      ))}

      {page.finalCta && (
        <section style={{ background: 'var(--bg)', padding: '0 0 90px' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 28px' }}>
            <FadeUp>
              <div
                className="vpn-gradient-anim"
                style={{
                  borderRadius: 24,
                  padding: '58px 38px',
                  textAlign: 'center',
                  boxShadow: '0 20px 60px rgba(29,78,216,0.32)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                  }}
                />
                <h2
                  style={{
                    fontSize: 'clamp(24px,3vw,38px)',
                    fontWeight: 900,
                    color: '#fff',
                    letterSpacing: '-0.6px',
                    marginBottom: 12,
                    position: 'relative',
                  }}
                >
                  {page.finalCta.title}
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: 'rgba(255,255,255,0.76)',
                    maxWidth: 560,
                    margin: '0 auto 30px',
                    lineHeight: 1.75,
                    position: 'relative',
                  }}
                >
                  {page.finalCta.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  {page.finalCta.actions.map((action) => (
                    <ActionLink key={action.label} action={action} />
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      )}
    </div>
  )
}
