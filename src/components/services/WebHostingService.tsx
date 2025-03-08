export const WebHostingService = () => {
  return (
    <>
      <section className="pb-4 md:p-20 flex flex-col gap-4 items-center justify-center">
        <div className="text-xl md:text-2xl font-bold">Web Hosting Service</div>

        <div className="flex flex-col gap-2 px-6">
          <div>
            IDMC hosts websites of government offices and organizations only.
            Government Agencies can request services and the required document
            are as follows:
          </div>

          <ul className="list-disc pl-6">
            <li>Need offical letter for any service request.</li>
            <li>IDMC provides hosting service for free of cost.</li>
            <li>
              IDMC provides web space not exceeding to 2 GB for website hosting.
            </li>
            <li>
              IDMC will provide Username and Password of cpanel for your desired
              domain.
            </li>
            <li>
              Website Security Audit Certificate should be submitted to IDMC
              while requesting for hosting the website.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
