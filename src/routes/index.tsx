import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CircleDollarSign,
  ExternalLink,
  Landmark,
  LineChart,
  Play,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import investorPersonalities from "@/assets/investor-personalities.jpg";
import logoAsset from "@/assets/first-capital-logo.png.asset.json";
import { Button } from "@/components/ui/button";

const disclaimer =
  "This quiz provides only a general indication of your investor profile and potentially suitable investment types. It does not consider your individual financial situation, objectives or needs. Please assess suitability based on your circumstances and seek professional advice where appropriate.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Find Your Investor Type | First Capital Investor Week" },
      { name: "description", content: "Take the First Capital investor personality quiz and explore investment options that align with your goals." },
      { property: "og:title", content: "Find Your Investor Type | First Capital" },
      { property: "og:description", content: "You already know how to start. Discover your investor personality and explore your investment match." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    icon: CircleDollarSign,
    title: "Money Market Fund",
    tags: ["Short-term", "Relatively lower risk", "Withdraw anytime", "Start with LKR 1,000"],
    copy: "For investors who want to keep their money accessible while putting it to work.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed Income Fund",
    tags: ["Medium to long term", "Relatively stable returns", "Access anytime", "Start with LKR 1,000"],
    copy: "For investors looking for relatively stable returns while keeping access to their money.",
  },
  {
    icon: LineChart,
    title: "Equity Fund",
    tags: ["Long-term", "Growth", "Market exposure", "Start with LKR 1,000"],
    copy: "For investors looking to grow their wealth over the long term through the stock market and who are comfortable with market fluctuations.",
  },
];

const reasons = [
  { icon: Users, title: "Professional Management", copy: "With the premier Unit Trust company in Sri Lanka, there’s no need to pick assets; specialists track the market for you." },
  { icon: BarChart3, title: "Diversification", copy: "Your risk spreads across multiple investments, not one big bet." },
  { icon: Sparkles, title: "Start Small", copy: "Begin with only LKR 1,000." },
  { icon: RefreshCw, title: "Easy Entry and Exit", copy: "Buy or sell units with flexibility, because you deserve the power to control your assets." },
  { icon: Landmark, title: "40+ Years of Investment Expertise", copy: "Over four decades of experience in Sri Lanka’s capital markets." },
  { icon: Building2, title: "Backed by Janashakthi Group", copy: "Part of one of Sri Lanka’s established financial conglomerates." },
  { icon: CircleDollarSign, title: "Options for Different Goals", copy: "Investments in different asset classes to suit different goals and time horizons." },
  { icon: BookOpen, title: "Research Insights and Education", copy: "Access market insights, research and educational content to invest with confidence." },
];

function SectionLabel({ children }: { children: string }) {
  return <p className="mb-4 text-xs font-extrabold uppercase text-muted-foreground">{children}</p>;
}

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" aria-label="First Capital home" className="block min-w-0">
            <img src={logoAsset.url} alt="First Capital — A Janashakthi Group Company" className="h-auto w-44 sm:w-56" width="1698" height="432" />
          </a>
          <div className="flex shrink-0 items-center gap-3 border-l-2 border-primary pl-4">
            <span className="text-right text-xs font-extrabold uppercase leading-tight text-foreground sm:text-sm">Investor<br />Week</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Start small.<br />Think forward.</span>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative">
          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-16">
            <div className="relative z-10 max-w-xl">
              <SectionLabel>First Capital Investor Week</SectionLabel>
              <h1 className="text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">You Already Know<br /><span className="relative inline-block">How to Start.<span className="absolute -bottom-1 left-0 h-2 w-full bg-primary/75" /></span></h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">You start small. You stay consistent. You plan for the future. You do it in so many areas of your life. Why not <strong className="font-bold text-foreground">do the same with investing?</strong></p>
              <p className="mt-5 text-base font-bold text-foreground">Fill the quiz and find your investor personality.</p>
              <div className="mt-7">
                <Button asChild size="lg">
                  <a href="#quiz">Find My Investor Type <ArrowRight className="size-5" /></a>
                </Button>
              </div>
              <p className="mt-6 max-w-xl text-[11px] leading-5 text-muted-foreground">{disclaimer}</p>
            </div>
            <div className="relative self-end lg:-mr-12">
              <div className="absolute bottom-12 left-3 h-[68%] w-[92%] border-b-[18px] border-primary" />
              <img src={investorPersonalities} alt="Four approachable investor personalities" className="relative z-10 h-auto w-full object-contain" width="1408" height="1056" />
              <div className="relative z-20 -mt-6 grid grid-cols-2 border border-border bg-background sm:grid-cols-4">
                {[["01", "Keep-It-Cool"], ["02", "Smooth Operator"], ["03", "Patient Player"], ["04", "Opportunity Hunter"]].map(([number, name], index) => (
                  <div key={name} className={`p-3 ${index > 0 ? "border-l border-border" : ""}`}>
                    <span className="text-[10px] font-bold text-muted-foreground">{number}</span>
                    <p className="mt-1 text-xs font-extrabold leading-tight">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="quiz" className="bg-foreground text-background">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
            <div>
              <SectionLabel>Investor personality quiz</SectionLabel>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">Seven simple questions. One clearer place to begin.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-background/70">Your choices help indicate one of four investor personalities and a potentially suitable investment type.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg"><a href="#options">Explore My Investment Match <ArrowRight className="size-5" /></a></Button>
              <Button asChild size="lg" variant="outline"><a href="#top">Retake the Quiz <RefreshCw className="size-4" /></a></Button>
            </div>
          </div>
          <div className="mx-auto max-w-7xl border-t border-background/20 px-5 py-4 text-[10px] leading-4 text-background/60 sm:px-8 lg:px-12">{disclaimer}</div>
        </section>

        <section id="options" className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Learn more about investing</SectionLabel>
            <div className="grid gap-6 lg:grid-cols-[0.65fr_1fr] lg:items-end">
              <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">Explore Your<br />Investment Options</h2>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">Discover different ways to invest and find options that align with your goals.</p>
            </div>

            <div className="mt-12 border-t border-border">
              <div className="grid gap-8 py-10 lg:grid-cols-[0.35fr_1fr]">
                <div><span className="text-sm font-extrabold text-primary-foreground">01</span><h3 className="mt-2 text-2xl font-extrabold">Unit Trust Funds</h3></div>
                <div>
                  <p className="max-w-3xl leading-7 text-muted-foreground">A Unit Trust Fund pools money from multiple investors into a single fund. This money is professionally managed and invested in a range of investments based on the fund’s investment objective.</p>
                  <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
                    {products.map((product) => {
                      const Icon = product.icon;
                      return <article key={product.title} className="bg-background p-6"><Icon className="size-7 text-accent" /><h4 className="mt-5 text-xl font-extrabold">{product.title}</h4><p className="mt-4 text-sm leading-6 text-muted-foreground">{product.copy}</p><div className="mt-5 flex flex-wrap gap-2">{product.tags.map((tag) => <span key={tag} className="border border-border bg-secondary px-2 py-1 text-[10px] font-bold">{tag}</span>)}</div></article>;
                    })}
                  </div>
                  <a href="https://www.tiktok.com/@first.capital/video/7593165117668265223" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold underline decoration-primary decoration-2 underline-offset-4"><Play className="size-4" /> What are Unit Trust Funds? <ExternalLink className="size-3" /></a>
                  <p className="mt-5 text-[10px] leading-4 text-muted-foreground">Past performance is not an indicator of future performance | Investors are advised to read and understand the contents of Key Investor Information Document (KIID) | The fund is approved by the Securities and Exchange Commission of Sri Lanka (SEC)</p>
                </div>
              </div>

              <div className="grid gap-8 border-t border-border py-10 lg:grid-cols-[0.35fr_1fr]">
                <div><span className="text-sm font-extrabold">02</span><h3 className="mt-2 text-2xl font-extrabold">Government Securities</h3></div>
                <div><p className="max-w-3xl leading-7 text-muted-foreground">Government securities are investments issued by the Government of Sri Lanka to raise money. When you invest, you lend your money to the government for a defined period. In return, you receive interest, with the original investment paid back at maturity.</p><p className="mt-5 border-l-4 border-primary pl-4 font-bold leading-7">You invest → the government uses your money → you receive interest → your investment is repaid at maturity.</p><div className="mt-5 flex flex-wrap gap-2">{["Government-issued", "Regular interest", "Defined maturity"].map((tag) => <span key={tag} className="border border-border bg-secondary px-3 py-1.5 text-xs font-bold">{tag}</span>)}</div><p className="mt-5 text-[10px] text-muted-foreground">Terms & Conditions apply. Subject to associated risks.</p></div>
              </div>

              <div className="grid gap-8 border-y border-border py-10 lg:grid-cols-[0.35fr_1fr]">
                <div><span className="text-sm font-extrabold">03</span><h3 className="mt-2 text-2xl font-extrabold">Equities</h3></div>
                <div><p className="max-w-3xl leading-7 text-muted-foreground">It simply means investing in shares of listed companies. When you buy shares, you own a percentage of the company. The value of your investment can rise or fall based on the company’s performance and market conditions.</p><p className="mt-5 border-l-4 border-primary pl-4 font-bold leading-7">You buy shares → you own a small part of a company → the share value can rise or fall → you can benefit if the value increases.</p><a href="https://www.youtube.com/shorts/HGL82Tv1wJE" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold underline decoration-primary decoration-2 underline-offset-4"><Play className="size-4" /> How do equities work? <ExternalLink className="size-3" /></a><p className="mt-5 text-[10px] text-muted-foreground">Equity investments are subject to market risk.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Why First Capital?</SectionLabel>
            <h2 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">Experience that helps you move forward.</h2>
            <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason) => { const Icon = reason.icon; return <article key={reason.title} className="min-h-64 bg-background p-6"><Icon className="size-7 text-accent" /><h3 className="mt-8 text-lg font-extrabold">{reason.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{reason.copy}</p></article>; })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-foreground px-5 py-20 text-background sm:px-8 lg:px-12">
          <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[48px] border-primary/20" />
          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><SectionLabel>Your next chapter</SectionLabel><h2 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">Ready to take the next step and become an investor?</h2></div>
            <Button asChild size="lg"><a href="https://portal.firstcapital.lk/#/sign-up" target="_blank" rel="noreferrer">I’m Ready to Open an Account <ArrowRight className="size-5" /></a></Button>
          </div>
        </section>
      </main>

      <footer className="bg-background px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.4fr_1fr]">
          <div><img src={logoAsset.url} alt="First Capital" className="h-auto w-44" width="1698" height="432" /><p className="mt-5 text-sm font-bold">0112 651 651</p><a href="mailto:info@firstcapital.lk" className="mt-1 block text-sm font-bold underline decoration-primary decoration-2 underline-offset-4">info@firstcapital.lk</a></div>
          <div className="md:border-l md:border-border md:pl-8"><p className="text-xs font-extrabold uppercase">Disclaimer</p><p className="mt-3 max-w-3xl text-[11px] leading-5 text-muted-foreground">{disclaimer}</p><p className="mt-8 text-[10px] text-muted-foreground">© First Capital. A Janashakthi Group Company.</p></div>
        </div>
      </footer>
    </div>
  );
}
