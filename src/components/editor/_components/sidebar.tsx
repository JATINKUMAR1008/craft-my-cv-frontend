import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import React from "react";

export const ReportSidebar = () => {
  return (
    <div className="w-full flex flex-col">
      <header className="p-4">
        <h3 className="text-sm font-semibold">Suggestions</h3>
      </header>
      <Separator />
      <main className="py-4 px-2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item1">
            <AccordionTrigger className="text-xs font-semibold">
              ATS Report
            </AccordionTrigger>
            <AccordionContent asChild className="py-1 px-2">
              <div className="w-full h-[140px] bg-muted"></div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
};
