export default function SummaryTable() {
    const summaryData = [
      { label: "Total number of employees", value: "5" },
      { label: "Total number of non saudi employees", value: "3" },
      { label: "Total number of Iqama", value: "3" },
      { label: "Iqama status distribution", value: "1 active, 1 expiring soon, 1 expired" },
    ];
  
    return (
      <div className="overflow-x-auto py-4">
        <table className="w-full  rounded-lg ">
          <tbody>
            {summaryData.map((item, index) => (
              <tr key={index} className={`border-b ${index === 0 && 'border-t'}   border-[#E4E4E4]`}>
                <td className="p-4 font-semibold flex justify-center border-r border-l  border-[#E4E4E4]">{item.label}</td>
                <td className="p-4 text-center border-r border-[#E4E4E4]">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  