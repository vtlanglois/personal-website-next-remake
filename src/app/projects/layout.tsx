export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <p>Header</p>
        <nav></nav>
   
        {children}
      </section>
    )
  }