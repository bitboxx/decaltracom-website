import { type ReactNode, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/components/elements/container";
import { cn } from "@/lib/utils";

export type Feature106Item = {
  id: number;
  header: string;
  excerpt: string;
  content: ReactNode;
};

interface Feature106Props {
  className?: string;
  features: Feature106Item[];
}

const Feature106 = ({ className, features }: Feature106Props) => {
  const [mobileValue, setMobileValue] = useState("1");
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  function handleMobileValueChange(value: string) {
    setMobileValue(value);

    if (!value) {
      return;
    }

    window.setTimeout(() => {
      const index = features.findIndex((feature) => feature.id.toString() === value);
      const element = contentRefs.current[index];

      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  }

  return (
    <section className={cn("my-24", className)}>
      <Container>
        <Accordion
          type="single"
          collapsible
          value={mobileValue}
          onValueChange={handleMobileValueChange}
          className="overflow-hidden rounded-2xl border border-mist-200 shadow-sm lg:hidden"
        >
          {features.map((feature, index) => (
            <AccordionItem
              key={feature.id}
              value={feature.id.toString()}
              className={cn(
                "relative border-0 overflow-hidden",
                index !== features.length - 1 && "border-b border-white/10",
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_40%),linear-gradient(135deg,rgba(18,27,33,1),rgba(57,81,89,0.96)_52%,rgba(134,162,173,0.88))]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(9,15,19,0.38))]" />
              <AccordionTrigger className="relative items-start px-6 py-4 text-left hover:no-underline [&>svg]:text-white/50">
                <div className="flex flex-col gap-2">
                  <span className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-white/70">
                    {feature.header}
                  </span>
                  <p className="font-display text-xl/7 font-medium text-white">
                    {feature.excerpt}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="relative !h-auto px-6 pb-6 [&>div]:!h-auto">
                <div
                  ref={(element) => {
                    contentRefs.current[index] = element;
                  }}
                  className="scroll-mt-28 flex flex-col gap-5 rounded-2xl border border-mist-200 bg-white p-6 text-base/7 text-mist-700"
                >
                  {feature.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Tabs
          defaultValue="1"
          className="hidden grid-cols-[minmax(0,2fr)_minmax(0,3fr)] overflow-hidden rounded-2xl border border-mist-200 shadow-sm lg:grid"
        >
          <TabsList
            variant="line"
            className="relative !h-auto !w-full flex-col !gap-0 !rounded-none !border-r-0 !p-0 overflow-hidden !bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_40%),linear-gradient(135deg,rgba(18,27,33,1),rgba(57,81,89,0.96)_52%,rgba(134,162,173,0.88))]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(9,15,19,0.38))]" />
            {features.map((feature, index) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id.toString()}
                className={cn(
                  "group relative !h-auto !w-full !flex-col !items-start !justify-start gap-2.5 !rounded-none !border-0 !bg-transparent !px-6 !py-6 !whitespace-normal !text-white !shadow-none !ring-0 transition-all duration-300 after:!hidden data-[state=active]:!bg-white/10 data-[state=active]:!shadow-none data-[state=active]:!ring-0",
                  index !== features.length - 1 &&
                  "!border-b-[1px] !border-b-white/10",
                )}
              >
                <span className="absolute top-0 bottom-0 left-0 h-full w-[3px] rounded-r-full bg-white/85 transition-opacity duration-300 group-data-[state=inactive]:opacity-0"></span>
                <div className="relative flex w-full items-center justify-between gap-2">
                  <div className="flex min-w-0 flex-col items-start gap-2.5">
                    <span className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-white/70">
                      {feature.header}
                    </span>
                    <p className="w-full text-left font-display text-xl/7 font-medium text-white">
                      {feature.excerpt}
                    </p>
                  </div>
                  <ChevronRight className="my-auto h-auto w-4 shrink-0 text-white/50" />
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {features.map((feature) => (
            <TabsContent
              value={feature.id.toString()}
              key={feature.id}
              className="flex flex-col gap-5 bg-white p-6 text-base/7 text-mist-700 sm:p-8 data-[state=inactive]:hidden"
            >
              {feature.content}
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export { Feature106 };
