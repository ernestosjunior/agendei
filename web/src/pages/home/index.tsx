import { FormControl, MenuItem, Select } from "@mui/material";
import { Button, Header, PageHeader } from "../../components";
import { useHomePage } from "./useHomePage";
import React from "react";

export function Home() {
  const { doctors, isLoadingDoctors, selectedDoctor, setSelectedDoctor } =
    useHomePage();

  return (
    <main>
      <Header />
      <PageHeader
        page="Agendamentos"
        primaryAction={
          <Button className="max-w-[176px]" variant="outline">
            Novo Agendamento
          </Button>
        }
        secondaryActions={[
          <FormControl>
            <Select
              style={{
                width: "237px",
                height: "45px",
                borderRadius: "6px",
              }}
              labelId="demo-simple-select-label"
              id="doctor=select"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              displayEmpty
              disabled={isLoadingDoctors}
            >
              <MenuItem value="">
                <em>
                  {isLoadingDoctors ? "Carregando..." : "Todos os médicos"}
                </em>
              </MenuItem>
              {React.Children.toArray(
                doctors?.map((doctor: { id: number; name: string }) => (
                  <MenuItem value={doctor.id}>{doctor.name}</MenuItem>
                ))
              )}
            </Select>
          </FormControl>,
          <Button className="max-w-[86px]">Filtrar</Button>,
        ]}
      />
    </main>
  );
}
