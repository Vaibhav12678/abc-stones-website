import { MapPin, Sparkles } from "lucide-react";
import { ADDRESS_LINES } from "@/lib/constants";

export default function OpeningInfo() {
  return (
    <div className="grid sm:grid-cols-2 gap-8 mt-10">
      <div className="border border-gold/25 p-7">
        <Sparkles size={20} className="text-gold mb-4" strokeWidth={1.4} />
        <p className="eyebrow mb-2">Inauguration</p>
        <p className="text-beige/75 text-sm leading-relaxed">
          Inauguration details will be announced here once finalized.
        </p>
      </div>
      <div className="border border-gold/25 p-7">
        <MapPin size={20} className="text-gold mb-4" strokeWidth={1.4} />
        <p className="eyebrow mb-2">Address</p>
        <p className="text-beige/75 text-sm leading-relaxed">
          {ADDRESS_LINES.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
