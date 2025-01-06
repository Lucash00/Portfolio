import React, { useState } from 'react';
import Timeline from '../Utils/Timeline';
import CardTimeline from '../Utils/Card/CardTimeline';
import { experiences } from '../../data/experiences';

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className="flex h-screen max-h-screen overflow-hidden">
      {/* Timeline section */}
      <div className="w-1/3 max-h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide">
        <Timeline
          experiences={experiences}
          onExperienceSelect={setSelectedExperience}
        />
      </div>

      {/* Card section */}
      <div className="w-2/3 max-h-screen flex items-center justify-center">
        <CardTimeline experience={selectedExperience} />
      </div>
    </div>
  );
}
