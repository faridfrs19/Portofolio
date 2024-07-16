import React, { useState } from "react";
import { styles } from "../styles";

import s1 from "../assets/serti/s1.jpg";
import s2 from "../assets/serti/s2.jpg";
import s3 from "../assets/serti/s3.jpg";
import s4 from "../assets/serti/s4.jpg";
import s5 from "../assets/serti/s5.jpg";
import s6 from "../assets/serti/s6.jpg";
import s7 from "../assets/serti/s7.jpg";
import s8 from "../assets/serti/s8.jpg";
import s9 from "../assets/serti/s9.jpg";
import s10 from "../assets/serti/s10.jpg";
import s11 from "../assets/serti/s11.jpg";
import s12 from "../assets/serti/s12.jpg";
import s13 from "../assets/serti/s13.jpg";
import s14 from "../assets/serti/s14.jpg";
import s15 from "../assets/serti/s15.jpg";
import s16 from "../assets/serti/s16.jpg";

const Certificate = () => {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    { images: [s1] },
    { images: [s2] },
    { images: [s3] },
    { images: [s4] },
    { images: [s5] },
    { images: [s6] },
    { images: [s7] },
    { images: [s8] },
    { images: [s9] },
    { images: [s10] },
    { images: [s11] },
    { images: [s12] },
    { images: [s13] },
    { images: [s14] },
    { images: [s15] },
    { images: [s16] },
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <div className="bg-all w-full min-h-screen p-6" id="certificate">
      <div className="sm:ms-16 ms-6">
        <p className={`${styles.sectionSubText} text-center`}>My Certificates</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certification</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {visibleCertificates.map((certificate, index) => (
          <div
            key={`certificate-${index}`}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-60 md:h-72">
              <img
                src={certificate.images[0]}
                alt={certificate.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {certificates.length > 6 && (
        <div className="mt-6 text-center">
          <button
            onClick={toggleShowAll}
            className="bg-slate-100 text-black px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Certificate;
