import { FadeUp } from './Motion'
import { Card } from './Card'

export function StatGrid({ items }) {
  return (
    <div className="grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
      {items.map((item, index) => (
        <FadeUp key={item.label} delay={index * 0.06}>
          <Card className="px-[22px] py-7 text-center">
            <div className="text-[32px] font-black text-[var(--text)]">{item.value}</div>
            <div className="mt-1.5 text-[13px] text-[var(--text-3)]">{item.label}</div>
          </Card>
        </FadeUp>
      ))}
    </div>
  )
}
