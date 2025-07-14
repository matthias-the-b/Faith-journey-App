import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface Journey {
  id: string;
  name: string;
  description: string;
}

const JourneyList: React.FC = () => {
  const [journeys, setJourneys] = useState<Journey[]>([]);

  useEffect(() => {
    const fetchJourneys = async () => {
      const querySnapshot = await getDocs(collection(db, "journeys"));
      const journeysData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Journey[];
      setJourneys(journeysData);
    };
    fetchJourneys();
  }, []);

  return (
    <div className="space-y-4">
      {journeys.map((journey) => (
        <div key={journey.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{journey.name}</h2>
          <p>{journey.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JourneyList;
