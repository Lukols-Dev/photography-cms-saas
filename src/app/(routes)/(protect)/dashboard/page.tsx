import CardDashboard from "@/components/layout/CardDashboard";

const DashboardPage = async () => {
  return (
    <section className="flex flex-col h-[1000px]">
      <CardDashboard className="bg-red-500">
        <h1 className="text-4xl font-bold flex gap-2 mb-2">Dashboard</h1>
      </CardDashboard>
    </section>
  );
};

export default DashboardPage;
