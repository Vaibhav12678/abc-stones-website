import { applications } from "@/data/applications";
import ApplicationCard from "./ApplicationCard";

export default function ApplicationGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
      {applications.map((item, i) => (
        <ApplicationCard key={item.slug} item={item} index={i} />
      ))}
    </div>
  );
}
