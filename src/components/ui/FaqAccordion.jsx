import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from './Motion'

export function FaqAccordion({ items, idPrefix = 'faq', defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="mx-auto flex max-w-[820px] flex-col gap-3">
      {items.map((item, index) => {
        const open = openIndex === index
        const panelId = `${idPrefix}-${index}`

        return (
          <FadeUp key={item.q} delay={index * 0.04}>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between bg-[var(--bg-card)] px-5 py-[18px] text-left text-[15px] font-bold text-[var(--text)] data-[open=true]:bg-[var(--bg-2)]"
                data-open={open}
              >
                {item.q}
                <ArrowRight
                  size={16}
                  color="#2563eb"
                  className={`shrink-0 transition-transform ${open ? 'rotate-90' : ''}`}
                />
              </button>
              {open && (
                <div id={panelId} className="bg-[var(--bg-card)] px-5 pb-[18px]">
                  <p className="text-sm leading-7 text-[var(--text-3)]">{item.a}</p>
                </div>
              )}
            </div>
          </FadeUp>
        )
      })}
    </div>
  )
}
