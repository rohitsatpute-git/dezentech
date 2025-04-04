export default function Footer() {
    return (
      <footer className="bg-[#fff]/80 p-[12px] lg:px-4">
        <p className="text-gray-700 text-sm lg:text-lg mb-4">
          <strong>Disclaimer:</strong> This report is for informational purposes only and is based on the latest available data from <strong>AWN</strong>. All details are subject to real-time updates, and verification from official sources is required before making decisions. <strong>AWN</strong> is not liable for discrepancies, outdated information, or actions taken based on this report.
        </p>
  
        <div className="bg-[#1A6D73] py-12 px-[12px] lg:px-16  text-white flex flex-col w-full gap-y-4 lg:gap-y-8">
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold">عون AWN</span>
            </div>
    
            <div className="flex items-center lg:flex-row flex-col  mt-4 md:mt-0 text-xl gap-x-16">
                <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>0582940754</span>
                </div>
                <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>care@awn.s</span>
                </div>
                <div className="flex items-center space-x-2">
                <span>🌍</span>
                <span>www.awn.sa</span>
                </div>
            </div>

          </div>
  
          <div className="flex flex-wrap justify-between  space-x-4 mt-4 md:mt-0 text-sm lg:text-lg w-full">
            <div className="flex items-center space-x-1">
              <span>🏢</span>
              <span>Business Setup Services</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>👥</span>
              <span>Employees Compliance Services</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📋</span>
              <span>Business Compliance Services</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>🛠</span>
              <span>HR Management Services</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  