import React, { useState } from 'react';
import Timeline from '../Utils/Timeline';
import CardTimeline from '../Utils/Card/CardTimeline';
import { experiences } from '../../data/experiences';

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className="h-screen max-h-screen overflow-hidden grid grid-cols-3">
      {/* Timeline section */}
      <div className="col-span-1 max-h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide">
        <Timeline
          experiences={experiences}
          onExperienceSelect={setSelectedExperience}
        />
      </div>

      {/* Card section */}
      <div className="col-span-2 col-start-2 max-h-screen flex items-center justify-center">
        <CardTimeline experience={selectedExperience} />
      </div>
    </div>
  );
}
