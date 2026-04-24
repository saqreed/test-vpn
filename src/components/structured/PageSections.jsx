import { CheckCircle } from 'lucide-react'
import { Card, FaqAccordion, FadeUp, StatGrid } from '../ui'

export function CardsSection({ section }) {
  return (
    <div className="grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
      {section.items.map((item, index) => {
        const Icon = item.Icon

        return (
          <FadeUp key={item.title} delay={index * 0.06}>
            <Card interactive className="px-6 py-7">
              {Icon && (
                <div className="vpn-gradient mb-4 flex h-12 w-12 items-center justify-center rounded-xl shadow-[0_4px_14px_rgba(29,78,216,0.28)]">
                  <Icon size={22} color="#fff" />
                </div>
              )}
              {item.meta && (
                <div className="mb-3 inline-flex rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-bold text-blue-600">
                  {item.meta}
                </div>
              )}
              <h3 className="mb-2.5 text-[17px] font-extrabold text-[var(--text)]">{item.title}</h3>
              <p className="text-sm leading-7 text-[var(--text-3)]">{item.description}</p>
              {item.bullets?.length > 0 && (
                <BulletList items={item.bullets} className="mt-[18px]" />
              )}
            </Card>
          </FadeUp>
        )
      })}
    </div>
  )
}

export function TimelineSection({ section }) {
  return (
    <div className="relative mx-auto max-w-[880px]">
      <div className="absolute bottom-0 left-[18px] top-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-500/10" />
      {section.items.map((item, index) => (
        <FadeUp key={`${item.label}-${item.title}`} delay={index * 0.06}>
          <div className="relative mb-7 flex gap-6">
            <div className="vpn-gradient z-[1] flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-white shadow-[0_3px_10px_rgba(29,78,216,0.3)]">
              {item.label}
            </div>
            <div className="pt-1">
              <h3 className="mb-2 text-[17px] font-extrabold text-[var(--text)]">{item.title}</h3>
              <p className="text-sm leading-7 text-[var(--text-3)]">{item.description}</p>
              {item.bullets?.length > 0 && <BulletList items={item.bullets} className="mt-3.5" />}
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  )
}

export function SplitSection({ section }) {
  return (
    <div className="structured-split-grid grid gap-7 [grid-template-columns:1.3fr_0.9fr]">
      <FadeUp>
        <Card className="px-7 py-[30px]">
          <h3 className="mb-3.5 text-2xl font-black text-[var(--text)]">{section.title}</h3>
          {section.description && (
            <p className="mb-4 text-[15px] leading-7 text-[var(--text-3)]">{section.description}</p>
          )}
          {section.body?.map((paragraph) => (
            <p key={paragraph} className="mb-3.5 text-[15px] leading-7 text-[var(--text-3)]">
              {paragraph}
            </p>
          ))}
          {section.bullets?.length > 0 && <BulletList items={section.bullets} className="mt-3" />}
        </Card>
      </FadeUp>
      <FadeUp delay={0.08}>
        <Card className="h-full px-7 py-[30px]">
          <h4 className="mb-[18px] text-base font-extrabold text-[var(--text)]">{section.asideTitle}</h4>
          <div className="flex flex-col gap-4">
            {section.asideItems?.map((item) => (
              <div key={`${item.label}-${item.value}`}>
                <div className="mb-1 text-xs font-bold uppercase tracking-[1.1px] text-blue-600">{item.label}</div>
                <div className="text-sm leading-7 text-[var(--text-2)]">{item.value}</div>
              </div>
            ))}
          </div>
        </Card>
      </FadeUp>
    </div>
  )
}

export function DocumentSection({ section }) {
  return (
    <div className="mx-auto flex max-w-[900px] flex-col gap-[18px]">
      {section.items.map((item, index) => (
        <FadeUp key={item.title} delay={index * 0.05}>
          <Card as="article" className="px-6 py-7">
            <h3 className="mb-3 text-xl font-extrabold text-[var(--text)]">{item.title}</h3>
            {item.body?.map((paragraph) => (
              <p key={paragraph} className="mb-3 text-sm leading-8 text-[var(--text-3)]">
                {paragraph}
              </p>
            ))}
            {item.bullets?.length > 0 && <BulletList items={item.bullets} />}
          </Card>
        </FadeUp>
      ))}
    </div>
  )
}

function BulletList({ items, className = '' }) {
  return (
    <ul className={`flex list-none flex-col gap-2.5 ${className}`}>
      {items.map((bullet) => (
        <li key={bullet} className="flex items-start gap-2 text-sm leading-7 text-[var(--text-2)]">
          <CheckCircle size={14} color="#2563eb" className="mt-1 shrink-0" />
          {bullet}
        </li>
      ))}
    </ul>
  )
}
