import { FadeUp } from './Motion'

export function SectionHeader({ title, description }) {
  return (
    <FadeUp>
      <div className="mb-12 text-center">
        <h2 className="text-[clamp(24px,3.4vw,42px)] font-black text-[var(--text)]">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-3 max-w-[620px] text-base leading-7 text-[var(--text-3)]">
            {description}
          </p>
        )}
      </div>
    </FadeUp>
  )
}
