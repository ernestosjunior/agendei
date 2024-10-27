import { useQuery } from "@tanstack/react-query";
import { getApiClient } from "../../lib/api";
import { useState } from "react";

export function useHomePage() {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const { data: doctors, isLoading: isLoadingDoctors } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const { data } = await getApiClient().get("/doctors");
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });

  return { doctors, isLoadingDoctors, selectedDoctor, setSelectedDoctor };
}
