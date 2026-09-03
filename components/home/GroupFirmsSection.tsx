"use client";

import Container from "@/components/ui/Container";
import TextDrop from "@/components/ui/TextDrop";
import { groupFirms } from "@/data/groupFirms";
import { MapPin, Factory, Pickaxe, ShieldCheck } from "lucide-react";

const getIcon = (role: string) => {
  if (role.includes("Quarry")) return <Pickaxe size={18} className="text-gold" />;
  if (role.includes("Manufacturing")) return <Factory size={18} className="text-gold" />;
  return <ShieldCheck size={18} className="text-gold" />;
};

export default function GroupFirmsSection() {
  return (
    <section className="bg-[#FAF8F3] py-14 sm:py-20 border-b border-charcoal/10">
      <Container>
        <TextDrop className="max-w-3xl mb-10 sm:mb-14">
          <p className="eyebrow text-gold text-[0.72rem] tracking-[0.22em] uppercase font-semibold mb-2">
            Group Ecosystem &amp; Mining Power
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-medium leading-[1.1]">
            Our Associate Firms &amp; Quarries
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-charcoal/75 leading-relaxed">
            Strengthened by captive quarries, state-of-the-art gang-saw processing, and specialized mineral plants across Rajasthan&apos;s most renowned mineral belts.
          </p>
        </TextDrop>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {groupFirms.map((firm, index) => (
            <TextDrop
              key={firm.name}
              delay={index * 0.08}
              className="bg-white border border-charcoal/15 p-6 sm:p-7 shadow-xs hover:border-gold transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
                    {getIcon(firm.role)}
                  </div>
                  <span className="text-[0.62rem] tracking-[0.16em] uppercase text-charcoal/60 font-semibold bg-[#FAF8F3] px-2.5 py-1 border border-charcoal/10">
                    {firm.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-charcoal font-semibold tracking-wide group-hover:text-gold transition-colors">
                  {firm.name}
                </h3>

                <div className="flex items-start gap-1.5 mt-2 mb-4 text-xs text-charcoal/70">
                  <MapPin size={13} className="text-gold shrink-0 mt-0.5" />
                  <span className="leading-snug">{firm.location}</span>
                </div>

                <p className="text-xs text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-3">
                  {firm.specialization}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-charcoal/5 flex items-center justify-between text-[0.65rem] text-charcoal/40 uppercase tracking-widest font-medium">
                <span>Rajasthan, India</span>
                <span className="text-gold font-bold">0{index + 1}</span>
              </div>
            </TextDrop>
          ))}
        </div>
      </Container>
    </section>
  );
}
