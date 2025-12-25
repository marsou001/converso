import CompanionForm from "@/components/CompanionForm";

function Page() {
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 max-w-lg items-center justify-center">
      <div className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>

        <CompanionForm />
      </div>
    </main>
  )
}

export default Page;