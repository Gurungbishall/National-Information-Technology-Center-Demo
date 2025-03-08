export const DomainRegistrationService = () => {
  return (
    <>
      <section className="pb-4 md:p-20 flex flex-col gap-4 items-center justify-center">
        <div className="text-xl md:text-2xl font-bold">Domain Registration Service</div>

        <div className="flex flex-col gap-2 px-6">
          <div>
            IDMC registers.gov.np domain only for government organizations.
          </div>
          <div>
            Government Agencies can request services and the required documents
            are as follows:
          </div>
          <ul className="list-disc pl-6">
            <li>Need offical letter for any service request.</li>
            <li>
              The registration form must contain valid administrator and
              technical contacts.
            </li>
          </ul>
          <div>Domain registrations under .gov.np are free of cost.</div>
          <div>
            Domains are registered in a first-come-first-serve basis but terms
            and conditions must apply.
          </div>
          <div>
            The DNS server will be the DNS of the IDMC as directed by Office of
            Prime Minister and Council of Ministers(OPMCM) which are as follows:
          </div>
          <ul className="list-disc pl-6">
            <li>Primary DNS: mechi.nitc.gov.np - 202.45.144.2</li>
            <li>Secondary DNS: koshi.nitc.gov.np - 202.45.144.3</li>
            <li>Tertiary DNS: bagmati.nitc.gov.np - 103.140.0.9</li>
          </ul>
          <div>
            Official request to IDMC should be submitted while requesting for
            .gov.np domain registration.
          </div>

          <div className="text-red-600">
            NOTE: A domain name can be selected on your own, but depends on the
            availability of .NP ccTLD registrar@aspn&apos;s database.
          </div>
        </div>
      </section>
    </>
  );
};
