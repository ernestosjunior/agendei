import { useEffect, useState } from "react";
import { getDoctors } from "../../http/get-doctors";

type Doctor = {
  id: number;
  icon: "M" | "F";
  name: string;
  specialty: string;
};

export function useHomeTab() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loadingDoctors, setLoadingDoctors] = useState(false);

  async function fetchDoctors() {
    setLoadingDoctors(true);
    try {
      const response = await getDoctors();

      setDoctors(response);
    } finally {
      setLoadingDoctors(false);
    }
  }

  useEffect(() => {
    fetchDoctors();
  }, []);

  return { doctors, loadingDoctors, fetchDoctors };
}
