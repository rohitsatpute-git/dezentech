export default function EmployeeTable() {
    const employees = [
      {
        id: 1001,
        name: "Ahmed Ali",
        iqamaNumber: "2345678901",
        issueDate: "2023-06-15",
        expiryDate: "2025-06-15",
        status: "Active",
      },
      {
        id: 1002,
        name: "Fatima Khan",
        iqamaNumber: "3456789012",
        issueDate: "2022-11-20",
        expiryDate: "2024-11-20",
        status: "Expiring Soon",
      },
      {
        id: 1003,
        name: "Saeed Omar",
        iqamaNumber: "4567890123",
        issueDate: "2021-12-10",
        expiryDate: "2023-12-10",
        status: "Expired",
      },
    ];
  
    const statusStyles = {
      Active: "bg-green-100 text-green-600",
      "Expiring Soon": "bg-yellow-100 text-yellow-600",
      Expired: "bg-red-100 text-red-600",
    };
  
    return (
      <div className="overflow-x-auto py-4">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              {["Employee ID", "Employee Name", "Iqama Number", "Iqama Issue Date", "Iqama Expiry Date", "Status"].map(
                (heading) => (
                  <th key={heading} className="p-3 font-semibold">
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b border-[#E4E4E4]">
                <td className="p-3">{employee.id}</td>
                <td className="p-3">{employee.name}</td>
                <td className="p-3">{employee.iqamaNumber}</td>
                <td className="p-3">{employee.issueDate}</td>
                <td className="p-3">{employee.expiryDate}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-sm rounded-full font-semibold ${statusStyles[employee.status]}`}
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  