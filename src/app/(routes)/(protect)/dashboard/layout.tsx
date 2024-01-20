import Sidebar from "@/components/layout/Sidebar";
import { ReactNode } from "react";

export default async function DashboartLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-row">
      <Sidebar />
      <section className="w-full h-screen px-10 pt-24 bg-[#F4F3FA] overflow-y-auto">
        {children}
      </section>
    </div>
  );
}
