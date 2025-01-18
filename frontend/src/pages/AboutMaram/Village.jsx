// Village.js
import React from 'react';
import './Village.css';

const Village = () => {
  return (
    <div className="village-container">
      <h1 className="village-heading">Maram Village</h1>
      <p className="village-description">
        Maram Khullen is the biggest and oldest Maram village, holding a
        prominent role in preserving the tribe’s culture, customs, and
        traditions. It stands as the heart of Maram, safeguarding the unique
        heritage, values, and social norms of the Maram people. The village
        remains a testament to the rich cultural heritage of the Marams.
      </p>
      <div className="village-info">
        <h2>Historical Significance</h2>
        <p>
          Maram Khullen plays a quintessential role in maintaining the
          traditions and rituals of the Maram Naga tribe. It follows the Lunar
          calendar for its customs and celebrations. Maram Khullen continues to
          preserve the cultural roots of the community, even as modern
          influences begin to shape its landscape.
        </p>
      </div>
      <div className="village-info">
        <h2>Culture & Traditions</h2>
        <p>
          The village is deeply rooted in customs such as agriculture, with
          rice cultivation being the primary occupation. Festivals like Punghi
          and Kanghi are celebrated, reinforcing the Maram peoples strong
          cultural ties. While the majority follow Christianity, some still
          practice traditional animism.
        </p>
      </div>
    </div>
  );
};

export default Village;
