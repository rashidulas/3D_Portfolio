import React from 'react';

const LegalDisclaimer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center py-16 px-4">
        <h1 className="text-2xl font-bold text-white">Legal Disclaimer</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          All trademarks, logos and brand names are the property of their respective owners.
          All company, product and service names used in this website are for identification
          purposes only. Use of these names, trademarks and brands does not imply endorsement.
        </p>
      </div>
    </div>
  );
};

export default LegalDisclaimer;
