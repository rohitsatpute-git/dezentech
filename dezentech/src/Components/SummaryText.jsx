export default function SummaryText() {
    return (
      <div className="p-6 bg-white shadow rounded-lg">
        <h2 className="text-xl font-bold text-[#1A6D73] mb-4">Summary</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
          <li>
            Ahmed Ali currently holds an active Iqama that was issued on 2013-06-15 and will remain valid until 2025-06-15. Since the expiry date is still far off, no renewal is required at this time.
          </li>
          <li>
            Fatima Khan’s Iqama is set to expire soon on 2024-11-20. It was issued on 2022-12-20, and since the expiration date is approaching, renewal is required to ensure continued validity.
          </li>
          <li>
            Saeed Omar’s Iqama has already expired as of 2023-11-10. His Iqama was issued on 2017-12-10, but since it is no longer valid, renewal is necessary to comply with regulations.
          </li>
          <li>
            Out of the three employees, two require immediate renewal to prevent legal and administrative complications, while one remains compliant for now.
          </li>
        </ul>
  
        <p className="mt-4 text-gray-700">
          The Employee Residency Status Report is a crucial document for ensuring compliance with Saudi labor laws and immigration regulations.
        </p>
        <p className="mt-2 text-gray-700">
          The primary purpose of this report is to track and verify the residency status of all employees working in Saudi Arabia. It ensures that all employees hold valid residency permits (Iqama).
        </p>
  
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#1A6D73]">1. Key Compliance Aspects Reviewed</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 pl-4">
            <li>Iqama Validity: Confirmation of valid residency permits for all foreign employees.</li>
            <li>Iqama Expiry Dates: Identification of upcoming expirations to prompt timely renewal.</li>
          </ul>
        </div>
  
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#1A6D73]">2. Findings and Observations</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 pl-4">
            <li>Valid Iqama Holders: A majority of employees have up-to-date Iqamas.</li>
            <li>Expiring Iqamas: A percentage of employees have Iqamas nearing expiration, requiring renewal within 30-60 days.</li>
          </ul>
        </div>
  
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#1A6D73]">3. Risk and Complications</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 pl-4">
            <li>Non-Renewal of Iqama: Employees with expired Iqamas could face legal action, fines, or deportation.</li>
          </ul>
        </div>
      </div>
    );
  }
  