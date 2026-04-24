import SEO from './SEO'
import SectionRenderer from './structured/SectionRenderer'
import { ActionLink, Container, FadeUp, PageHero, SectionHeader } from './ui'

export default function StructuredPage({ page }) {
  return (
    <div className="overflow-x-hidden">
      <SEO {...page.seo} noIndex={page.noIndex} />
      <PageHero hero={page.hero} />

      {page.sections.map((section) => (
        <section
          key={`${page.seo.path}-${section.title}`}
          className="py-[88px]"
          style={{ background: section.background ?? 'var(--bg)' }}
        >
          <Container>
            <SectionHeader title={section.title} description={section.description} />
            <SectionRenderer section={section} />
          </Container>
        </section>
      ))}

      {page.finalCta && (
        <section className="bg-[var(--bg)] pb-[90px]">
          <Container narrow>
            <FadeUp>
              <div className="vpn-gradient-anim relative overflow-hidden rounded-3xl px-9 py-14 text-center shadow-[0_20px_60px_rgba(29,78,216,0.32)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-[180px] w-[180px] rounded-full bg-white/10" />
                <h2 className="relative mb-3 text-[clamp(24px,3vw,38px)] font-black text-white">
                  {page.finalCta.title}
                </h2>
                <p className="relative mx-auto mb-[30px] max-w-[560px] text-base leading-7 text-white/75">
                  {page.finalCta.description}
                </p>
                <div className="relative flex flex-wrap justify-center gap-3">
                  {page.finalCta.actions.map((action) => (
                    <ActionLink key={action.label} action={action} />
                  ))}
                </div>
              </div>
            </FadeUp>
          </Container>
        </section>
      )}
    </div>
  )
}
